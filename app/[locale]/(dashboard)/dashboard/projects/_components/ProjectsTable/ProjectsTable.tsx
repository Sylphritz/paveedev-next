import { DataTable, DataTableColumn } from '@/components/DataTable'
import { DataTableRow } from '@/components/DataTable/DataTable.types'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

const mockRows: DataTableRow[] = [
  {
    id: '1',
    cells: ['[IMAGE]', 'Pavee.dev Portfolio Site', ''],
  },
  {
    id: '2',
    cells: ['[IMAGE]', 'Noistack.com', ''],
  },
  {
    id: '3',
    cells: ['[IMAGE]', 'TaskForge', ''],
  },
]

export function ProjectsTable() {
  const t = useTranslations('Dashboard')

  const columns = useMemo<DataTableColumn[]>(
    () => [
      {
        name: t('projectsPage.content.table.header.image'),
        className: 'text-center',
      },
      {
        name: t('projectsPage.content.table.header.projectName'),
        className: 'text-left',
      },
      {
        name: t('projectsPage.content.table.header.actions'),
        className: 'w-px text-center whitespace-nowrap',
        format: (value, rowId) => (
          <div className="flex justify-center">
            <Link href={`/dashboard/projects/${rowId}`}>
              {t('projectsPage.content.table.action.view')}
            </Link>
            <Link href={`/dashboard/projects/edit/${rowId}`}>
              {t('projectsPage.content.table.action.edit')}
            </Link>
            <Link href={`/dashboard/projects/delete/${rowId}`}>
              {t('projectsPage.content.table.action.delete')}
            </Link>
          </div>
        ),
      },
    ],
    [t],
  )

  return (
    <DataTable
      columns={columns}
      rows={mockRows}
      currentPage={1}
      totalPages={12}
    />
  )
}
