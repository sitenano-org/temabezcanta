import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Providers } from '@/app/components/Providers'
import enTranslations from '../../translations/en.json'
import trTranslations from '../../translations/tr.json'
import deTranslations from '../../translations/de.json'

const inter = Inter({ subsets: ['latin'] })

const translations = {
  en: enTranslations,
  tr: trTranslations,
  de: deTranslations,
}

type Locale = 'en' | 'tr' | 'de'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const finalLocale = (locale as Locale) || 'en'
  const t = translations[finalLocale] || translations.en

  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: `/${finalLocale}`,
      languages: {
        'en': '/en',
        'tr': '/tr',
        'de': '/de',
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const finalLocale = (locale as Locale) || 'en'

  return (
    <html lang={finalLocale}>
      <body className={inter.className}>
        <Providers locale={finalLocale}>{children}</Providers>
      </body>
    </html>
  )
}

