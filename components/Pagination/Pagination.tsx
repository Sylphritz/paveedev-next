import { PaginationItem } from '@/components/Pagination/components/PaginationItem'
import { Link } from '@/i18n/navigation'
import { useMemo } from 'react'

import { PaginationProps } from './Pagination.types'

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pages = useMemo(
    () => [...Array(totalPages).keys()].map((i) => i + 1),
    [totalPages],
  )

  return (
    <nav className="flex px-4 py-1 bg-linear-to-br from-surface to-sunken shadow-sm/10 w-fit mx-auto rounded-full">
      <ul className="flex space-x-3 *:*:font-normal text-sm">
        <li>
          {currentPage === 1 ? (
            <div className="block p-1 text-primary-muted">Previous</div>
          ) : (
            <Link href="?page=1" className="block p-1">
              Previous
            </Link>
          )}
        </li>
        {pages.map((pageNumber) => (
          <PaginationItem
            key={pageNumber}
            page={pageNumber}
            disabled={pageNumber === currentPage}
          />
        ))}
        {/* TODO: make it truncate when there are many pages */}
        {/*<li className="p-1">...</li>*/}
        {/*<li>*/}
        {/*  <Link href="?page=8" className="block p-1">*/}
        {/*    8*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link href={`?page=${totalPages}`} className="block p-1">*/}
        {/*    {totalPages}*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li className="flex items-center">*/}
        {/*  <div className="flex gap-2">*/}
        {/*    <div>Go to</div>*/}
        {/*    <input*/}
        {/*      type=" number"*/}
        {/*      min={1}*/}
        {/*      step={1}*/}
        {/*      className="bg-white w-10 px-2 [&::-webkit-outer-spin-button]:appearance-none"*/}
        {/*    />*/}
        {/*    <button>Go</button>*/}
        {/*  </div>*/}
        {/*</li>*/}
        <li>
          {currentPage === totalPages ? (
            <div className="block p-1 text-primary-muted">Next</div>
          ) : (
            <Link href={`?page=${currentPage + 1}`} className="block p-1">
              Next
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
