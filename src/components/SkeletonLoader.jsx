export default function SkeletonLoader({ count = 4 }) {
  return <div className="product-grid">{Array.from({ length: count }, (_, index) => <div className="skeleton" key={index} />)}</div>
}
