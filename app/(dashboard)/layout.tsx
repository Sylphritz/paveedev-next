import { Sidebar } from '@/app/(dashboard)/_components/Sidebar'







type DashboardLayoutProps = LayoutProps<'/'>

export default function FrontendLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  )
}
