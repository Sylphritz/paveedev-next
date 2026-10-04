import { Pagination } from '@/components/Pagination'

import { DataTableProps } from './DataTable.types'

export function DataTable({
  columns,
  rows,
  currentPage,
  totalPages,
}: DataTableProps) {
  return (
    <div>
      {/* `.border-separate` and `.border-spacing-0` are needed here to make cell borders rounded-able. */}
      <table className="w-full [&_th,&_td]:p-3 rounded-2xl border-separate border-spacing-0">
        <thead className="sticky top-0 shadow-sm shadow-primary-muted bg-linear-to-br from-primary to-primary-dark text-on-primary rounded-2xl text-shadow text-shadow-xs/50 [&_th]:font-medium">
          <tr className="*:first:rounded-l-2xl *:last:rounded-r-2xl">
            {columns.map((col) => (
              <th key={col.name} className={col.className}>
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="*:odd:bg-primary/10 [&_td]:whitespace-nowrap before:content-[''] before:table-row before:h-4 *:first:*:border-t *:first:*:first:rounded-tl-2xl *:first:*:last:rounded-tr-2xl *:last:*:first:rounded-bl-2xl *:last:*:last:rounded-br-2xl *:last:*:border-b *:*:first:border-l *:*:last:border-r *:*:border-accent-muted/20">
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((col, index) => (
                <td key={col.name} className={col.className}>
                  {col.format
                    ? col.format(row.cells[index], row.id)
                    : row.cells[index]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sticky bottom-0 my-4">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  )
}
