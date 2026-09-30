import { Sidebar } from '@/app/(dashboard)/_components/Sidebar'
import { Breadcrumb } from '@/components/Breadcrumb'
import { BreadcrumbItemProps } from '@/components/Breadcrumb/components/BreadcrumbItem'

const breadcrumbItems: BreadcrumbItemProps[] = [
  { href: '/dashboard/skills', children: 'Skills' },
  { href: '/dashboard/skills/1234', children: 'Skill 1234' },
]

type DashboardLayoutProps = LayoutProps<'/'>

export default function FrontendLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col p-4 overflow-y-auto overflow-x-hidden">
        <div className="flex gap-4 justify-between items-center">
          <Breadcrumb items={breadcrumbItems} />
          [BUTTON]
        </div>
        <div>{children}</div>
      </main>
    </div>
  )
}
