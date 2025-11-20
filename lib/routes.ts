// Route mappings for localized URLs
// English routes are the canonical routes, mapped to localized versions

type Locale = 'en' | 'tr' | 'de'

type RouteKey = 
  | 'home'
  | 'services'
  | 'how-we-work'
  | 'clients'
  | 'contact'
  | 'training'
  | 'consulting'
  | 'automation'
  | 'blog'
  | 'our-story'
  | 'press'
  | 'ai-guides'
  | 'ai-tools'
  | 'live-sessions'
  | 'case-studies'
  | 'our-clients'
  | 'newsletter'

const routes: Record<RouteKey, Record<Locale, string>> = {
  'home': {
    en: '',
    tr: '',
    de: '',
  },
  'services': {
    en: 'services',
    tr: 'hizmetler',
    de: 'dienstleistungen',
  },
  'how-we-work': {
    en: 'how-we-work',
    tr: 'nasil-calisiyoruz',
    de: 'wie-wir-arbeiten',
  },
  'clients': {
    en: 'clients',
    tr: 'musteriler',
    de: 'kunden',
  },
  'contact': {
    en: 'contact',
    tr: 'iletisim',
    de: 'kontakt',
  },
  'training': {
    en: 'training',
    tr: 'egitim',
    de: 'schulung',
  },
  'consulting': {
    en: 'consulting',
    tr: 'danismanlik',
    de: 'beratung',
  },
  'automation': {
    en: 'automation',
    tr: 'otomasyon',
    de: 'automatisierung',
  },
  'blog': {
    en: 'blog',
    tr: 'blog',
    de: 'blog',
  },
  'our-story': {
    en: 'our-story',
    tr: 'hikayemiz',
    de: 'unsere-geschichte',
  },
  'press': {
    en: 'press',
    tr: 'basin',
    de: 'presse',
  },
  'ai-guides': {
    en: 'ai-guides',
    tr: 'ai-kilavuzlari',
    de: 'ki-leitfaden',
  },
  'ai-tools': {
    en: 'ai-tools',
    tr: 'ai-araclari',
    de: 'ki-tools',
  },
  'live-sessions': {
    en: 'live-sessions',
    tr: 'canli-oturumlar',
    de: 'live-sitzungen',
  },
  'case-studies': {
    en: 'case-studies',
    tr: 'vaka-calismalari',
    de: 'fallstudien',
  },
  'our-clients': {
    en: 'our-clients',
    tr: 'musterilerimiz',
    de: 'unsere-kunden',
  },
  'newsletter': {
    en: 'newsletter',
    tr: 'bulten',
    de: 'newsletter',
  },
}

// Reverse mapping: from localized route to canonical route key
const reverseRoutes: Record<Locale, Record<string, RouteKey>> = {
  en: {},
  tr: {},
  de: {},
}

// Build reverse mapping
Object.entries(routes).forEach(([key, locales]) => {
  Object.entries(locales).forEach(([locale, path]) => {
    if (path) {
      reverseRoutes[locale as Locale][path] = key as RouteKey
    }
  })
})

/**
 * Get localized route for a given route key and locale
 */
export function getLocalizedRoute(routeKey: RouteKey, locale: Locale): string {
  const route = routes[routeKey]?.[locale] || routes[routeKey]?.en || ''
  return route ? `/${locale}/${route}` : `/${locale}`
}

/**
 * Get canonical route key from a localized path
 */
export function getRouteKeyFromPath(path: string, locale: Locale): RouteKey | null {
  // Remove locale prefix and leading/trailing slashes
  const cleanPath = path.replace(new RegExp(`^/${locale}/?`), '').replace(/^\/|\/$/g, '')
  
  if (!cleanPath) return 'home'
  
  return reverseRoutes[locale]?.[cleanPath] || null
}

/**
 * Get all available routes
 */
export function getAllRoutes(): typeof routes {
  return routes
}

/**
 * Get route key type
 */
export type { RouteKey }

