'use client'

import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">TEMA BEZ ÇANTA'ya Hoş Geldiniz</h1>
          <p className="hero-subtitle">Kaliteli ürünler ve hizmetler için güvenilir ortağınız</p>
          <div className="hero-actions">
            <Link href="/urunler" className="btn btn-primary">Ürünleri Görüntüle</Link>
            <Link href="/hizmetler" className="btn btn-secondary">Hizmetlerimiz</Link>
          </div>
        </div>
      </section>

      <section className="services-preview section">
        <div className="container">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Hizmet 1</h3>
              <p>Hizmet 1'in açıklaması ve sunduklarımız.</p>
            </div>
            <div className="service-card">
              <h3>Hizmet 2</h3>
              <p>Hizmet 2'nin açıklaması ve sunduklarımız.</p>
            </div>
            <div className="service-card">
              <h3>Hizmet 3</h3>
              <p>Hizmet 3'ün açıklaması ve sunduklarımız.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="value-props section">
        <div className="container">
          <h2 className="section-title">Neden Bizi Seçmelisiniz</h2>
          <div className="props-grid">
            <div className="prop-item">
              <h3>Kalite</h3>
              <p>Yalnızca en yüksek kalitede ürünler ve hizmetler sunuyoruz.</p>
            </div>
            <div className="prop-item">
              <h3>Güvenilirlik</h3>
              <p>Her zaman tutarlı ve güvenilir hizmet için bize güvenebilirsiniz.</p>
            </div>
            <div className="prop-item">
              <h3>Destek</h3>
              <p>Ekibimiz yolunuzun her adımında size destek olmak için burada.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title">Müşterilerimiz Ne Diyor</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Mükemmel hizmet ve kaliteli ürünler. Kesinlikle tavsiye ederim!"</p>
              <cite>— Müşteri Adı</cite>
            </div>
            <div className="testimonial-card">
              <p>"Profesyonel ekip ve harika müşteri desteği."</p>
              <cite>— Müşteri Adı</cite>
            </div>
            <div className="testimonial-card">
              <p>"Birlikte çalıştığımız en iyi ortak. Olağanüstü sonuçlar!"</p>
              <cite>— Müşteri Adı</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="container">
          <h2 className="section-title">Sıkça Sorulan Sorular</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Soru 1?</h3>
              <p>Yararlı bilgilerle soru 1'in cevabı.</p>
            </div>
            <div className="faq-item">
              <h3>Soru 2?</h3>
              <p>Yararlı bilgilerle soru 2'nin cevabı.</p>
            </div>
            <div className="faq-item">
              <h3>Soru 3?</h3>
              <p>Yararlı bilgilerle soru 3'ün cevabı.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

