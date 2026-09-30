import { SidebarGroup } from '@/app/(dashboard)/_components/SidebarGroup'
import { SidebarHeader } from '@/app/(dashboard)/_components/SidebarHeader'
import { SidebarItem } from '@/app/(dashboard)/_components/SidebarItem'
import ArticleIcon from '@material-symbols/svg-400/rounded/article-fill.svg'
import AssignmentTurnedInIcon from '@material-symbols/svg-400/rounded/assignment_turned_in-fill.svg'
import CategoryIcon from '@material-symbols/svg-400/rounded/category-fill.svg'
import HomeIcon from '@material-symbols/svg-400/rounded/home-fill.svg'
import PersonIcon from '@material-symbols/svg-400/rounded/person-fill.svg'
import PsychologyAltIcon from '@material-symbols/svg-400/rounded/psychology_alt-fill.svg'
import SettingsIcon from '@material-symbols/svg-400/rounded/settings-fill.svg'

export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 p-3">
      <div className="flex flex-col min-h-full bg-linear-to-br from-primary to-primary-dark p-5 gap-4 rounded-2xl shadow-sm shadow-neutral-700">
        <h1 className="text-lg text-on-primary">Admin Dashboard</h1>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <SidebarGroup>
            <SidebarItem
              href="/dashboard"
              leadingSlot={<HomeIcon className="w-6 h-6" />}
            >
              Dashboard
            </SidebarItem>
            <SidebarItem
              href="/dashboard/skills"
              leadingSlot={<PsychologyAltIcon className="w-6 h-6" />}
            >
              Skills
            </SidebarItem>
            <SidebarItem
              href="/dashboard/projects"
              leadingSlot={<AssignmentTurnedInIcon className="w-6 h-6" />}
            >
              Projects
            </SidebarItem>
            <SidebarItem
              href="/dashboard/contact-info"
              leadingSlot={<PersonIcon className="w-6 h-6" />}
            >
              Contact Info
            </SidebarItem>
          </SidebarGroup>
          <div className="border-t border-accent-muted/20 my-8" />
          <SidebarHeader>Blog</SidebarHeader>
          <SidebarGroup>
            <SidebarItem
              href="/dashboard/posts"
              leadingSlot={<ArticleIcon className="w-6 h-6" />}
            >
              Posts
            </SidebarItem>
            <SidebarItem
              href="/dashboard/categories"
              leadingSlot={<CategoryIcon className="w-6 h-6" />}
            >
              Categories
            </SidebarItem>
          </SidebarGroup>
        </div>
        <div>
          <SidebarGroup>
            <SidebarItem
              href="/dashboard/settings"
              leadingSlot={<SettingsIcon className="w-6 h-6" />}
            >
              Settings
            </SidebarItem>
          </SidebarGroup>
        </div>
      </div>
    </aside>
  )
}
