import * as React from "react"
import { cn } from "../../lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  success?: boolean
  resize?: "none" | "vertical" | "horizontal" | "both"
  fullWidth?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, success, resize = "vertical", fullWidth = true, ...props }, ref) => {
    const state = error ? "error" : success ? "success" : "default"

    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-lg border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-2xs",
          state === "error" && "border-red-500 text-red-900 dark:text-red-100 focus-visible:border-red-500 focus-visible:ring-red-500/20",
          state === "success" && "border-emerald-500 text-emerald-900 dark:text-emerald-100 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20",
          state === "default" && "border-zinc-300 dark:border-zinc-700 focus-visible:border-blue-500 focus-visible:ring-blue-500/20",
          resize === "none" && "resize-none",
          resize === "vertical" && "resize-y",
          resize === "horizontal" && "resize-x",
          resize === "both" && "resize",
          !fullWidth && "w-auto",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
