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
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr className="border-b border-border">
              <th className="text-left p-4 font-semibold">Prop</th>
              <th className="text-left p-4 font-semibold">Type</th>
              <th className="text-left p-4 font-semibold">Default</th>
              <th className="text-left p-4 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, index) => (
              <tr key={prop.name} className={`border-b border-border ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                <td className="p-4">
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
                </td>
                <td className="p-4">
                  <code className="text-sm text-muted-foreground font-mono">
                    {prop.type}
                  </code>
                </td>
                <td className="p-4">
                  {prop.default !== undefined ? (
                    <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                      {String(prop.default)}
                    </code>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </td>
                <td className="p-4 text-muted-foreground">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
