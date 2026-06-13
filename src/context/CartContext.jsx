import { useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { CartContext } from './CartContextValue'
import { getCartTotals } from '../utils/calculations'
import { readStorage, writeStorage } from '../utils/storage'

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => readStorage('shoeverse_cart', []))

  useEffect(() => writeStorage('shoeverse_cart', cart), [cart])

  const addToCart = (product, quantity = 1) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id)
      if (existing) {
        return items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
      }
      return [...items, { ...product, quantity }]
    })
    toast.success('Added to cart')
  }

  const removeFromCart = (id) => {
    setCart((items) => items.filter((item) => item.id !== id))
    toast.success('Removed from cart')
  }

  const increaseQuantity = (id) => setCart((items) => items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  const decreaseQuantity = (id) =>
    setCart((items) => items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item)))
  const clearCart = () => setCart([])

  const value = useMemo(
    () => ({ cart, ...getCartTotals(cart), addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }),
    [cart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
