'use client'

import { LanguageSwitcher } from '@/app/[locale]/(dashboard)/_components/Header/components/LanguageSwitcher'
import { Breadcrumb } from '@/components/Breadcrumb'
import { BreadcrumbItemProps } from '@/components/Breadcrumb/components/BreadcrumbItem'
import MenuIcon from '@material-symbols/svg-400/rounded/menu.svg'

// TODO: update it to be dynamic
const breadcrumbItems: BreadcrumbItemProps[] = [
  { href: '/dashboard/skills', children: 'Skills' },
  { href: '/dashboard/skills/1234', children: 'Skill 1234' },
]

export function Header() {
  return (
    <div className="flex gap-3 justify-between items-center">
      <Breadcrumb items={breadcrumbItems} />
      <LanguageSwitcher />
      <button className="flex items-center justify-center text-2xl text-on-primary rounded-2xl w-9 h-9 bg-primary shadow-sm lg:hidden">
        <MenuIcon />
      </button>
    </div>
  )
}
