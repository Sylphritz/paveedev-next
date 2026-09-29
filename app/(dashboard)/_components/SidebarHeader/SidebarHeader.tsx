import { ReactNode } from 'react'







type SidebarHeaderProps = {
  children: ReactNode
}

export function SidebarHeader({ children }: SidebarHeaderProps) {
  return (
    <h2 className="text-xs uppercase text-on-primary/50 font-normal px-3 mb-4">
      {children}
    </h2>
  )
}
