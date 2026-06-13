export const formatPrice = (value) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)

export const getCartTotals = (cart) => {
  const subtotal = cart.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const shipping = subtotal > 4999 || subtotal === 0 ? 0 : 299
  const tax = Math.round(subtotal * 0.05)
  const grandTotal = subtotal + shipping + tax
  return { subtotal, totalItems, shipping, tax, grandTotal }
}
