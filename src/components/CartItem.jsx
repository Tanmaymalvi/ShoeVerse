import { FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../utils/calculations'
import QuantitySelector from './QuantitySelector'

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart()
  return (
    <article className="cart-item">
      <img src={item.images?.[0] || item.image} alt={item.name} />
      <div>
        <Link to={`/product/${item.id}`}><h3>{item.name}</h3></Link>
        <p>{item.brand}</p>
        <strong>{formatPrice(item.discountPrice)}</strong>
      </div>
      <QuantitySelector value={item.quantity} onIncrease={() => increaseQuantity(item.id)} onDecrease={() => decreaseQuantity(item.id)} />
      <strong>{formatPrice(item.discountPrice * item.quantity)}</strong>
      <button className="icon-btn danger" type="button" onClick={() => removeFromCart(item.id)} aria-label="Remove item"><FiTrash2 /></button>
    </article>
  )
}
