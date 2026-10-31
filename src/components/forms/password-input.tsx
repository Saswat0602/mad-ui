"use client"

import * as React from "react"
import { Eye, EyeOff, ArrowUpFromLine } from "lucide-react"
import { cn } from "../../lib/utils"
import { Input, type InputProps } from "../core/input"

export interface PasswordInputProps extends Omit<InputProps, "type"> {
  showToggle?: boolean
  strengthMeter?: boolean
  strengthScore?: number // 0 to 4
  onVisibilityChange?: (visible: boolean) => void
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      className,
      showToggle = true,
      strengthMeter = false,
      strengthScore = 0,
      onVisibilityChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(false)
    const [capsLockActive, setCapsLockActive] = React.useState(false)

    const toggleVisibility = React.useCallback(() => {
      setVisible((prev) => {
        const next = !prev
        onVisibilityChange?.(next)
        return next
      })
    }, [onVisibilityChange])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.getModifierState) {
        setCapsLockActive(e.getModifierState("CapsLock"))
      }
      props.onKeyDown?.(e)
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.getModifierState) {
        setCapsLockActive(e.getModifierState("CapsLock"))
      }
      props.onKeyUp?.(e)
    }

    // Normalized strength colors
    const getStrengthColor = (score: number, index: number) => {
      if (index >= score) return "bg-zinc-200 dark:bg-zinc-800"
      if (score <= 1) return "bg-red-500"
      if (score === 2) return "bg-amber-500"
      if (score === 3) return "bg-blue-500"
      return "bg-emerald-500"
    }

    const getStrengthLabel = (score: number) => {
      if (score === 0) return ""
      if (score === 1) return "Weak"
      if (score === 2) return "Fair"
      if (score === 3) return "Good"
      return "Strong"
    }

    return (
      <div className="w-full space-y-1.5">
        <div className="relative">
          <Input
            ref={ref}
            type={visible ? "text" : "password"}
            disabled={disabled}
            className={cn(showToggle && "pr-10", className)}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            {...props}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-zinc-400">
            {capsLockActive && (
              <span
                title="Caps Lock is active"
                className="flex items-center text-amber-500 dark:text-amber-400 p-1 rounded"
              >
                <ArrowUpFromLine className="h-4 w-4" />
                <span className="sr-only">Caps Lock is active</span>
              </span>
            )}
            {showToggle && (
              <button
                type="button"
                onClick={toggleVisibility}
                disabled={disabled}
                aria-label={visible ? "Hide password" : "Show password"}
                className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              >
                {visible ? (
                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Eye className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            )}
          </div>
        </div>

        {strengthMeter && (
          <div className="space-y-1">
            <div className="grid grid-cols-4 gap-1 h-1.5 w-full">
              {[0, 1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className={cn(
                    "rounded-full transition-colors duration-200",
                    getStrengthColor(strengthScore, idx)
                  )}
                />
              ))}
            </div>
            {strengthScore > 0 && (
              <p className="text-xs text-muted-foreground text-right font-medium">
                {getStrengthLabel(strengthScore)}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)

PasswordInput.displayName = "PasswordInput"
