'use client'

import { TranslationProvider } from '../contexts/TranslationContext'
import { CartProvider } from '../contexts/CartContext'

type Locale = 'en' | 'tr' | 'de'

export function Providers({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return (
    <TranslationProvider locale={locale}>
      <CartProvider>
        {children}
      </CartProvider>
    </TranslationProvider>
  )
}

