'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from '../../contexts/TranslationContext'

export default function ContactPage() {
  const { t } = useTranslation()

  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>{t.pages.contact.title}</h1>
          <p className="page-subtitle">{t.pages.contact.subtitle}</p>
          <p className="page-intro">{t.pages.contact.intro}</p>
        </div>
      </div>

      <section className="contact-section container">
        <div className="contact-grid">
          <div className="contact-form-container">
            <h2>{t.pages.contact.form.title}</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t.pages.contact.form.name}</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.pages.contact.form.email}</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{t.pages.contact.form.phone}</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="company">{t.pages.contact.form.company}</label>
                <input type="text" id="company" name="company" />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.pages.contact.form.message}</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">{t.pages.contact.form.submit}</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>{t.pages.contact.info.title}</h2>
            <div className="info-item">
              <h4>{t.pages.contact.info.email}</h4>
              <p><a href="mailto:info@sitenano.com">info@sitenano.com</a></p>
            </div>
            <div className="info-item">
              <h4>{t.pages.contact.info.phone}</h4>
              <p><a href="tel:+902122129990">+90 (212) 212 99 90</a></p>
            </div>
            <div className="info-item">
              <h4>{t.pages.contact.info.address}</h4>
              <p>
                Yakuplu Mh. 194. Sk. 3. Mat. Sit. No:1 D:183<br />
                34524 Beylikduzu / Istanbul / Turkiye
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

