import { DataTable, DataTableColumn } from '@/components/DataTable'
import { DataTableRow } from '@/components/DataTable/DataTable.types'
import { Link } from '@/i18n/navigation'

const columns: DataTableColumn[] = [
  {
    name: 'Skill',
    className: 'text-left',
  },
  {
    name: 'Related Projects',
    className: 'w-px text-center whitespace-nowrap',
    format: (value, rowId) => (
      <div className="flex justify-center">
        <Link href={`/dashboard/projects?relatedSkill=${rowId}`}>{value}</Link>
      </div>
    ),
  },
  {
    name: 'Actions',
    className: 'w-px text-center whitespace-nowrap',
    format: (value, rowId) => (
      <div className="flex justify-center">
        <Link href={`/dashboard/skills/edit/${rowId}`}>Edit</Link>
        <Link href={`/dashboard/skills/delete/${rowId}`}>Delete</Link>
      </div>
    ),
  },
]

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
  return (
    <DataTable
      columns={columns}
      rows={mockRows}
      currentPage={1}
      totalPages={12}
    />
  )
}
