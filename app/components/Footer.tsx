'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TEMA BEZ ÇANTA</h3>
            <p>Kaliteli ürünler ve hizmetler için güvenilir ortağınız.</p>
          </div>
          <div className="footer-section">
            <h4>Hızlı Bağlantılar</h4>
            <ul>
              <li><Link href="/hizmetler">Hizmetler</Link></li>
              <li><Link href="/nasil-calisiyoruz">Nasıl Çalışıyoruz</Link></li>
              <li><Link href="/musteriler">Müşteriler</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Ürünler</h4>
            <ul>
              <li><Link href="/urunler">Tüm Ürünler</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>İletişim</h4>
            <p>E-posta: info@example.com</p>
            <p>Telefon: +90 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TEMA BEZ ÇANTA. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

