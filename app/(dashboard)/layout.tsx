import { SidebarGroup } from '@/app/(dashboard)/_components/SidebarGroup'
import { SidebarHeader } from '@/app/(dashboard)/_components/SidebarHeader/SidebarHeader'
import { SidebarItem } from '@/app/(dashboard)/_components/SidebarItem'

type DashboardLayoutProps = LayoutProps<'/'>

export default function FrontendLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden lg:flex flex-col w-64 p-3">
        <div className="flex flex-col min-h-full bg-linear-to-br from-primary to-primary-dark p-5 gap-4 rounded-2xl">
          <h1 className="text-lg text-on-primary">Admin Dashboard</h1>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <SidebarGroup>
              <SidebarItem href="/dashboard" icon="home">
                Dashboard
              </SidebarItem>
              <SidebarItem href="/dashboard/skills" icon="psychology_alt">
                Skills
              </SidebarItem>
              <SidebarItem
                href="/dashboard/projects"
                icon="assignment_turned_in"
              >
                Projects
              </SidebarItem>
              <SidebarItem href="/dashboard/contact-info" icon="person">
                Contact Info
              </SidebarItem>
            </SidebarGroup>
            <div className="border-t border-accent-muted/20 my-8" />
            <SidebarHeader>Blog</SidebarHeader>
            <SidebarGroup>
              <SidebarItem href="/dashboard/posts" icon="article">
                Posts
              </SidebarItem>
              <SidebarItem href="/dashboard/categories" icon="category">
                Categories
              </SidebarItem>
            </SidebarGroup>
          </div>
          <div>
            <SidebarGroup>
              <SidebarItem href="/dashboard/settings" icon="settings">
                Settings
              </SidebarItem>
            </SidebarGroup>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  )
}
