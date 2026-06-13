import { Link } from 'react-router-dom'
import BrandSlider from '../components/BrandSlider'

export default function About() {
  return (
    <main className="page about">
      <section className="story about-hero">
        <div>
          <span>About ShoeVerse</span>
          <h1>Built for people who take every step seriously.</h1>
          <p>ShoeVerse brings performance footwear, lifestyle sneakers, and trusted shopping tools into one polished commerce experience. Our mission is to make premium footwear discovery faster, clearer, and more enjoyable.</p>
          <Link className="btn primary" to="/products">Shop Now</Link>
        </div>
        <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80" alt="Premium sneaker display" />
      </section>

      <div className="stats">
        <div><strong>25+</strong><span>Curated products</span></div>
        <div><strong>12</strong><span>Partner brands</span></div>
        <div><strong>24h</strong><span>Fast dispatch</span></div>
        <div><strong>100%</strong><span>Secure checkout</span></div>
      </div>

      <section className="section compact">
        <div className="section-title"><span>Mission & Vision</span><h2>Premium service without the noise</h2></div>
        <p>We combine thoughtful product data, persistent customer state, and clear responsive design so shoppers can compare, save, and order confidently on any device.</p>
      </section>

      <section className="values-grid">
        <article><span>01</span><h3>Curated, not crowded</h3><p>Every product is presented with the details shoppers need to compare quickly.</p></article>
        <article><span>02</span><h3>Designed for trust</h3><p>Cart, wishlist, account, and checkout flows persist locally for a dependable demo.</p></article>
        <article><span>03</span><h3>Commercial polish</h3><p>The interface is responsive, brand-forward, and built for portfolio presentation.</p></article>
      </section>

      <section className="about-banner">
        <div><span>Our Promise</span><h2>Premium footwear discovery that feels fast, clear, and confident.</h2></div>
      </section>

      <BrandSlider />
    </main>
  )
}
