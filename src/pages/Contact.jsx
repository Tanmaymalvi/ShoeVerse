import { useState } from 'react'
import toast from 'react-hot-toast'
import { FiClock, FiFacebook, FiHeadphones, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiShield } from 'react-icons/fi'
import { phone, supportEmail } from '../utils/constants'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const submit = (event) => {
    event.preventDefault()
    setForm({ name: '', email: '', message: '' })
    toast.success('Message sent')
  }

  return (
    <main className="page contact">
      <div className="page-head contact-head">
        <span>Contact</span>
        <h1>We are here to help</h1>
        <p>Questions about sizing, delivery, returns, or orders? Send a message and the ShoeVerse support desk will guide you.</p>
      </div>

      <div className="support-cards">
        <article><FiHeadphones /><strong>Priority Support</strong><span>Fast help for account and order questions.</span></article>
        <article><FiShield /><strong>Secure Shopping</strong><span>Checkout and profile data stay local in this demo.</span></article>
        <article><FiClock /><strong>Business Hours</strong><span>Mon-Sat, 9:00 AM to 7:00 PM.</span></article>
      </div>

      <div className="contact-grid">
        <section className="contact-panel">
          <h2>Customer Support</h2>
          <p><FiMail /> {supportEmail}</p>
          <p><FiPhone /> {phone}</p>
          <p><FiMapPin /> ShoeVerse Studio, Bengaluru, India</p>
          <p><FiClock /> Mon-Sat, 9:00 AM to 7:00 PM</p>
          <div className="socials"><FiInstagram /><FiFacebook /><FiLinkedin /></div>
        </section>
        <form className="contact-panel" onSubmit={submit}>
          <h2>Send a Message</h2>
          <label>Name<input value={form.name} onChange={(event) => setForm((state) => ({ ...state, name: event.target.value }))} required /></label>
          <label>Email<input type="email" value={form.email} onChange={(event) => setForm((state) => ({ ...state, email: event.target.value }))} required /></label>
          <label>Message<textarea value={form.message} onChange={(event) => setForm((state) => ({ ...state, message: event.target.value }))} required /></label>
          <button className="btn primary" type="submit">Submit</button>
        </form>
      </div>
      <iframe className="map" title="ShoeVerse map" src="https://www.google.com/maps?q=Bengaluru%20India&output=embed" loading="lazy" />
      <section className="section compact">
        <div className="section-title"><span>FAQ</span><h2>Common questions</h2></div>
        <div className="faq">
          <details><summary>How fast is delivery?</summary><p>Most metro orders dispatch within 24 hours.</p></details>
          <details><summary>Can I return shoes?</summary><p>Yes, eligible products include simple return support.</p></details>
          <details><summary>Are payments secure?</summary><p>The checkout UI supports secure method selection and order persistence.</p></details>
        </div>
      </section>
    </main>
  )
}
