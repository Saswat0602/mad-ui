import React, { useState, useMemo } from 'react'
import { cn } from '../lib/utils'

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

  const totalPages = Math.ceil(filteredData.length / pageSize)

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
    <div className={cn('w-full', className)}>
      {searchable && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>
      )}

      <div className="border rounded-md">
        <DataTableHeader
          columns={columns}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSort={handleSort}
          sortable={sortable}
        />
        <div className="divide-y">
          {paginatedData.map((item, index) => (
            <DataTableRow
              key={index}
              item={item}
              columns={columns}
              onClick={onRowClick ? () => onRowClick(item) : undefined}
            />
          ))}
        </div>
      </div>

      {pagination && totalPages > 1 && (
        <DataTablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-4"
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
    <div className="bg-muted/50">
      <div className="grid grid-cols-12 gap-4 px-4 py-3 text-left text-sm font-medium text-muted-foreground">
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
                className="flex items-center space-x-1 hover:text-foreground transition-colors"
              >
                <span>{column.header}</span>
                {sortColumn === column.key && (
                  <svg
                    className={cn(
                      'h-4 w-4 transition-transform',
                      sortDirection === 'desc' && 'rotate-180'
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
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
        'grid grid-cols-12 gap-4 px-4 py-3 text-sm hover:bg-muted/50 transition-colors',
        onClick && 'cursor-pointer'
      )}
      onClick={onClick}
    >
      {columns.map((column) => (
        <div
          key={String(column.key)}
          className={cn(
            'flex items-center',
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
  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </div>
      <div className="flex items-center space-x-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm border rounded hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        {getVisiblePages().map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-3 py-1 text-sm text-muted-foreground">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={cn(
                  'px-3 py-1 text-sm border rounded hover:bg-accent hover:text-accent-foreground',
                  currentPage === page && 'bg-primary text-primary-foreground'
                )}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-sm border rounded hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  )
}
