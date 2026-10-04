import { Header } from '@/app/[locale]/(dashboard)/_components/Header'
import { Metadata } from 'next'

import { Sidebar } from './_components/Sidebar'

type DashboardLayoutProps = LayoutProps<'/[locale]'>

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: {
    template: '%s | Portfolio Dashboard',
    default: 'Portfolio Dashboard',
  },
  description: 'The dashboard for your personal portfolio.',
  authors: {
    name: 'Pavee Udomkarnpaisarn',
    url: 'https://pavee.dev',
  },
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
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
