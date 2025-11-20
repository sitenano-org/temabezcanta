'use client'

import { useMemo } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import { getLocalizedRoute, type RouteKey } from '@/lib/routes'

/**
 * Hook to get localized routes
 */
export function useLocalizedRoutes() {
  const { locale } = useTranslation()

  const routes = useMemo(() => {
    const createRoute = (key: RouteKey) => getLocalizedRoute(key, locale)

    return {
      home: createRoute('home'),
      services: createRoute('services'),
      howWeWork: createRoute('how-we-work'),
      clients: createRoute('clients'),
      contact: createRoute('contact'),
      training: createRoute('training'),
      consulting: createRoute('consulting'),
      automation: createRoute('automation'),
      blog: createRoute('blog'),
      ourStory: createRoute('our-story'),
      press: createRoute('press'),
      aiGuides: createRoute('ai-guides'),
      aiTools: createRoute('ai-tools'),
      liveSessions: createRoute('live-sessions'),
      caseStudies: createRoute('case-studies'),
      ourClients: createRoute('our-clients'),
      newsletter: createRoute('newsletter'),
    }
  }, [locale])

  return routes
}

