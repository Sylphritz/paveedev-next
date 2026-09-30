import { Sidebar } from '@/app/(dashboard)/_components/Sidebar'
import { Breadcrumb } from '@/components/Breadcrumb'
import { BreadcrumbItemProps } from '@/components/Breadcrumb/components/BreadcrumbItem'
import MenuIcon from '@material-symbols/svg-400/rounded/menu.svg'

const breadcrumbItems: BreadcrumbItemProps[] = [
  { href: '/dashboard/skills', children: 'Skills' },
  { href: '/dashboard/skills/1234', children: 'Skill 1234' },
]

type DashboardLayoutProps = LayoutProps<'/'>

export default function FrontendLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col gap-3 p-3 max-h-full overflow-y-auto overflow-x-hidden">
        <div className="flex gap-3 justify-between items-center">
          <Breadcrumb items={breadcrumbItems} />
          <button className="flex items-center justify-center text-2xl text-on-primary rounded-2xl w-9 h-9 bg-primary shadow-sm lg:hidden">
            <MenuIcon />
          </button>
        </div>
        <div className="flex-1">{children}</div>
      </main>
    </div>
  )
}
