import { Locale, routing } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { useCallback, useState } from 'react'

export const useLanguageSwitcher = () => {
  const locale = useLocale()
  const [currentLanguage, setCurrentLanguage] = useState(locale)
  const [nextLanguage, setNextLanguage] = useState<Locale>(() => {
    const index = routing.locales.findIndex(
      (value) => value === currentLanguage,
    )

    return routing.locales[(index + 1) % routing.locales.length]
  })

  const setLanguage = useCallback((lang: Locale) => {
    setCurrentLanguage(lang)
  }, [])

  // I don't know what I'm doing here. This function is useless LMFAO.
  const cycleLanguage = useCallback(() => {
    routing.locales.forEach((locale, index) => {
      if (locale === currentLanguage) {
        setCurrentLanguage(
          routing.locales[(index + 1) % routing.locales.length],
        )
        setNextLanguage(routing.locales[(index + 2) % routing.locales.length])
      }
    })
  }, [currentLanguage])

  return {
    currentLanguage,
    nextLanguage,
    setLanguage,
    cycleLanguage,
  }
}
