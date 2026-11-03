import * as React from 'react'
import { cn } from '../../lib/utils'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from '../../icons'

export interface PaginationProps extends React.ComponentProps<'nav'> {
  currentPage?: number
  totalPages?: number
  onPageChange?: (page: number) => void
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
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className,
  showPageNumbers = true,
  showFirstLast = true,
  showPrevNext = true,
  children,
  ...props
}) => {
  // If children are passed, render standard declarative nav wrapper
  if (children) {
    return (
      <nav
        role="navigation"
        aria-label="pagination"
        className={cn('mx-auto flex w-full justify-center', className)}
        {...props}
      >
        {children}
      </nav>
    )
  }

  const getVisiblePages = () => {
    const delta = 2
    const range: number[] = []
    const rangeWithDots: (number | string)[] = []

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
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page)
    }
  }

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('flex items-center space-x-1', className)}
      {...props}
    >
      {showFirstLast && (
        <PaginationItem
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          aria-label="First page"
        >
          <ChevronsLeft className="h-4 w-4" />
        </PaginationItem>
      )}

      {showPrevNext && (
        <PaginationItem
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </PaginationItem>
      )}

      {showPageNumbers && getVisiblePages().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="flex h-9 w-9 items-center justify-center text-muted-foreground">
              <MoreHorizontal className="h-4 w-4" />
            </span>
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
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </PaginationItem>
      )}

      {showFirstLast && (
        <PaginationItem
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last page"
        >
          <ChevronsRight className="h-4 w-4" />
        </PaginationItem>
      )}
    </nav>
  )
}

export const PaginationItem: React.FC<PaginationItemProps & React.ComponentProps<'button'>> = ({
  children,
  className,
  onClick,
  disabled = false,
  active = false,
  ...props
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex h-9 min-w-9 items-center justify-center rounded-lg text-xs font-medium transition-colors cursor-pointer select-none',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        'disabled:pointer-events-none disabled:opacity-40',
        active
          ? 'bg-primary text-primary-foreground font-semibold shadow-xs'
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-border/60',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1 list-none p-0 m-0', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

export interface PaginationLinkProps extends React.ComponentProps<'button'> {
  isActive?: boolean
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export const PaginationLink = React.forwardRef<HTMLButtonElement, PaginationLinkProps>(
  ({ className, isActive, size = 'icon', children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'inline-flex items-center justify-center rounded-lg text-xs font-medium transition-colors cursor-pointer select-none',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        size === 'icon' && 'h-9 w-9',
        size === 'default' && 'h-9 px-3',
        size === 'sm' && 'h-8 px-2.5 text-xs',
        size === 'lg' && 'h-10 px-4 text-sm',
        isActive
          ? 'bg-primary text-primary-foreground font-semibold shadow-xs'
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-border/60',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
)
PaginationLink.displayName = 'PaginationLink'

export const PaginationPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label="Go to previous page"
    className={cn(
      'inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-3 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer border border-border/60 select-none',
      className
    )}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>{children ?? 'Previous'}</span>
  </button>
))
PaginationPrevious.displayName = 'PaginationPrevious'

export const PaginationNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label="Go to next page"
    className={cn(
      'inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-3 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer border border-border/60 select-none',
      className
    )}
    {...props}
  >
    <span>{children ?? 'Next'}</span>
    <ChevronRight className="h-4 w-4" />
  </button>
))
PaginationNext.displayName = 'PaginationNext'

export const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center text-muted-foreground', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

// Attach compound subcomponents to Pagination
;(Pagination as any).Content = PaginationContent
;(Pagination as any).Item = PaginationItem
;(Pagination as any).Link = PaginationLink
;(Pagination as any).Previous = PaginationPrevious
;(Pagination as any).Next = PaginationNext
;(Pagination as any).Ellipsis = PaginationEllipsis

export default Pagination
