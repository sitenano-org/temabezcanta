'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../contexts/CartContext'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    country: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer: formData,
          items: items,
          total: totalPrice
        }),
      })

      if (response.ok) {
        clearCart()
        router.push('/?order=success')
      } else {
        alert('Siparişiniz işlenirken bir hata oluştu. Lütfen tekrar deneyin.')
      }
    } catch (error) {
      console.error('Error submitting order:', error)
      alert('Siparişiniz işlenirken bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <main>
        <Navbar />
        <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
          <h1>Sepetiniz boş</h1>
          <p>Ödeme yapmadan önce sepete bazı ürünler ekleyin.</p>
          <a href="/urunler" className="btn btn-primary">Ürünleri Görüntüle</a>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>Ödeme</h1>
          <p className="page-subtitle">Siparişinizi tamamlayın</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="checkout-layout">
            <div className="checkout-form-wrapper">
              <h2>Müşteri Bilgileri</h2>
              <form className="checkout-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Ad Soyad *</label>
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
                    <label htmlFor="email">E-posta Adresi *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Telefon Numarası *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Şirket Adı</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Adres *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">Şehir *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Ülke *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Sipariş Notları</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-large" disabled={isSubmitting}>
                  {isSubmitting ? 'İşleniyor...' : 'Sipariş Ver'}
                </button>
              </form>
            </div>

            <div className="order-summary">
              <h2>Sipariş Özeti</h2>
              <div className="summary-items">
                {items.map(item => (
                  <div key={item.id} className="summary-item">
                    <div className="summary-item-info">
                      <h4>{item.name}</h4>
                      <p>₺{item.price.toFixed(2)} × {item.quantity}</p>
                    </div>
                    <div className="summary-item-total">
                      ₺{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="summary-total">
                <div className="summary-row">
                  <span>Ara Toplam:</span>
                  <span>₺{totalPrice.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Toplam:</span>
                  <strong>₺{totalPrice.toFixed(2)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

