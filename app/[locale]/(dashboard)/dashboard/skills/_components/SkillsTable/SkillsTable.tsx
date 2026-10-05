import { DataTable, DataTableColumn } from '@/components/DataTable'
import { DataTableRow } from '@/components/DataTable/DataTable.types'
import { DataTableActions } from '@/components/DataTable/components/DataTableActions'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

const mockRows: DataTableRow[] = [
  {
    id: '1',
    cells: ['React', 5, ''],
  },
  {
    id: '2',
    cells: ['Next.js', 4, ''],
  },
  {
    id: '3',
    cells: ['Vue.js', 20, ''],
  },
  {
    id: '4',
    cells: ['MySQL', 1, ''],
  },
]

export function SkillsTable() {
  const t = useTranslations('Dashboard')

  const columns = useMemo<DataTableColumn[]>(
    () => [
      {
        name: t('skillsPage.content.table.header.skill'),
        className: 'text-left',
      },
      {
        name: t('skillsPage.content.table.header.relatedProjects'),
        className: 'w-px text-center whitespace-nowrap',
        format: (value, rowId) => (
          <div className="flex justify-center">
            <Link
              href={`/dashboard/projects?relatedSkill=${rowId}`}
              className="underline"
            >
              {value}
            </Link>
          </div>
        ),
      },
      {
        name: t('skillsPage.content.table.header.actions'),
        className: 'w-px text-center whitespace-nowrap',
        format: (value, rowId) => (
          <DataTableActions pathPrefix="/dashboard/skills" rowId={rowId} />
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
