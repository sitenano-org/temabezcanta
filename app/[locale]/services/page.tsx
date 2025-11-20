'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from '../../contexts/TranslationContext'

export default function ServicesPage() {
  const { t } = useTranslation()

  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>{t.pages.services.title}</h1>
          <p className="page-subtitle">{t.pages.services.subtitle}</p>
          <p className="page-intro">{t.pages.services.intro}</p>
        </div>
      </div>

      <section className="services container">
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

      <section className="why-choose container">
        <h2>Why Choose Our Services</h2>
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
      <Footer />
    </main>
  )
}

