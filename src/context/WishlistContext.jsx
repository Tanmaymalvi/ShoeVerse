import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { WishlistContext } from './WishlistContextValue'
import { readStorage, writeStorage } from '../utils/storage'

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => readStorage('shoeverse_wishlist', []))
  useEffect(() => writeStorage('shoeverse_wishlist', wishlist), [wishlist])

  const isWishlisted = (id) => wishlist.some((item) => item.id === id)
  const toggleWishlist = (product) => {
    setWishlist((items) => {
      if (items.some((item) => item.id === product.id)) {
        toast.success('Removed from wishlist')
        return items.filter((item) => item.id !== product.id)
      }
      toast.success('Added to wishlist')
      return [...items, product]
    })
  }
  const removeWishlist = (id) => setWishlist((items) => items.filter((item) => item.id !== id))

  const value = { wishlist, isWishlisted, toggleWishlist, removeWishlist }
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}
