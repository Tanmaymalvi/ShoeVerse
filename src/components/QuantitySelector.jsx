export default function QuantitySelector({ value, onIncrease, onDecrease }) {
  return (
    <div className="quantity" aria-label="Quantity selector">
      <button type="button" onClick={onDecrease} aria-label="Decrease quantity">-</button>
      <span>{value}</span>
      <button type="button" onClick={onIncrease} aria-label="Increase quantity">+</button>
    </div>
  )
}
