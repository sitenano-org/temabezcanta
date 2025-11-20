'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '../contexts/TranslationContext'
import { useLocalizedRoutes } from '../hooks/useLocalizedRoutes'

export default function Footer() {
  const { t, language, setLanguage, locale } = useTranslation()
  const routes = useLocalizedRoutes()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'de', label: 'Deutsch' },
  ]

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  return (
    <footer className="footer container" id="contact">
      <div className="footer-cta">
        <h2>{t.footer.cta.title}</h2>
        <p>{t.footer.cta.description}</p>
        <Link href={routes.contact} className="btn btn-secondary">{t.footer.cta.button}</Link>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">{t.navbar.logo}</div>
        <nav className="footer-nav">
          <Link href={routes.home}>{t.footer.links.home}</Link>
          <Link href={routes.ourStory}>{t.footer.links.ourStory}</Link>
          <Link href={routes.press}>{t.footer.links.press}</Link>
          <Link href={routes.contact}>{t.footer.links.contact}</Link>
          <Link href={routes.training}>{t.footer.links.training}</Link>
          <Link href={routes.consulting}>{t.footer.links.consulting}</Link>
          <Link href={routes.automation}>{t.footer.links.automation}</Link>
          <Link href={routes.blog}>{t.footer.links.blog}</Link>
          <Link href={routes.aiGuides}>{t.footer.links.aiGuides}</Link>
          <Link href={routes.aiTools}>{t.footer.links.aiTools}</Link>
          <Link href={routes.liveSessions}>{t.footer.links.liveSessions}</Link>
          <Link href={routes.caseStudies}>{t.footer.links.caseStudies}</Link>
          <Link href={routes.ourClients}>{t.footer.links.ourClients}</Link>
          <Link href={routes.newsletter}>{t.footer.links.subscribe}</Link>
        </nav>
        <div className="footer-actions">
          <div className="footer-language-dropdown" ref={dropdownRef}>
            <button
              className="footer-lang-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Select language"
            >
              <span>{currentLanguage.label}</span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={isDropdownOpen ? 'open' : ''}
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="footer-lang-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`footer-lang-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => {
                      setLanguage(lang.code as 'en' | 'tr' | 'de')
                      setIsDropdownOpen(false)
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="copyright">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}

