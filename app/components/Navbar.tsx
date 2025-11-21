'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '../contexts/CartContext'

export default function Navbar() {
  const { items, totalItems, removeItem, updateQuantity, totalPrice } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link href="/" className="logo">BRAND</Link>
        <ul className="nav-links">
          <li><Link href="/hizmetler">Hizmetler</Link></li>
          <li><Link href="/nasil-calisiyoruz">Nasıl Çalışıyoruz</Link></li>
          <li><Link href="/musteriler">Müşteriler</Link></li>
          <li><Link href="/iletisim">İletişim</Link></li>
          <li><Link href="/urunler">Ürünler</Link></li>
        </ul>
        <div className="navbar-actions">
          <div className="cart-wrapper">
            <button 
              className="cart-button"
              onClick={() => setIsCartOpen(!isCartOpen)}
              aria-label="Alışveriş sepeti"
            >
              Sepet ({totalItems})
            </button>
            {isCartOpen && (
              <div className="cart-dropdown">
                {items.length === 0 ? (
                  <p className="cart-empty">Sepetiniz boş</p>
                ) : (
                  <>
                    <div className="cart-items">
                      {items.map(item => (
                        <div key={item.id} className="cart-item">
                          <div className="cart-item-info">
                            <h4>{item.name}</h4>
                            <p>₺{item.price.toFixed(2)} × {item.quantity}</p>
                          </div>
                          <div className="cart-item-actions">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="cart-quantity-btn"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="cart-quantity-btn"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="cart-remove-btn"
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="cart-footer">
                      <div className="cart-total">
                        <strong>Toplam: ₺{totalPrice.toFixed(2)}</strong>
                      </div>
                      <Link href="/odeme" className="btn btn-primary" onClick={() => setIsCartOpen(false)}>
                        Ödeme
                      </Link>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

