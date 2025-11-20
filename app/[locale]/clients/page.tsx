'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from '../../contexts/TranslationContext'

export default function ClientsPage() {
  const { t } = useTranslation()

  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>{t.pages.clients.title}</h1>
          <p className="page-subtitle">{t.pages.clients.subtitle}</p>
          <p className="page-intro">{t.pages.clients.intro}</p>
        </div>
      </div>

      <section className="testimonials container">
        <div className="testimonials-grid">
          <div className="testimonial">
            <div className="testimonial-avatar">
              <div className="avatar-placeholder">AG</div>
            </div>
            <blockquote>&ldquo;{t.testimonials.testimonial1.quote}&rdquo;</blockquote>
            <cite>- {t.testimonials.testimonial1.author}</cite>
          </div>
          <div className="testimonial">
            <div className="testimonial-avatar">
              <div className="avatar-placeholder">NR</div>
            </div>
            <blockquote>&ldquo;{t.testimonials.testimonial2.quote}&rdquo;</blockquote>
            <cite>- {t.testimonials.testimonial2.author}</cite>
          </div>
          <div className="testimonial">
            <div className="testimonial-avatar">
              <div className="avatar-placeholder">DG</div>
            </div>
            <blockquote>&ldquo;{t.testimonials.testimonial3.quote}&rdquo;</blockquote>
            <cite>- {t.testimonials.testimonial3.author}</cite>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

