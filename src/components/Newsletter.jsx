import { useState } from 'react'
import toast from 'react-hot-toast'
import { FiSend } from 'react-icons/fi'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const subscribe = (event) => {
    event.preventDefault()
    if (!email.includes('@')) return toast.error('Enter a valid email')
    setEmail('')
    toast.success('Subscribed to ShoeVerse updates')
  }
  return (
    <section className="newsletter section">
      <div>
        <span>Members First</span>
        <h2>Early access to drops, deals, and restocks.</h2>
      </div>
      <form onSubmit={subscribe}>
        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email address" aria-label="Email address" />
        <button className="btn primary" type="submit"><FiSend /> Subscribe</button>
      </form>
    </section>
  )
}
