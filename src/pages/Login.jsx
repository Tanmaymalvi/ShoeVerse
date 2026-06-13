import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ email: '', password: '' })
  if (user) return <Navigate to="/profile" replace />
  const submit = (event) => {
    event.preventDefault()
    if (login(form)) navigate(location.state?.from || '/profile')
  }
  return <AuthShell title="Welcome back" subtitle="Login to manage orders, wishlist, and checkout faster." submit={submit} form={form} setForm={setForm} action="Login" alt={<p>New here? <Link to="/register">Create account</Link></p>} />
}

function AuthShell({ title, subtitle, submit, form, setForm, action, alt }) {
  return (
    <main className="auth-page"><form className="auth-card" onSubmit={submit}><span>ShoeVerse Account</span><h1>{title}</h1><p>{subtitle}</p><label>Email<input type="email" value={form.email} onChange={(event) => setForm((state) => ({ ...state, email: event.target.value }))} required /></label><label>Password<input type="password" value={form.password} onChange={(event) => setForm((state) => ({ ...state, password: event.target.value }))} required /></label><button className="btn primary" type="submit">{action}</button>{alt}</form></main>
  )
}
