"use client"

import * as React from "react"
import { ChevronRight, Brain, Sparkles } from "lucide-react"
import { cn } from "../../lib/utils"
import { useControllableState } from "../../lib/use-controllable-state"

export interface ReasoningDisclosureProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode
  summary?: React.ReactNode
  duration?: string | number
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  isStreaming?: boolean
}

export const ReasoningDisclosure = React.forwardRef<HTMLDivElement, ReasoningDisclosureProps>(
  (
    {
      className,
      title = "Reasoning Process",
      summary,
      duration,
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      isStreaming = false,
      children,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useControllableState<boolean>({
      prop: controlledOpen,
      defaultProp: defaultOpen,
      onChange: onOpenChange,
    })

    const contentId = React.useId()

    return (
      <div
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-zinc-200/80 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-900/40 transition-all",
          className
        )}
        {...props}
      >
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={contentId}
          className="flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-xs text-left cursor-pointer select-none"
        >
          <div className="flex items-center gap-2 min-w-0">
            <ChevronRight
              className={cn(
                "h-3.5 w-3.5 text-zinc-400 transition-transform duration-150 shrink-0",
                open && "rotate-90"
              )}
            />
            {isStreaming ? (
              <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 animate-spin shrink-0" />
            ) : (
              <Brain className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
            )}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate">
              {title}
            </span>

            {!open && summary && (
              <span className="text-zinc-500 dark:text-zinc-400 truncate hidden sm:inline">
                — {summary}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {isStreaming && (
              <span className="flex items-center gap-1 text-[11px] font-medium text-purple-600 dark:text-purple-400">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400 animate-ping" />
                Thinking...
              </span>
            )}
            {duration && (
              <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                {typeof duration === "number" ? `${duration}s` : duration}
              </span>
            )}
          </div>
        </button>

        {open && (
          <div
            id={contentId}
            className="border-t border-zinc-200/60 dark:border-zinc-800/80 px-4 py-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 font-mono bg-zinc-100/40 dark:bg-zinc-950/40 rounded-b-xl whitespace-pre-wrap break-words"
          >
            {children}
          </div>
        )}
      </div>
    )
  }
)

ReasoningDisclosure.displayName = "ReasoningDisclosure"
