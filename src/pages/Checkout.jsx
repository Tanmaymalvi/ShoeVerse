import { useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import OrderSuccessModal from '../components/OrderSuccessModal'
import { useAuth } from '../hooks/useAuth'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../utils/calculations'

export default function Checkout() {
  const { user, addOrder } = useAuth()
  const { cart, shipping, tax, grandTotal, clearCart } = useCart()
  const [orderNumber, setOrderNumber] = useState('')
  const [form, setForm] = useState({ fullName: user?.fullName || '', phone: '', address: '', city: '', state: '', pincode: '', payment: 'UPI' })
  if (!user) return <Navigate to="/login" replace />
  if (!cart.length && !orderNumber) return <Navigate to="/cart" replace />

  const update = (key, value) => setForm((state) => ({ ...state, [key]: value }))
  const placeOrder = (event) => {
    event.preventDefault()
    if (Object.values(form).some((value) => !value)) return toast.error('Please complete shipping details')
    const number = Math.floor(100000 + Math.random() * 900000).toString()
    addOrder({ orderNumber: number, items: cart, total: grandTotal, shipping: form })
    clearCart()
    setOrderNumber(number)
  }

  return (
    <main className="page checkout">
      <div className="page-head"><span>Checkout</span><h1>Complete your order</h1></div>
      <form className="checkout-layout" onSubmit={placeOrder}>
        <section className="form-panel"><h2>Shipping Information</h2>{['fullName', 'phone', 'address', 'city', 'state', 'pincode'].map((field) => <label key={field}>{field.replace(/([A-Z])/g, ' $1')}<input value={form[field]} onChange={(event) => update(field, event.target.value)} /></label>)}<h2>Payment Method</h2><div className="payment-options">{['Credit Card', 'Debit Card', 'UPI', 'Cash On Delivery'].map((item) => <label key={item}><input type="radio" name="payment" checked={form.payment === item} onChange={() => update('payment', item)} />{item}</label>)}</div></section>
        <aside className="summary"><h2>Order Summary</h2>{cart.map((item) => <p key={item.id}><span>{item.name} x {item.quantity}</span><strong>{formatPrice(item.discountPrice * item.quantity)}</strong></p>)}<p><span>Shipping</span><strong>{shipping ? formatPrice(shipping) : 'Free'}</strong></p><p><span>Tax</span><strong>{formatPrice(tax)}</strong></p><p className="total"><span>Total</span><strong>{formatPrice(grandTotal)}</strong></p><button className="btn primary" type="submit">Place Order</button></aside>
      </form>
      <OrderSuccessModal orderNumber={orderNumber} />
    </main>
  )
}
