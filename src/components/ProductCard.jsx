import { motion } from 'framer-motion'
import { FiEye, FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useWishlist } from '../hooks/useWishlist'
import { formatPrice } from '../utils/calculations'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  return (
    <motion.article className="product-card" whileHover={{ y: -6 }} layout>
      <button className={`wish ${isWishlisted(product.id) ? 'active' : ''}`} onClick={() => toggleWishlist(product)} aria-label="Toggle wishlist"><FiHeart /></button>
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.images[0]} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-info">
        <span>{product.brand}</span>
        <h3>{product.name}</h3>
        <p className="rating"><FiStar /> {product.rating} ({product.reviews})</p>
        <p className="price"><strong>{formatPrice(product.discountPrice)}</strong><del>{formatPrice(product.price)}</del></p>
        <p className={product.stock > 8 ? 'stock in' : 'stock low'}>{product.stock > 8 ? 'In stock' : 'Limited stock'}</p>
        <div className="card-actions">
          <Link className="icon-btn" to={`/product/${product.id}`} aria-label="Quick view"><FiEye /></Link>
          <button className="btn primary" type="button" onClick={() => addToCart(product)}><FiShoppingCart /> Add</button>
        </div>
      </div>
    </motion.article>
  )
}
