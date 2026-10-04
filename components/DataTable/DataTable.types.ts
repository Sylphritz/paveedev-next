import { PaginationProps } from '@/components/Pagination'
import { ReactNode } from 'react'

export type DataTableProps = {
  columns: DataTableColumn[]
  rows: DataTableRow[]
} & PaginationProps

export type DataTableColumn = {
  name: string
  className?: string
  format?: (value: ReactNode, rowId: string) => ReactNode
}

export type DataTableRow = {
  id: string
  cells: ReactNode[]
}
