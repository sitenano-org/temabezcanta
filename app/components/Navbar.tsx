'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useTranslation } from '../contexts/TranslationContext'
import { useCart } from '../contexts/CartContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const cartRef = useRef<HTMLDivElement>(null)
  const { t, language, setLanguage, locale } = useTranslation()
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false)
      }
    }

    if (isDropdownOpen || isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen, isCartOpen])

  const languageNames: Record<string, string> = {
    en: 'EN',
    tr: 'TR',
    de: 'DE'
  }

  const handleLanguageSelect = (lang: 'en' | 'tr' | 'de') => {
    setLanguage(lang)
    setIsDropdownOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link href={`/${locale}`} className="logo">{t.navbar.logo}</Link>
        <ul className="nav-links">
          <li><Link href={`/${locale}/services`}>{t.navbar.services}</Link></li>
          <li><Link href={`/${locale}/products`}>{t.navbar.products}</Link></li>
          <li><Link href={`/${locale}/how-we-work`}>{t.navbar.howWeWork}</Link></li>
          <li><Link href={`/${locale}/clients`}>{t.navbar.clients}</Link></li>
          <li><Link href={`/${locale}/contact`}>{t.navbar.contact}</Link></li>
        </ul>
        <div className="navbar-actions">
          <div className="language-switcher" ref={dropdownRef}>
            <button
              className="lang-dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Select language"
              aria-expanded={isDropdownOpen}
            >
              <span>{languageNames[language]}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={isDropdownOpen ? 'open' : ''}
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="lang-dropdown-menu">
                <button
                  className={`lang-dropdown-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => handleLanguageSelect('en')}
                  aria-label="English"
                >
                  EN
                </button>
                <button
                  className={`lang-dropdown-option ${language === 'tr' ? 'active' : ''}`}
                  onClick={() => handleLanguageSelect('tr')}
                  aria-label="Türkçe"
                >
                  TR
                </button>
                <button
                  className={`lang-dropdown-option ${language === 'de' ? 'active' : ''}`}
                  onClick={() => handleLanguageSelect('de')}
                  aria-label="Deutsch"
                >
                  DE
                </button>
              </div>
            )}
          </div>
          
          {/* Cart Icon */}
          <div className="cart-container" ref={cartRef}>
            <button
              className="cart-icon-btn"
              onClick={() => setIsCartOpen(!isCartOpen)}
              aria-label="Shopping cart"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 17.9 19 19 19C20.1 19 21 18.1 21 17V13M9 19.5C9.8 19.5 10.5 20.2 10.5 21C10.5 21.8 9.8 22.5 9 22.5C8.2 22.5 7.5 21.8 7.5 21C7.5 20.2 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21C21.5 21.8 20.8 22.5 20 22.5C19.2 22.5 18.5 21.8 18.5 21C18.5 20.2 19.2 19.5 20 19.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>
            
            {/* Cart Dropdown */}
            {isCartOpen && (
              <div className="cart-dropdown">
                <div className="cart-header">
                  <h3>{t.navbar.cart} ({totalItems})</h3>
                </div>
                <div className="cart-items">
                  {items.length === 0 ? (
                    <div className="cart-empty">
                      <p>{t.navbar.cartEmpty}</p>
                    </div>
                  ) : (
                    <>
                      {items.map((item) => (
                        <div key={item.id} className="cart-item">
                          <div className="cart-item-image">
                            <div className="cart-image-placeholder">
                              {item.image || 'IMG'}
                            </div>
                          </div>
                          <div className="cart-item-details">
                            <h4>{item.title}</h4>
                            <div className="cart-item-price">{item.price}</div>
                            <div className="cart-item-controls">
                              <button
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="quantity">{item.quantity}</span>
                              <button
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                              <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                              >
                                {t.navbar.remove}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="cart-footer">
                        <div className="cart-total">
                          <strong>Total: ${totalPrice.toFixed(2)}</strong>
                        </div>
                        <Link href={`/${locale}/checkout`} className="btn btn-primary cart-checkout">
                          {t.navbar.checkout}
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <a href="#request-call" className="btn btn-primary">{t.navbar.requestCall}</a>
        </div>
      </div>
    </nav>
  )
}

