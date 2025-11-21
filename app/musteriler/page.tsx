'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ClientsPage() {
  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>Müşterilerimiz</h1>
          <p className="page-subtitle">Önde gelen şirketler tarafından güvenilen</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="clients-grid">
            <div className="client-card">
              <h3>Müşteri Şirketi 1</h3>
              <p>Sektör: Teknoloji</p>
              <p>Bu müşteri ile 5 yıldan fazla süredir çalışıyoruz, olağanüstü sonuçlar sunuyoruz.</p>
            </div>

            <div className="client-card">
              <h3>Müşteri Şirketi 2</h3>
              <p>Sektör: Üretim</p>
              <p>Kalite ve yeniliğe odaklanan uzun vadeli ortaklık.</p>
            </div>

            <div className="client-card">
              <h3>Müşteri Şirketi 3</h3>
              <p>Sektör: Perakende</p>
              <p>Kapsamlı çözümlerimizle işletmelerinin büyümesine yardımcı oluyoruz.</p>
            </div>

            <div className="client-card">
              <h3>Müşteri Şirketi 4</h3>
              <p>Sektör: Sağlık</p>
              <p>Güvenilir ve verimli hizmetlerle misyonlarını destekliyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

