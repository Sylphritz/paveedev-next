import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher'
import { Link, usePathname } from '@/i18n/navigation'

export function LanguageSwitcher() {
  const { currentLanguage, nextLanguage } = useLanguageSwitcher()
  const pathName = usePathname()

  return (
    <Link
      locale={nextLanguage}
      href={pathName}
      className="h-9 px-4 uppercase bg-linear-to-br from-primary to-primary-dark text-on-primary text-shadow-sm border border-primary-muted/50 rounded-2xl flex items-center justify-center text-sm font-normal"
    >
      {currentLanguage}
    </Link>
  )
}
