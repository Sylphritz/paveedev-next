import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { ReactNode } from 'react'

type SidebarItemProps = {
  href: Url
  children: ReactNode
}

export function SidebarItem({ href, children }: SidebarItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="font-normal text-on-primary block rounded-lg hover:bg-primary-light px-3 py-2 transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  )
}
