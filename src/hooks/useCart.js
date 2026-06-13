import { useContext } from 'react'
import { CartContext } from '../context/CartContextValue'

export const useCart = () => useContext(CartContext)
