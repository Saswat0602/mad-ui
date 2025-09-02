import React from 'react'
import { cn } from '../lib/utils'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  showPageNumbers?: boolean
  showFirstLast?: boolean
  showPrevNext?: boolean
}

export interface PaginationItemProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  active?: boolean
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  showPageNumbers = true,
  showFirstLast = true,
  showPrevNext = true
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

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page)
    }
  }

  return (
    <nav className={cn('flex items-center space-x-1', className)}>
      {showFirstLast && (
        <PaginationItem
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </PaginationItem>
      )}

      {showPrevNext && (
        <PaginationItem
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </PaginationItem>
      )}

      {showPageNumbers && getVisiblePages().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-3 py-2 text-sm text-muted-foreground">...</span>
          ) : (
            <PaginationItem
              onClick={() => handlePageChange(page as number)}
              active={page === currentPage}
            >
              {page}
            </PaginationItem>
          )}
        </React.Fragment>
      ))}

      {showPrevNext && (
        <PaginationItem
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </PaginationItem>
      )}

      {showFirstLast && (
        <PaginationItem
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7m-8 0l7-7-7-7" />
          </svg>
        </PaginationItem>
      )}
    </nav>
  )
}

export const PaginationItem: React.FC<PaginationItemProps> = ({
  children,
  className,
  onClick,
  disabled = false,
  active = false
}) => {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-9 min-w-9 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        active
          ? 'bg-primary text-primary-foreground'
          : 'hover:bg-accent hover:text-accent-foreground',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
