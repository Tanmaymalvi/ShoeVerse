import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '../components/FilterSidebar'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import { products } from '../data/products'
import { formatPrice } from '../utils/calculations'

export default function Products() {
  const [params] = useSearchParams()
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ category: params.get('category') || '', brand: '', maxPrice: 20000, rating: 0, sort: 'popular' })

  const visibleProducts = useMemo(() => {
    return products
      .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()))
      .filter((product) => !filters.category || product.category === filters.category)
      .filter((product) => !filters.brand || product.brand === filters.brand)
      .filter((product) => product.discountPrice <= filters.maxPrice)
      .filter((product) => product.rating >= filters.rating)
      .sort((a, b) => {
        if (filters.sort === 'price-low') return a.discountPrice - b.discountPrice
        if (filters.sort === 'price-high') return b.discountPrice - a.discountPrice
        if (filters.sort === 'newest') return Number(b.isNew) - Number(a.isNew)
        return b.popularity - a.popularity
      })
  }, [filters, search])

  return (
    <main className="catalog page">
      <div className="page-head catalog-head">
        <span>Catalog</span>
        <h1>Premium footwear collection</h1>
        <p>Search, filter, and sort across performance runners, street sneakers, casual pairs, and sport shoes from leading brands.</p>
        <SearchBar value={search} onChange={setSearch} />
        <div className="catalog-pills">
          <strong>{products.length} styles</strong>
          <strong>From {formatPrice(Math.min(...products.map((product) => product.discountPrice)))}</strong>
          <strong>Free shipping over {formatPrice(4999)}</strong>
        </div>
      </div>
      <div className="catalog-layout">
        <FilterSidebar filters={filters} setFilters={setFilters} />
        <section>
          <div className="catalog-toolbar">
            <p className="result-count">{visibleProducts.length} products found</p>
            <span>{filters.sort.replace('-', ' ')}</span>
          </div>
          {visibleProducts.length ? (
            <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
          ) : (
            <div className="profile-empty">No products match these filters. Try a broader price range or another brand.</div>
          )}
        </section>
      </div>
    </main>
  )
}
