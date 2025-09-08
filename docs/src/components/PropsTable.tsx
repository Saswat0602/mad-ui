import React from 'react'
import { Badge, Table } from 'mad-ui-components'

// Define the TableColumn type locally since it's not exported
interface TableColumn<T> {
  key: keyof T
  header: string
  sortable?: boolean
  render?: (value: unknown, row: T) => React.ReactNode
  width?: string | number
  align?: "left" | "center" | "right"
  className?: string
}

interface ComponentProp {
  name: string
  type: string
  required: boolean
  default?: string | number | boolean
  description: string
  deprecated?: boolean
}

interface PropsTableProps {
  props: ComponentProp[]
}

type TableData = {
  prop: React.ReactNode
  type: React.ReactNode
  default: React.ReactNode
  description: React.ReactNode
}

export function PropsTable({ props }: PropsTableProps) {
  if (props.length === 0) {
    return (
      <div className="text-sm text-muted-foreground">
        No props available for this component.
      </div>
    )
  }

  const tableData: TableData[] = props.map((prop) => ({
    prop: (
      <div className="flex items-center gap-2">
        <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
          {prop.name}
        </code>
        {prop.required && (
          <Badge variant="destructive" className="text-xs">
            required
          </Badge>
        )}
        {prop.deprecated && (
          <Badge variant="outline" className="text-xs">
            deprecated
          </Badge>
        )}
      </div>
    ),
    type: (
      <code className="text-sm text-muted-foreground font-mono">
        {prop.type}
      </code>
    ),
    default: prop.default !== undefined ? (
      <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
        {String(prop.default)}
      </code>
    ) : (
      <span className="text-muted-foreground">-</span>
    ),
    description: (
      <span className="text-muted-foreground">
        {prop.description}
      </span>
    )
  }))

  const columns: TableColumn<TableData>[] = [
    { key: 'prop', header: 'Prop' },
    { key: 'type', header: 'Type' },
    { key: 'default', header: 'Default' },
    { key: 'description', header: 'Description' }
  ]

  return (
    <Table
      data={tableData}
      columns={columns}
      variant="default"
      size="md"
      striped={true}
      hoverable={true}
    />
  )
}
