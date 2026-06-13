import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Newsletter from './Newsletter'

export default function Footer() {
  return (
    <footer className="footer">
      <Newsletter />
      <div className="footer-grid">
        <div>
          <Link to="/" className="logo"><span>SV</span>ShoeVerse</Link>
          <p>Premium footwear commerce built around comfort, style, and trustworthy shopping.</p>
          <div className="socials"><FiInstagram /><FiTwitter /><FiFacebook /><FiLinkedin /></div>
        </div>
        <div><h3>Quick Links</h3><Link to="/products">Products</Link><Link to="/wishlist">Wishlist</Link><Link to="/cart">Cart</Link><Link to="/profile">Profile</Link></div>
        <div><h3>Categories</h3><Link to="/products">Running</Link><Link to="/products">Sneakers</Link><Link to="/products">Sports</Link><Link to="/products">Formal</Link></div>
        <div><h3>Support</h3><Link to="/contact">Contact</Link><a href="mailto:support@shoeverse.store">support@shoeverse.store</a><span>Easy returns</span><span>Secure payments</span></div>
      </div>
      <p className="copyright">© 2026 ShoeVerse. All rights reserved.</p>
    </footer>
  )
}
