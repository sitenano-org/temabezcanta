'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>Hizmetlerimiz</h1>
          <p className="page-subtitle">İhtiyaçlarınız için kapsamlı çözümler</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-list">
            <div className="service-detail">
              <h2>Hizmet 1</h2>
              <p>Hizmet 1'in detaylı açıklaması. Bu hizmet, işletmenizin ihtiyaçları için kapsamlı çözümler sunar.</p>
              <ul>
                <li>Özellik 1</li>
                <li>Özellik 2</li>
                <li>Özellik 3</li>
              </ul>
            </div>

            <div className="service-detail">
              <h2>Hizmet 2</h2>
              <p>Hizmet 2'nin detaylı açıklaması. Bu hizmet, gereksinimlerinize özel olarak hazırlanmış uzman çözümler sunar.</p>
              <ul>
                <li>Özellik 1</li>
                <li>Özellik 2</li>
                <li>Özellik 3</li>
              </ul>
            </div>

            <div className="service-detail">
              <h2>Hizmet 3</h2>
              <p>Hizmet 3'ün detaylı açıklaması. Bu hizmet, olağanüstü değer ve sonuçlar sunar.</p>
              <ul>
                <li>Özellik 1</li>
                <li>Özellik 2</li>
                <li>Özellik 3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

