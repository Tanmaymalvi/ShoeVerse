import { brands, categories } from '../data/products'
import { formatPrice } from '../utils/calculations'

export default function FilterSidebar({ filters, setFilters }) {
  const update = (key, value) => setFilters((state) => ({ ...state, [key]: value }))
  return (
    <aside className="filters">
      <h2>Filters</h2>
      <label>Category<select value={filters.category} onChange={(event) => update('category', event.target.value)}><option value="">All</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Brand<select value={filters.brand} onChange={(event) => update('brand', event.target.value)}><option value="">All</option>{brands.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Max price<input type="range" min="5000" max="20000" step="500" value={filters.maxPrice} onChange={(event) => update('maxPrice', Number(event.target.value))} /><span>Up to {formatPrice(filters.maxPrice)}</span></label>
      <label>Rating<select value={filters.rating} onChange={(event) => update('rating', Number(event.target.value))}><option value="0">Any rating</option><option value="4">4+ stars</option><option value="4.5">4.5+ stars</option></select></label>
      <label>Sort<select value={filters.sort} onChange={(event) => update('sort', event.target.value)}><option value="popular">Popularity</option><option value="newest">Newest</option><option value="price-low">Price low to high</option><option value="price-high">Price high to low</option></select></label>
    </aside>
  )
}
