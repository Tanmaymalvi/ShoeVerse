import { motion } from 'framer-motion'
import { FiArrowRight, FiShield, FiTruck } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1800&q=85" alt="Premium sneakers collection" />
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <span>New Season Drop</span>
        <h1>ShoeVerse</h1>
        <p>Performance runners, street icons, and everyday comfort from the world's most loved footwear brands.</p>
        <div className="hero-actions">
          <Link className="btn primary" to="/products">Shop Collection <FiArrowRight /></Link>
          <Link className="btn ghost" to="/about">Explore Story</Link>
        </div>
        <div className="hero-metrics">
          <strong>25+<span>Curated styles</span></strong>
          <strong>12<span>Partner brands</span></strong>
          <strong><FiTruck /><span>Fast dispatch</span></strong>
          <strong><FiShield /><span>Secure checkout</span></strong>
        </div>
      </motion.div>
    </section>
  )
}
