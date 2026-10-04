import { Link } from '@/i18n/navigation'







type PaginationItemProps = {
  page: number
  disabled?: boolean
}

export function PaginationItem({ page, disabled }: PaginationItemProps) {
  if (disabled)
    return (
      <li>
        <div className="block p-1 font-bold">{page}</div>
      </li>
    )

  return (
    <li>
      <Link href={`?page=${page}`} className="block p-1">
        {page}
      </Link>
    </li>
  )
}
