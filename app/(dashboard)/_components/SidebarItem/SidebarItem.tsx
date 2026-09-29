import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { ReactNode } from 'react'

type SidebarItemProps = {
  href: Url
  icon?: string
  children: ReactNode
}

export function SidebarItem({ href, icon, children }: SidebarItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="flex gap-3 justify-start items-center font-normal text-on-primary rounded-lg hover:bg-primary-light px-3 py-2 transition-colors duration-200"
      >
        {icon && <span className="material-symbols-rounded">{icon}</span>}
        {children}
      </Link>
    </li>
  )
}
