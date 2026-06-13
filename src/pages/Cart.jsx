import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../utils/calculations'

export default function Cart() {
  const { cart, subtotal, shipping, tax, grandTotal, totalItems } = useCart()
  if (!cart.length) {
    return <main className="page empty"><div className="empty-illustration">SV</div><h1>Your cart is waiting for a great pair.</h1><p>Explore trending sneakers, runners, and everyday essentials.</p><Link className="btn primary" to="/products">Go To Products</Link></main>
  }
  return (
    <main className="page cart-page">
      <div className="page-head"><span>Shopping Cart</span><h1>{totalItems} items in your bag</h1></div>
      <div className="cart-layout">
        <section className="cart-list">{cart.map((item) => <CartItem key={item.id} item={item} />)}</section>
        <aside className="summary"><h2>Cart Summary</h2><p><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></p><p><span>Shipping</span><strong>{shipping ? formatPrice(shipping) : 'Free'}</strong></p><p><span>Tax</span><strong>{formatPrice(tax)}</strong></p><p className="total"><span>Grand Total</span><strong>{formatPrice(grandTotal)}</strong></p><Link className="btn primary" to="/checkout">Proceed To Checkout</Link><Link className="btn ghost" to="/products">Continue Shopping</Link></aside>
      </div>
    </main>
  )
}
