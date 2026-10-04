import { DataTable, DataTableColumn } from '@/components/DataTable'
import { DataTableRow } from '@/components/DataTable/DataTable.types'
import { Link } from '@/i18n/navigation'

const columns: DataTableColumn[] = [
  {
    name: 'Image',
    className: 'text-center',
  },
  {
    name: 'Project Name',
    className: 'text-left',
  },
  {
    name: 'Actions',
    className: 'w-px text-center whitespace-nowrap',
    format: (value, rowId) => (
      <div className="flex justify-center">
        <Link href={`/dashboard/projects/edit/${rowId}`}>Edit</Link>
        <Link href={`/dashboard/projects/delete/${rowId}`}>Delete</Link>
      </div>
    ),
  },
]

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
  return (
    <DataTable
      columns={columns}
      rows={mockRows}
      currentPage={1}
      totalPages={12}
    />
  )
}
