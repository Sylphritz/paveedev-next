import { ReactNode } from 'react'







export type DashboardContainerProps = {
  children: ReactNode
}

export function DashboardContainer({ children }: DashboardContainerProps) {
  return <div className="flex flex-col gap-6">{children}</div>
}
