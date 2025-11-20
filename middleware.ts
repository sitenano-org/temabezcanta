import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'tr', 'de']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If there's no locale in the pathname, redirect to default locale
  if (!pathnameHasLocale) {
    // Get locale from cookie or accept-language header
    const locale = getLocale(request) || defaultLocale
    
    // Redirect to locale-prefixed URL
    request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
    return NextResponse.redirect(request.nextUrl)
  }

  return NextResponse.next()
}

function getLocale(request: NextRequest): string {
  // Check cookie first
  const cookieLocale = request.cookies.get('locale')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // Check accept-language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    for (const locale of locales) {
      if (acceptLanguage.includes(locale)) {
        return locale
      }
    }
  }

  return defaultLocale
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\..*|.*\\.).*)',
  ],
}

