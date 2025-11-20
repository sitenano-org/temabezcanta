'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from '../../contexts/TranslationContext'

export default function HowWeWorkPage() {
  const { t } = useTranslation()

  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>{t.pages.howWeWork.title}</h1>
          <p className="page-subtitle">{t.pages.howWeWork.subtitle}</p>
          <p className="page-intro">{t.pages.howWeWork.intro}</p>
        </div>
      </div>

      <section className="process container">
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
          <a href="/contact" className="btn btn-primary">{t.process.getStarted}</a>
        </div>
      </section>
      <Footer />
    </main>
  )
}

