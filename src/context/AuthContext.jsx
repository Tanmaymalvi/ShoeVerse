import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from './AuthContextValue'
import { readStorage, writeStorage } from '../utils/storage'

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => readStorage('shoeverse_users', []))
  const [user, setUser] = useState(() => readStorage('shoeverse_session', null))
  const [orders, setOrders] = useState(() => readStorage('shoeverse_orders', []))

  useEffect(() => writeStorage('shoeverse_users', users), [users])
  useEffect(() => writeStorage('shoeverse_session', user), [user])
  useEffect(() => writeStorage('shoeverse_orders', orders), [orders])

  const register = ({ fullName, email, password }) => {
    if (users.some((item) => item.email.toLowerCase() === email.toLowerCase())) {
      toast.error('Email already registered')
      return false
    }
    const nextUser = { id: crypto.randomUUID(), fullName, email, password, avatar: fullName.slice(0, 1).toUpperCase() }
    setUsers((items) => [...items, nextUser])
    setUser(nextUser)
    toast.success('Account created')
    return true
  }

  const login = ({ email, password }) => {
    const found = users.find((item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password)
    if (!found) {
      toast.error('Invalid email or password')
      return false
    }
    setUser(found)
    toast.success('Welcome back')
    return true
  }

  const logout = () => {
    setUser(null)
    toast.success('Logged out')
  }

  const addOrder = (order) => setOrders((items) => [{ ...order, userEmail: user?.email, createdAt: new Date().toISOString() }, ...items])
  const userOrders = orders.filter((order) => order.userEmail === user?.email)

  const value = { user, users, orders: userOrders, register, login, logout, addOrder }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
