import { Header } from '@/app/[locale]/(dashboard)/_components/Header'

import { Sidebar } from './_components/Sidebar'

type DashboardLayoutProps = LayoutProps<'/[locale]'>

export default function FrontendLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col gap-3 p-3 max-h-full overflow-y-auto overflow-x-hidden">
        <Header />
        <div className="flex-1">{children}</div>
      </main>
    </div>
  )
}
