import React from 'react'
import { Badge } from '../../../src/components/media/badge'

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

export function PropsTable({ props }: PropsTableProps) {
  if (props.length === 0) {
    return (
      <div className="text-sm text-muted-foreground">
        No props available for this component.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Prop</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Default</th>
            <th className="text-left p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b">
              <td className="p-2">
                <code className="text-xs bg-muted px-1 py-0.5 rounded">
                  {prop.name}
                </code>
                {prop.required && (
                  <Badge variant="destructive" className="ml-1 text-xs">
                    required
                  </Badge>
                )}
                {prop.deprecated && (
                  <Badge variant="outline" className="ml-1 text-xs">
                    deprecated
                  </Badge>
                )}
              </td>
              <td className="p-2">
                <code className="text-xs text-muted-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="p-2">
                {prop.default !== undefined ? (
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">
                    {String(prop.default)}
                  </code>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </td>
              <td className="p-2 text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
