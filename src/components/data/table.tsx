import * as React from "react"
import { cn } from "../../lib/utils"
import { componentColors } from "../../lib/colors"

export interface TableColumn<T> {
  key: keyof T
  header: string
  sortable?: boolean
  render?: (value: unknown, row: T) => React.ReactNode
  width?: string | number
  align?: "left" | "center" | "right"
  className?: string
}

export interface TableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[]
  columns: TableColumn<T>[]
  selectedRows?: string[]
  onSelectionChange?: (selectedRows: string[]) => void
  pagination?: {
    current: number
    total: number
    pageSize: number
    onChange: (page: number) => void
  }
  sortable?: boolean
  selectable?: boolean
  hoverable?: boolean
  striped?: boolean
  bordered?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outlined" | "elevated"
  color?: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  headerColor?: string
  borderRadius?: string | number
  shadow?: "none" | "sm" | "md" | "lg"
  fullWidth?: boolean
  emptyMessage?: string
  loading?: boolean
  onRowClick?: (row: T, index: number) => void
  rowKey?: keyof T | ((row: T, index: number) => string)
}

function Table<T extends Record<string, unknown>>({
  data,
  columns,
  selectedRows = [],
  onSelectionChange,
  pagination,
  sortable = true,
  selectable = false,
  hoverable = true,
  striped = false,
  bordered = false,
  size = "md",
  variant = "default",
  color,
  backgroundColor,
  borderColor,
  textColor,
  headerColor,
  borderRadius,
  shadow = "sm",
  fullWidth = true,
  emptyMessage = "No data available",
  loading = false,
  onRowClick,
  rowKey = "id",
  className,
  style,
  ...props
}: TableProps<T>) {
  const [sortColumn, setSortColumn] = React.useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc")

  // Size classes
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  }

  const paddingClasses = {
    sm: "py-2 px-3",
    md: "py-3 px-4",
    lg: "py-4 px-6"
  }

  // Shadow classes
  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }

  // Variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case "outlined":
        return {
          backgroundColor: backgroundColor || color || "var(--bg-card)",
          border: `1px solid ${borderColor || "var(--border-primary)"}`,
          borderRadius: borderRadius || "8px"
        }
      case "elevated":
        return {
          backgroundColor: backgroundColor || color || "var(--bg-card)",
          border: "none",
          borderRadius: borderRadius || "8px"
        }
      default:
        return {
          backgroundColor: backgroundColor || color || "var(--bg-card)",
          border: "none",
          borderRadius: borderRadius || "0"
        }
    }
  }

  // Custom styles
  const customStyles: React.CSSProperties = {
    color: textColor || "var(--text-primary)",
    ...getVariantStyles(),
    ...style
  }

  // Get row key
  const getRowKey = (row: T, index: number): string => {
    if (typeof rowKey === "function") {
      return rowKey(row, index)
    }
    return String(row[rowKey] || index)
  }

      // Handle sorting
    const handleSort = (column: keyof T) => {
      if (!sortable) return
      
      const columnConfig = columns.find(col => col.key === column)
      if (!columnConfig?.sortable) return

      if (sortColumn === column) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc")
      } else {
        setSortColumn(column)
        setSortDirection("asc")
      }
    }

  // Handle selection
  const handleSelectAll = (checked: boolean) => {
    if (!selectable || !onSelectionChange) return

    if (checked) {
      onSelectionChange(data.map((item: T) => getRowKey(item, 0)))
    } else {
      onSelectionChange([])
    }
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    if (!selectable || !onSelectionChange) return

    if (checked) {
      onSelectionChange([...selectedRows, id])
    } else {
      onSelectionChange(selectedRows.filter(rowId => rowId !== id))
    }
  }

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortColumn) return data

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn]
      const bValue = b[sortColumn]

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
      return 0
    })
  }, [data, sortColumn, sortDirection])

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div 
      className={cn(
        "overflow-x-auto",
        fullWidth && "w-full",
        className
      )}
      style={customStyles}
      {...props}
    >
      <table className="w-full">
        <thead>
          <tr 
            className={cn(
              "border-b",
              headerColor && "bg-gray-50 dark:bg-gray-800"
            )}
            style={{
              borderColor: borderColor || "var(--border-primary)"
            }}
          >
            {selectable && (
              <th 
                className={cn(
                  "w-12 text-left font-medium py-3 px-4",
                  sizeClasses[size]
                )}
                style={{
                  color: headerColor || "var(--text-secondary)"
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length && data.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  "text-left font-medium py-3 px-4",
                  sizeClasses[size],
                  column.sortable && sortable && "cursor-pointer hover:text-blue-600 transition-colors",
                  column.className
                )}
                style={{
                  color: headerColor || "var(--text-secondary)",
                  width: column.width,
                  textAlign: column.align || "left"
                }}
                onClick={() => column.sortable && sortable && handleSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  {column.header}
                  {column.sortable && sortable && sortColumn === column.key && (
                    <span className="text-blue-600">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 ? (
            <tr>
              <td 
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="text-center py-8 text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            sortedData.map((row, index) => (
              <tr
                key={getRowKey(row, index)}
                className={cn(
                  "border-b transition-colors duration-200",
                  hoverable && "hover:bg-gray-50 dark:hover:bg-gray-800",
                  striped && index % 2 === 1 && "bg-gray-50 dark:bg-gray-800",
                  onRowClick && "cursor-pointer"
                )}
                style={{
                  borderColor: borderColor || "var(--border-secondary)"
                }}
                onClick={() => onRowClick?.(row, index)}
              >
                {selectable && (
                  <td className={cn("w-12 py-3 px-4", paddingClasses[size])}>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(getRowKey(row, index))}
                      onChange={(e) => handleSelectRow(getRowKey(row, index), e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td 
                    key={String(column.key)} 
                    className={cn(
                      "py-3 px-4",
                      paddingClasses[size],
                      column.className
                    )}
                    style={{
                      textAlign: column.align || "left"
                    }}
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : String(row[column.key] || "")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {pagination && (
        <div 
          className="flex items-center justify-between px-4 py-3 border-t"
          style={{
            borderColor: borderColor || "var(--border-secondary)"
          }}
        >
          <div className={cn("text-gray-500", sizeClasses[size])}>
            Showing {((pagination.current - 1) * pagination.pageSize) + 1} to{" "}
            {Math.min(pagination.current * pagination.pageSize, pagination.total)} of{" "}
            {pagination.total} results
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => pagination.onChange(pagination.current - 1)}
              disabled={pagination.current === 1}
              className={cn(
                "px-3 py-1 text-sm border rounded transition-colors",
                "hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              )}
              style={{
                borderColor: borderColor || "var(--border-primary)"
              }}
            >
              Previous
            </button>
            <span className={cn("text-gray-500", sizeClasses[size])}>
              Page {pagination.current} of {Math.ceil(pagination.total / pagination.pageSize)}
            </span>
            <button
              onClick={() => pagination.onChange(pagination.current + 1)}
              disabled={pagination.current >= Math.ceil(pagination.total / pagination.pageSize)}
              className={cn(
                "px-3 py-1 text-sm border rounded transition-colors",
                "hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              )}
              style={{
                borderColor: borderColor || "var(--border-primary)"
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

Table.displayName = "Table"

export { Table }
