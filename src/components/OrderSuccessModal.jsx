import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function OrderSuccessModal({ orderNumber }) {
  if (!orderNumber) return null
  return (
    <div className="modal-backdrop">
      <motion.div className="success-modal" initial={{ scale: 0.86, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <div className="success-mark">✓</div>
        <h2>Order placed successfully</h2>
        <p>Your ShoeVerse order <strong>#{orderNumber}</strong> is confirmed.</p>
        <Link className="btn primary" to="/products">Continue Shopping</Link>
      </motion.div>
    </div>
  )
}
