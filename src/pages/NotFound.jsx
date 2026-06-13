import { Link } from 'react-router-dom'

export default function NotFound() {
  return <main className="page empty"><div className="empty-illustration">404</div><h1>This page stepped out.</h1><p>The route you opened does not exist in ShoeVerse.</p><Link className="btn primary" to="/">Return Home</Link></main>
}
