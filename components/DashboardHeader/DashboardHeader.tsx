import { ReactNode } from 'react'







export type DashboardHeaderProps = {
  title: string
  subtitle?: string
  trailingSlot?: ReactNode
}

export function DashboardHeader({
  title,
  subtitle,
  trailingSlot,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl tracking-tight">{title}</h1>
        {subtitle && (
          <small className="text-sm text-content-muted">{subtitle}</small>
        )}
      </div>
      {trailingSlot}
    </div>
  )
}
