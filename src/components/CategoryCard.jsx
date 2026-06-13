import { Link } from 'react-router-dom'

export default function CategoryCard({ category, image }) {
  return (
    <Link className="category-card" to={`/products?category=${encodeURIComponent(category)}`}>
      <img src={image} alt={category} />
      <span>{category}</span>
    </Link>
  )
}
