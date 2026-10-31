"use client"

import * as React from "react"
import { ChevronRight, Wrench, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { cn } from "../../lib/utils"
import { useControllableState } from "../../lib/use-controllable-state"

export type ToolCallStatus = "pending" | "running" | "executing" | "success" | "completed" | "error" | "failed"

export interface ToolCallCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "name"> {
  name?: string
  toolName?: string
  status?: ToolCallStatus
  args?: Record<string, any> | string
  result?: any
  duration?: string | number
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export const ToolCallCard = React.forwardRef<HTMLDivElement, ToolCallCardProps>(
  (
    {
      className,
      name,
      toolName,
      status = "success",
      args,
      result,
      duration,
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      ...props
    },
    ref
  ) => {
    const displayName = toolName || name || "Tool Call"
    const normalizedStatus = 
      status === "completed" ? "success" : 
      status === "executing" ? "running" : 
      status === "failed" ? "error" : status
    const [open, setOpen] = useControllableState<boolean>({
      prop: controlledOpen,
      defaultProp: defaultOpen,
      onChange: onOpenChange,
    })

    const contentId = React.useId()

    const statusBadges = {
      pending: (
        <span className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          Pending
        </span>
      ),
      running: (
        <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
          <Loader2 className="h-3 w-3 animate-spin" />
          Running
        </span>
      ),
      success: (
        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
          <CheckCircle2 className="h-3 w-3" />
          Completed
        </span>
      ),
      error: (
        <span className="inline-flex items-center gap-1 rounded-md bg-rose-50 px-2 py-0.5 text-[11px] font-medium text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">
          <AlertCircle className="h-3 w-3" />
          Failed
        </span>
      ),
    }

    const formatPayload = (data: any): string => {
      if (typeof data === "string") return data
      try {
        return JSON.stringify(data, null, 2)
      } catch {
        return String(data)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-zinc-200/80 bg-card text-card-foreground shadow-2xs dark:border-zinc-800 transition-all",
          className
        )}
        {...props}
      >
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={contentId}
          className="flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-xs text-left cursor-pointer select-none"
        >
          <div className="flex items-center gap-2 min-w-0">
            <ChevronRight
              className={cn(
                "h-3.5 w-3.5 text-zinc-400 transition-transform duration-150 shrink-0",
                open && "rotate-90"
              )}
            />
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 shrink-0">
              <Wrench className="h-3.5 w-3.5" />
            </div>
            <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100 truncate">
              {displayName}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {duration && (
              <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                {typeof duration === "number" ? `${duration}ms` : duration}
              </span>
            )}
            {statusBadges[normalizedStatus]}
          </div>
        </button>

        {open && (
          <div
            id={contentId}
            className="border-t border-zinc-100 dark:border-zinc-800/80 px-4 py-3 text-xs flex flex-col gap-3 bg-zinc-50/50 dark:bg-zinc-950/40 rounded-b-xl"
          >
            {args !== undefined && (
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Arguments
                </span>
                <pre className="mt-1 overflow-x-auto rounded-lg border border-zinc-200/60 bg-zinc-100/60 p-2.5 font-mono text-[11px] text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
                  {formatPayload(args)}
                </pre>
              </div>
            )}

            {result !== undefined && (
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Result
                </span>
                <pre className="mt-1 max-h-48 overflow-auto rounded-lg border border-zinc-200/60 bg-zinc-100/60 p-2.5 font-mono text-[11px] text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
                  {formatPayload(result)}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
)

ToolCallCard.displayName = "ToolCallCard"
