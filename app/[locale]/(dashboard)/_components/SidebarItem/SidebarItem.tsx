'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/utils/styles'
import { Url } from 'next/dist/shared/lib/router/router'
import { ReactNode } from 'react'

type SidebarItemProps = {
  href: Url
  leadingSlot?: ReactNode
  children: ReactNode
}

export function SidebarItem({ href, leadingSlot, children }: SidebarItemProps) {
  const path = usePathname()

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'flex gap-3 justify-start items-center font-normal text-on-primary rounded-lg hover:bg-primary-light/50 px-3 py-2 transition-colors duration-200',
          path === href && 'bg-primary-light/50',
        )}
      >
        {leadingSlot}
        {children}
      </Link>
    </li>
  )
}
