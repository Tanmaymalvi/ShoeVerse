import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Register() {
  const { user, register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' })
  if (user) return <Navigate to="/profile" replace />
  const update = (key, value) => setForm((state) => ({ ...state, [key]: value }))
  const submit = (event) => {
    event.preventDefault()
    if (form.password.length < 6) return toast.error('Password must be at least 6 characters')
    if (form.password !== form.confirmPassword) return toast.error('Passwords do not match')
    if (register(form)) navigate('/profile')
  }
  return (
    <main className="auth-page"><form className="auth-card" onSubmit={submit}><span>ShoeVerse Account</span><h1>Create account</h1><p>Join for faster checkout and persistent wishlists.</p><label>Full Name<input value={form.fullName} onChange={(event) => update('fullName', event.target.value)} required /></label><label>Email<input type="email" value={form.email} onChange={(event) => update('email', event.target.value)} required /></label><label>Password<input type="password" value={form.password} onChange={(event) => update('password', event.target.value)} required /></label><label>Confirm Password<input type="password" value={form.confirmPassword} onChange={(event) => update('confirmPassword', event.target.value)} required /></label><button className="btn primary" type="submit">Register</button><p>Already registered? <Link to="/login">Login</Link></p></form></main>
  )
}
