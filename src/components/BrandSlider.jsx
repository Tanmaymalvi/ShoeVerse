import { motion } from 'framer-motion'
import { brandPartners } from '../utils/constants'

export default function BrandSlider() {
  const brands = [...brandPartners, ...brandPartners]
  return (
    <section className="brand-band section">
      <div className="section-title">
        <span>Brand Partners</span>
        <h2>Trusted names, curated for ShoeVerse</h2>
      </div>
      <div className="marquee" aria-label="Brand partners">
        <motion.div className="marquee-track" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
          {brands.map((brand, index) => <span className="brand-logo" key={`${brand}-${index}`}>{brand}</span>)}
        </motion.div>
      </div>
    </section>
  )
}
