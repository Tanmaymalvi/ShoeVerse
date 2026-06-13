import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiRefreshCw, FiShield, FiShoppingBag, FiTruck, FiZap } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import BrandSlider from '../components/BrandSlider'
import CategoryCard from '../components/CategoryCard'
import HeroBanner from '../components/HeroBanner'
import ProductCard from '../components/ProductCard'
import ReviewCard from '../components/ReviewCard'
import { categories, products } from '../data/products'

const categoryImages = [
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80',
]

export default function Home() {
  return (
    <>
      <HeroBanner />
      <section className="section">
        <div className="section-title split-title">
          <div><span>Featured Collection</span><h2>Trending shoes picked for today</h2></div>
          <Link to="/products" className="text-link">View all <FiArrowRight /></Link>
        </div>
        <div className="product-grid">{products.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>

      <section className="promo-strip section">
        <div>
          <span>Weekend Edit</span>
          <h2>Built for training mornings and street-ready evenings.</h2>
          <p>Explore a tighter curation of runners, sneakers, and sport shoes selected for comfort, grip, and everyday versatility.</p>
        </div>
        <Link className="btn accent" to="/products"><FiShoppingBag /> Shop the Edit</Link>
      </section>

      <section className="section">
        <div className="section-title"><span>Shop by Category</span><h2>Find the right pair faster</h2></div>
        <div className="category-grid">{categories.map((category, index) => <CategoryCard key={category} category={category} image={categoryImages[index]} />)}</div>
      </section>

      <section className="editorial-grid section">
        <article>
          <img src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1000&q=80" alt="Running shoes closeup" />
          <div><span>Performance Lab</span><h2>Responsive cushioning for daily mileage.</h2><p>Compare running shoes with reliable support, breathable uppers, and road-ready traction.</p></div>
        </article>
        <article>
          <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1000&q=80" alt="Lifestyle sneaker" />
          <div><span>Street Rotation</span><h2>Clean sneakers that work all week.</h2><p>Premium silhouettes from Nike, Adidas, Puma, Skechers, Reebok, and ASICS.</p></div>
        </article>
      </section>

      <BrandSlider />
      <section className="section">
        <div className="feature-grid">
          {[[FiShield, 'Premium Quality'], [FiTruck, 'Fast Delivery'], [FiZap, 'Secure Payments'], [FiRefreshCw, 'Easy Returns']].map(([Icon, label]) => (
            <motion.div className="feature enhanced-feature" key={label} whileHover={{ y: -4 }}><Icon /><h3>{label}</h3><p>Reliable service with every ShoeVerse order.</p><FiCheckCircle /></motion.div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-title"><span>Customer Reviews</span><h2>Loved by shoppers and sneaker fans</h2></div>
        <div className="review-grid">
          <ReviewCard name="Aarav Mehta" image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" review="The checkout felt smooth and my running shoes arrived ahead of schedule." />
          <ReviewCard name="Nisha Rao" image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" review="Great selection, clean filters, and the product detail pages made choosing easy." />
          <ReviewCard name="Kabir Sethi" image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" review="Feels like a proper premium footwear store. Wishlist and cart persistence are excellent." />
        </div>
      </section>
    </>
  )
}
