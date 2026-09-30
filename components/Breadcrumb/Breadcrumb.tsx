import {
  BreadcrumbItem,
  type BreadcrumbItemProps,
} from '@/components/Breadcrumb/components/BreadcrumbItem'
import { cn } from '@/utils/styles'
import HomeIcon from '@material-symbols/svg-400/rounded/home-fill.svg'

const dividerClasses = [
  '*:not-first:before:block',
  '*:not-first:before:absolute',
  '*:not-first:before:content-[">"]',
  '*:not-first:before:-left-4',
  '*:not-first:before:top-1/2',
  '*:not-first:before:translate-y-[-50%]',
  '*:not-first:before:translate-x-[-50%]',
  '*:not-first:before:text-primary-light',
]

type BreadcrumbProps = {
  items?: BreadcrumbItemProps[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-linear-to-br from-surface to-surface/70 px-4 py-2 rounded-2xl inset-shadow-sm shadow-neutral-100">
      <ul
        className={cn(
          'flex items-center gap-0 text-sm space-x-8',
          dividerClasses,
        )}
      >
        <BreadcrumbItem href="/dashboard">
          <HomeIcon />
        </BreadcrumbItem>
        {items &&
          items.map((item, index) => <BreadcrumbItem key={index} {...item} />)}
      </ul>
    </nav>
  )
}
