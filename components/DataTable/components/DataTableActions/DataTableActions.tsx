import { Link } from '@/i18n/navigation'
import DeleteIcon from '@material-symbols/svg-400/rounded/delete-fill.svg'
import EditIcon from '@material-symbols/svg-400/rounded/edit-fill.svg'
import ViewIcon from '@material-symbols/svg-400/rounded/visibility-fill.svg'
import { useTranslations } from 'next-intl'

type DataTableActionsProps = {
  pathPrefix: string
  rowId: string
}

export function DataTableActions({ pathPrefix, rowId }: DataTableActionsProps) {
  const t = useTranslations('Dashboard.common.table.action')

  return (
    <div className="flex justify-center items-center gap-3">
      {/* TODO: add tooltips */}
      <Link href={`${pathPrefix}/skills/${rowId}`} aria-label={t('view')}>
        <ViewIcon className="w-5 h-5" />
      </Link>
      <Link href={`${pathPrefix}/skills/edit/${rowId}`} aria-label={t('edit')}>
        <EditIcon className="w-5 h-5" />
      </Link>
      <Link
        href={`${pathPrefix}/skills/delete/${rowId}`}
        aria-label={t('delete')}
      >
        <DeleteIcon className="w-5 h-5" />
      </Link>
    </div>
  )
}
