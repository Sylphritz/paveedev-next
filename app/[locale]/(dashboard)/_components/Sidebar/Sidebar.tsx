import { SidebarGroup } from '@/app/[locale]/(dashboard)/_components/SidebarGroup'
import { SidebarHeader } from '@/app/[locale]/(dashboard)/_components/SidebarHeader'
import { SidebarItem } from '@/app/[locale]/(dashboard)/_components/SidebarItem'
import ArticleIcon from '@material-symbols/svg-400/rounded/article-fill.svg'
import AssignmentTurnedInIcon from '@material-symbols/svg-400/rounded/assignment_turned_in-fill.svg'
import CategoryIcon from '@material-symbols/svg-400/rounded/category-fill.svg'
import HomeIcon from '@material-symbols/svg-400/rounded/home-fill.svg'
import PersonIcon from '@material-symbols/svg-400/rounded/person-fill.svg'
import PsychologyAltIcon from '@material-symbols/svg-400/rounded/psychology_alt-fill.svg'
import SettingsIcon from '@material-symbols/svg-400/rounded/settings-fill.svg'
import { useTranslations } from 'next-intl'

export function Sidebar() {
  const t = useTranslations('Dashboard')

  return (
    <aside className="hidden lg:flex flex-col w-64 p-3">
      <div className="flex flex-col min-h-full bg-linear-to-br from-primary to-primary-dark p-5 gap-4 rounded-2xl shadow-sm shadow-neutral-700">
        <h1 className="text-lg text-on-primary">{t('menu.title')}</h1>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <SidebarGroup>
            <SidebarItem
              href="/dashboard"
              leadingSlot={<HomeIcon className="w-6 h-6" />}
            >
              {t('menu.item.dashboard')}
            </SidebarItem>
            <SidebarItem
              href="/dashboard/skills"
              leadingSlot={<PsychologyAltIcon className="w-6 h-6" />}
            >
              {t('menu.item.skills')}
            </SidebarItem>
            <SidebarItem
              href="/dashboard/projects"
              leadingSlot={<AssignmentTurnedInIcon className="w-6 h-6" />}
            >
              {t('menu.item.projects')}
            </SidebarItem>
            <SidebarItem
              href="/dashboard/contact-info"
              leadingSlot={<PersonIcon className="w-6 h-6" />}
            >
              {t('menu.item.contactInfo')}
            </SidebarItem>
          </SidebarGroup>
          <div className="border-t border-accent-muted/20 my-8" />
          <SidebarHeader>{t('menu.blog.title')}</SidebarHeader>
          <SidebarGroup>
            <SidebarItem
              href="/dashboard/posts"
              leadingSlot={<ArticleIcon className="w-6 h-6" />}
            >
              {t('menu.blog.item.posts')}
            </SidebarItem>
            <SidebarItem
              href="/dashboard/categories"
              leadingSlot={<CategoryIcon className="w-6 h-6" />}
            >
              {t('menu.blog.item.categories')}
            </SidebarItem>
          </SidebarGroup>
        </div>
        <div>
          <SidebarGroup>
            <SidebarItem
              href="/dashboard/settings"
              leadingSlot={<SettingsIcon className="w-6 h-6" />}
            >
              {t('menu.item.settings')}
            </SidebarItem>
          </SidebarGroup>
        </div>
      </div>
    </aside>
  )
}
