import React, { useState, useMemo } from 'react'
import { cn } from '../../lib/utils'
import { Search, ArrowUpDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'

export interface DataTableColumn<T> {
  key: keyof T
  header: string
  cell?: (item: T) => React.ReactNode
  sortable?: boolean
  width?: string
}

export interface DataTableProps<T> {
  data: T[]
  columns: DataTableColumn<T>[]
  className?: string
  sortable?: boolean
  searchable?: boolean
  pagination?: boolean
  pageSize?: number
  onRowClick?: (item: T) => void
}

export interface DataTableHeaderProps<T> {
  columns: DataTableColumn<T>[]
  sortColumn?: keyof T
  sortDirection?: 'asc' | 'desc'
  onSort?: (column: keyof T) => void
  sortable?: boolean
}

export interface DataTableRowProps<T> {
  item: T
  columns: DataTableColumn<T>[]
  onClick?: () => void
}

export interface DataTablePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export const DataTable = <T extends Record<string, any>>({
  data,
  columns,
  className,
  sortable = true,
  searchable = true,
  pagination = true,
  pageSize = 10,
  onRowClick
}: DataTableProps<T>) => {
  const [sortColumn, setSortColumn] = useState<keyof T | undefined>(undefined)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredData = useMemo(() => {
    let filtered = data

    if (searchable && searchTerm) {
      filtered = data.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    if (sortable && sortColumn) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[sortColumn]
        const bVal = b[sortColumn]

        if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
        if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
        return 0
      })
    }

    return filtered
  }, [data, searchTerm, sortColumn, sortDirection, sortable, searchable])

  const paginatedData = useMemo(() => {
    if (!pagination) return filteredData

    const startIndex = (currentPage - 1) * pageSize
    return filteredData.slice(startIndex, startIndex + pageSize)
  }, [filteredData, currentPage, pageSize, pagination])

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize))

  const handleSort = (column: keyof T) => {
    if (!sortable) return

    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
    setCurrentPage(1)
  }

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className={cn('w-full space-y-3', className)}>
      {searchable && (
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-zinc-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Search records..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all shadow-2xs"
          />
        </div>
      )}

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-2xs">
        <DataTableHeader
          columns={columns}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSort={handleSort}
          sortable={sortable}
        />
        <div className="divide-y divide-zinc-100 dark:divide-zinc-850">
          {paginatedData.length > 0 ? (
            paginatedData.map((item, index) => (
              <DataTableRow
                key={index}
                item={item}
                columns={columns}
                onClick={onRowClick ? () => onRowClick(item) : undefined}
              />
            ))
          ) : (
            <div className="px-4 py-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
              No matching records found.
            </div>
          )}
        </div>
      </div>

      {pagination && totalPages > 1 && (
        <DataTablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="pt-1"
        />
      )}
    </div>
  )
}

export const DataTableHeader = <T extends Record<string, any>>({
  columns,
  sortColumn,
  sortDirection,
  onSort,
  sortable
}: DataTableHeaderProps<T>) => {
  return (
    <div className="bg-zinc-50/80 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800">
      <div className="grid grid-cols-12 gap-4 px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300">
        {columns.map((column) => (
          <div
            key={String(column.key)}
            className={cn(
              'flex items-center',
              column.width ? column.width : 'col-span-1'
            )}
          >
            {sortable && column.sortable !== false ? (
              <button
                onClick={() => onSort?.(column.key)}
                className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group cursor-pointer"
              >
                <span>{column.header}</span>
                {sortColumn === column.key ? (
                  sortDirection === 'desc' ? (
                    <ArrowDown className="h-3 w-3 text-blue-500" />
                  ) : (
                    <ArrowUp className="h-3 w-3 text-blue-500" />
                  )
                ) : (
                  <ArrowUpDown className="h-3 w-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                )}
              </button>
            ) : (
              <span>{column.header}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export const DataTableRow = <T extends Record<string, any>>({
  item,
  columns,
  onClick
}: DataTableRowProps<T>) => {
  return (
    <div
      className={cn(
        'grid grid-cols-12 gap-4 px-4 py-3 text-xs text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors items-center',
        onClick && 'cursor-pointer'
      )}
      onClick={onClick}
    >
      {columns.map((column) => (
        <div
          key={String(column.key)}
          className={cn(
            'flex items-center min-w-0 break-words',
            column.width ? column.width : 'col-span-1'
          )}
        >
          {column.cell ? column.cell(item) : String(item[column.key] || '')}
        </div>
      ))}
    </div>
  )
}

export const DataTablePagination: React.FC<DataTablePaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className
}) => {
  return (
    <div className={cn('flex items-center justify-between text-xs', className)}>
      <div className="text-zinc-500 dark:text-zinc-400">
        Page <span className="font-semibold text-zinc-900 dark:text-zinc-100">{currentPage}</span> of{' '}
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">{totalPages}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          <span>Previous</span>
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <span>Next</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}

