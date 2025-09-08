import React from 'react'
import { Badge } from 'mad-ui-components'

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
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="text-4xl mb-4">📝</div>
        <h3 className="text-lg font-semibold mb-2">No Props Available</h3>
        <p className="text-muted-foreground">
          This component doesn&apos;t have any configurable props, or they haven&apos;t been documented yet.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            {props.length} {props.length === 1 ? 'prop' : 'props'}
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50 dark:bg-muted/30">
                <th className="text-left px-4 py-3 text-sm font-semibold text-foreground w-1/4">
                  Prop
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-foreground w-1/4">
                  Type
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-foreground w-1/6">
                  Default
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop, index) => (
                <tr 
                  key={prop.name} 
                  className={`border-b border-border/40 hover:bg-muted/30 transition-colors ${
                    index === props.length - 1 ? 'border-b-0' : ''
                  } ${index % 2 === 0 ? 'bg-background/50' : 'bg-muted/10'}`}
                >
                  <td className="px-4 py-3 align-top">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <code className="text-sm bg-primary/15 dark:bg-primary/10 text-primary px-2 py-1 rounded font-mono font-semibold border border-primary/20">
                          {prop.name}
                        </code>
                        {prop.required && (
                          <Badge variant="destructive" className="text-xs font-medium">
                            required
                          </Badge>
                        )}
                        {prop.deprecated && (
                          <Badge variant="outline" className="text-xs font-medium">
                            deprecated
                          </Badge>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <code className="text-sm text-muted-foreground bg-muted/60 dark:bg-muted/50 px-2 py-1 rounded font-mono break-all border border-border/30">
                      {prop.type}
                    </code>
                  </td>
                  <td className="px-4 py-3 align-top">
                    {prop.default !== undefined ? (
                      <code className="text-sm bg-muted/60 dark:bg-muted/50 text-foreground px-2 py-1 rounded font-mono border border-border/30">
                        {String(prop.default)}
                      </code>
                    ) : (
                      <span className="text-muted-foreground text-sm font-medium">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 align-top">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prop.description}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
