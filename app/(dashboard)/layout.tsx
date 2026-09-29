type DashboardLayoutProps = LayoutProps<'/'>

export default function FrontendLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col w-64">sidebar</div>
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  )
}
