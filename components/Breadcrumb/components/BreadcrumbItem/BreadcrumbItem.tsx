import { Link } from '@/i18n/navigation'
import { Url } from 'next/dist/shared/lib/router/router'
import { ReactNode } from 'react'

export type BreadcrumbItemProps = {
  href: Url
  children: ReactNode
}

export function BreadcrumbItem({ href, children }: BreadcrumbItemProps) {
  return (
    <li className="relative">
      <Link href={href} className="font-medium text-primary-light">
        {children}
      </Link>
    </li>
  )
}
