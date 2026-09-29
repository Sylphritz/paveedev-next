import { ReactNode } from 'react'







type SidebarGroupProps = {
  children: ReactNode
}

export function SidebarGroup({ children }: SidebarGroupProps) {
  return <ul className="space-y-2">{children}</ul>
}
