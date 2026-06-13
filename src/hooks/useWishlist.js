import { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContextValue'

export const useWishlist = () => useContext(WishlistContext)
