import { FiStar } from 'react-icons/fi'

export default function ReviewCard({ name, review, image, rating = 5 }) {
  return (
    <article className="review-card">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <div className="stars">{Array.from({ length: rating }, (_, index) => <FiStar key={index} />)}</div>
      </div>
      <p>{review}</p>
    </article>
  )
}
