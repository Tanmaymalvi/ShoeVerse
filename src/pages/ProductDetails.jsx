import { useMemo, useState } from 'react'
import { FiHeart, FiShoppingBag, FiStar } from 'react-icons/fi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import QuantitySelector from '../components/QuantitySelector'
import ReviewCard from '../components/ReviewCard'
import { products } from '../data/products'
import { useCart } from '../hooks/useCart'
import { useWishlist } from '../hooks/useWishlist'
import { formatPrice } from '../utils/calculations'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((item) => item.id === Number(id))
  const [image, setImage] = useState(product?.images[0])
  const [qty, setQty] = useState(1)
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const related = useMemo(() => products.filter((item) => item.category === product?.category && item.id !== product.id).slice(0, 4), [product])

  if (!product) return <main className="page empty"><h1>Product not found</h1><Link className="btn primary" to="/products">Back to Products</Link></main>

  const buyNow = () => {
    addToCart(product, qty)
    navigate('/checkout')
  }

  return (
    <main className="page">
      <section className="details">
        <div className="gallery">
          <img className="main-image" src={image} alt={product.name} />
          <div className="thumbs">{product.images.map((src) => <button type="button" key={src} onClick={() => setImage(src)}><img src={src} alt="" /></button>)}</div>
        </div>
        <div className="details-copy">
          <span>{product.brand} / {product.category}</span>
          <h1>{product.name}</h1>
          <p className="rating"><FiStar /> {product.rating} rating from {product.reviews} reviews</p>
          <p className="price large"><strong>{formatPrice(product.discountPrice)}</strong><del>{formatPrice(product.price)}</del></p>
          <p>{product.description}</p>
          <p className="stock in">{product.stock} pairs available</p>
          <QuantitySelector value={qty} onIncrease={() => setQty((value) => value + 1)} onDecrease={() => setQty((value) => Math.max(1, value - 1))} />
          <div className="detail-actions">
            <button className="btn primary" type="button" onClick={() => addToCart(product, qty)}><FiShoppingBag /> Add To Cart</button>
            <button className="btn accent" type="button" onClick={buyNow}>Buy Now</button>
            <button className={`btn ghost ${isWishlisted(product.id) ? 'active' : ''}`} type="button" onClick={() => toggleWishlist(product)}><FiHeart /> Wishlist</button>
          </div>
          <div className="specs">{Object.entries(product.specifications).map(([key, value]) => <p key={key}><strong>{key}</strong><span>{value}</span></p>)}</div>
        </div>
      </section>
      <section className="section compact"><div className="section-title"><span>Reviews</span><h2>What customers say</h2></div><div className="review-grid"><ReviewCard name="Verified Buyer" image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80" review="Excellent comfort and premium finish. The fit guide was accurate." /></div></section>
      <section className="section compact"><div className="section-title"><span>Related</span><h2>More like this</h2></div><div className="product-grid">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section>
    </main>
  )
}
