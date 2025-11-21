'use client'

import { useState, FormEvent } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>İletişim</h1>
          <p className="page-subtitle">Ekibimizle iletişime geçin</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>İletişime Geçin</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <h3>E-posta</h3>
                  <p>info@example.com</p>
                </div>
                <div className="contact-item">
                  <h3>Telefon</h3>
                  <p>+90 (555) 123-4567</p>
                </div>
                <div className="contact-item">
                  <h3>Adres</h3>
                  <p>123 İş Caddesi<br />Şehir, İl 12345</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="form-success">
                  Teşekkür ederiz! Mesajınız gönderildi.
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

