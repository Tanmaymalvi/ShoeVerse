import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useWishlist } from '../hooks/useWishlist'

export default function Wishlist() {
  const { wishlist } = useWishlist()
  if (!wishlist.length) return <main className="page empty"><div className="empty-illustration">♡</div><h1>Your wishlist is empty.</h1><p>Save shoes you love and return to them anytime.</p><Link className="btn primary" to="/products">Explore Products</Link></main>
  return <main className="page"><div className="page-head"><span>Wishlist</span><h1>Saved footwear</h1></div><div className="product-grid">{wishlist.map((product) => <ProductCard key={product.id} product={product} />)}</div></main>
}
