'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HowWeWorkPage() {
  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>Nasıl Çalışıyoruz</h1>
          <p className="page-subtitle">Sürecimiz ve metodolojimiz</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h2>Danışmanlık</h2>
              <p>Detaylı bir danışmanlık ile ihtiyaçlarınızı ve gereksinimlerinizi anlayarak başlıyoruz.</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h2>Planlama</h2>
              <p>Belirli hedeflerinize ve amaçlarınıza uygun kapsamlı bir plan oluşturuyoruz.</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h2>Uygulama</h2>
              <p>Ekibimiz planı hassasiyet ve detaylara dikkat ederek uygular.</p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h2>Destek</h2>
              <p>Devam eden başarınızı sağlamak için sürekli destek sağlıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

