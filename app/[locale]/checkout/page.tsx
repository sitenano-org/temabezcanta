'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from '../../contexts/TranslationContext'
import { useCart } from '../../contexts/CartContext'

export default function CheckoutPage() {
  const router = useRouter()
  const { t, locale } = useTranslation()
  const { items, totalPrice, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    country: '',
    notes: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          totalPrice,
          customerInfo: formData,
        }),
      })

      if (response.ok) {
        setOrderPlaced(true)
        clearCart()
        // Redirect to home after 3 seconds
        setTimeout(() => {
          router.push(`/${locale}`)
        }, 3000)
      } else {
        alert('Order submission failed. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting order:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <main>
        <Navbar />
        <div className="checkout-empty container">
          <h1>{t.pages.checkout.title}</h1>
          <p>{t.pages.checkout.emptyCart}</p>
          <Link href={`/${locale}/products`} className="btn btn-primary">
            {t.pages.checkout.backToCart}
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  if (orderPlaced) {
    return (
      <main>
        <Navbar />
        <div className="checkout-success container">
          <div className="success-content">
            <h1>{t.pages.checkout.orderPlaced}</h1>
            <p>{t.pages.checkout.orderConfirmation}</p>
            <Link href={`/${locale}`} className="btn btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      <div className="checkout-page container">
        <h1>{t.pages.checkout.title}</h1>
        
        <div className="checkout-grid">
          {/* Order Summary */}
          <div className="checkout-summary">
            <h2>{t.pages.checkout.orderSummary}</h2>
            <div className="order-items">
              {items.map((item) => (
                <div key={item.id} className="order-item">
                  <div className="order-item-image">
                    <div className="order-image-placeholder">
                      {item.image || 'IMG'}
                    </div>
                  </div>
                  <div className="order-item-details">
                    <h3>{item.title}</h3>
                    <div className="order-item-meta">
                      <span className="order-item-price">{item.price}</span>
                      <span className="order-item-quantity">x {item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-totals">
              <div className="total-row">
                <span>{t.pages.checkout.subtotal}</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="total-row final">
                <span>{t.pages.checkout.total}</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Customer Information Form */}
          <div className="checkout-form-container">
            <h2>{t.pages.checkout.customerInfo}</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    {t.pages.checkout.name} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    {t.pages.checkout.email} <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    {t.pages.checkout.phone} <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">{t.pages.checkout.company}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">
                  {t.pages.checkout.address} <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">
                    {t.pages.checkout.city} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">
                    {t.pages.checkout.country} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">{t.pages.checkout.notes}</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : t.pages.checkout.placeOrder}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

