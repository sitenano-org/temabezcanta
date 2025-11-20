'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from '../contexts/TranslationContext'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main>
      <Navbar />
      {/* Header / Hero */}
      <header className="hero">
        <div className="hero-content container">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#request-call" className="btn btn-secondary">{t.hero.cta}</a>
        </div>
        <div className="trusted-by container">
          <p>{t.hero.trustedBy}</p>
          <div className="client-logos">
            {/* Placeholder for client logos */}
            <div className="logo-placeholder">Client Logo 1</div>
            <div className="logo-placeholder">Client Logo 2</div>
            <div className="logo-placeholder">Client Logo 3</div>
            <div className="logo-placeholder">Client Logo 4</div>
          </div>
        </div>
      </header>

      {/* How We Create Value / Services */}
      <section id="services" className="services container">
        <div className="service-card">
          <div className="service-image">
            <div className="image-placeholder">Training Graphic</div>
          </div>
          <h3>{t.services.training.title}</h3>
          <p>{t.services.training.description}</p>
          <a href="/training" className="learn-more">{t.services.training.learnMore} →</a>
        </div>
        <div className="service-card">
          <div className="service-image">
            <div className="image-placeholder">Consulting Graphic</div>
          </div>
          <h3>{t.services.consulting.title}</h3>
          <p>{t.services.consulting.description}</p>
          <a href="/consulting" className="learn-more">{t.services.consulting.learnMore} →</a>
        </div>
        <div className="service-card">
          <div className="service-image">
            <div className="image-placeholder">Automation Graphic</div>
          </div>
          <h3>{t.services.automation.title}</h3>
          <p>{t.services.automation.description}</p>
          <a href="/automation" className="learn-more">{t.services.automation.learnMore} →</a>
        </div>
      </section>

      {/* Why Choose / Value Props */}
      <section className="why-choose container">
        <div className="value-prop">
          <h4>{t.valueProps.efficiency.title}</h4>
          <p>{t.valueProps.efficiency.description}</p>
        </div>
        <div className="value-prop">
          <h4>{t.valueProps.competitiveAdvantage.title}</h4>
          <p>{t.valueProps.competitiveAdvantage.description}</p>
        </div>
        <div className="value-prop">
          <h4>{t.valueProps.smartScaling.title}</h4>
          <p>{t.valueProps.smartScaling.description}</p>
        </div>
        <div className="value-prop">
          <h4>{t.valueProps.powerfulResults.title}</h4>
          <p>{t.valueProps.powerfulResults.description}</p>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section id="clients" className="testimonials container">
        <h2>{t.testimonials.title}</h2>
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
        <a href="/case-studies" className="see-more">{t.testimonials.seeMore}</a>
      </section>

      {/* How We Work / Process */}
      <section id="how-we-work" className="process container">
        <h2>{t.process.title}</h2>
        <ol className="process-steps">
          <li>
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>{t.process.step1.title}</h3>
              <p>{t.process.step1.description}</p>
            </div>
          </li>
          <li>
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>{t.process.step2.title}</h3>
              <p>{t.process.step2.description}</p>
            </div>
          </li>
          <li>
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>{t.process.step3.title}</h3>
              <p>{t.process.step3.description}</p>
            </div>
          </li>
        </ol>
        <div className="process-cta">
          <a href="#request-call" className="btn btn-primary">{t.process.getStarted}</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq container">
        <h2>{t.faq.title}</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>{t.faq.q1.question}</h3>
            <p>{t.faq.q1.answer}</p>
          </div>
          <div className="faq-item">
            <h3>{t.faq.q2.question}</h3>
            <p>{t.faq.q2.answer}</p>
          </div>
          <div className="faq-item">
            <h3>{t.faq.q3.question}</h3>
            <p>{t.faq.q3.answer}</p>
          </div>
          <div className="faq-item">
            <h3>{t.faq.q4.question}</h3>
            <p>{t.faq.q4.answer}</p>
          </div>
          <div className="faq-item">
            <h3>{t.faq.q5.question}</h3>
            <p>{t.faq.q5.answer}</p>
          </div>
        </div>
      </section>

      {/* Call to Action / Footer */}
      <Footer />
    </main>
  )
}

