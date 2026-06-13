import { useEffect, useState } from 'react'
import { FiHeart, FiMenu, FiMoon, FiSearch, FiShoppingBag, FiSun, FiUser, FiX } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useCart } from '../hooks/useCart'
import { useWishlist } from '../hooks/useWishlist'

const navItems = [
  ['/', 'Home'],
  ['/products', 'Products'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('shoeverse_theme') || 'light')
  const { user, logout } = useAuth()
  const { totalItems } = useCart()
  const { wishlist } = useWishlist()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('shoeverse_theme', theme)
  }, [theme])

  const links = (
    <>
      {navItems.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
    </>
  )

  return (
    <header className="navbar">
      <Link to="/" className="logo"><span>SV</span>ShoeVerse</Link>
      <nav className="desktop-nav">{links}</nav>
      <div className="nav-actions">
        <button
          className="icon-btn theme-toggle"
          type="button"
          onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
        <Link to="/products" className="icon-btn" aria-label="Search products"><FiSearch /></Link>
        <Link to="/wishlist" className="icon-btn badge" aria-label="Wishlist"><FiHeart /><small>{wishlist.length}</small></Link>
        <Link to="/cart" className="icon-btn badge" aria-label="Cart"><FiShoppingBag /><small>{totalItems}</small></Link>
        {user ? (
          <div className="profile-menu">
            <Link className="icon-btn" to="/profile" aria-label="Profile"><FiUser /></Link>
            <button type="button" onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login">Login</Link>
            <Link className="btn small primary" to="/register">Register</Link>
          </div>
        )}
        <button className="menu-btn" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div className={`mobile-drawer ${open ? 'show' : ''}`}>{links}</div>
    </header>
  )
}
