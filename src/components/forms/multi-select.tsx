"use client"

import * as React from "react"
import { Check, ChevronDown, X } from "lucide-react"
import { cn } from "../../lib/utils"
import { Badge } from "../media/badge"
import { useClickOutside } from "../../lib/use-click-outside"
import { useControllableState } from "../../lib/use-controllable-state"

export interface MultiSelectOption {
  label: string
  value: string
  disabled?: boolean
  icon?: any
}

export interface MultiSelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  options: MultiSelectOption[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  placeholder?: string
  maxSelected?: number
  searchable?: boolean
  clearable?: boolean
  disabled?: boolean
  error?: boolean
  size?: "sm" | "default" | "lg"
}

export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      className,
      options = [],
      value: controlledValue,
      defaultValue = [],
      onChange,
      placeholder = "Select options...",
      maxSelected,
      searchable = true,
      clearable = true,
      disabled = false,
      error = false,
      size = "default",
      ...props
    },
    ref
  ) => {
    const [selected, setSelected] = useControllableState<string[]>({
      prop: controlledValue,
      defaultProp: defaultValue,
      onChange,
    })

    const [open, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState("")
    const listboxId = React.useId()
    const containerRef = React.useRef<HTMLDivElement>(null)
    const searchInputRef = React.useRef<HTMLInputElement>(null)

    useClickOutside(containerRef, () => setOpen(false))

    const filteredOptions = React.useMemo(() => {
      if (!search.trim()) return options
      const term = search.toLowerCase().trim()
      return options.filter((opt) => opt.label.toLowerCase().includes(term))
    }, [options, search])

    const isSelected = (val: string) => (selected ?? []).includes(val)

    const toggleOption = (val: string) => {
      if (disabled) return
      const current = selected ?? []
      if (current.includes(val)) {
        setSelected(current.filter((v) => v !== val))
      } else {
        if (maxSelected && current.length >= maxSelected) return
        setSelected([...current, val])
      }
    }

    const removeOption = (e: React.MouseEvent, val: string) => {
      e.stopPropagation()
      if (disabled) return
      setSelected((selected ?? []).filter((v) => v !== val))
    }

    const clearAll = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (disabled) return
      setSelected([])
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return
      if (e.key === "Escape") {
        setOpen(false)
      } else if (e.key === "Backspace" && search === "" && (selected ?? []).length > 0) {
        const current = selected ?? []
        setSelected(current.slice(0, -1))
      } else if (e.key === "ArrowDown" && !open) {
        e.preventDefault()
        setOpen(true)
      }
    }

    const sizeClasses = {
      sm: "min-h-[32px] text-xs px-2 py-1",
      default: "min-h-[36px] text-sm px-3 py-1.5",
      lg: "min-h-[42px] text-base px-3.5 py-2",
    }[size]

    return (
      <div
        ref={containerRef}
        onKeyDown={handleKeyDown}
        className={cn("relative w-full", className)}
        {...props}
      >
        <div
          ref={ref}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={open ? listboxId : undefined}
          aria-label={props["aria-label"] || placeholder || "Select options"}
          tabIndex={disabled ? -1 : 0}
          onClick={() => {
            if (!disabled) {
              setOpen((prev) => !prev)
              if (!open) {
                setTimeout(() => searchInputRef.current?.focus(), 50)
              }
            }
          }}
          className={cn(
            "flex w-full flex-wrap items-center gap-1.5 rounded-lg border bg-background ring-offset-background transition-all shadow-2xs cursor-pointer select-none",
            error
              ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-2 focus-visible:ring-red-500/20"
              : "border-zinc-300 dark:border-zinc-700 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20",
            disabled && "cursor-not-allowed opacity-50 bg-zinc-50 dark:bg-zinc-900",
            sizeClasses
          )}
        >
          {(selected ?? []).length === 0 ? (
            <span className="text-zinc-400 dark:text-zinc-500">{placeholder}</span>
          ) : (
            (selected ?? []).map((val) => {
              const opt = options.find((o) => o.value === val)
              const label = opt ? opt.label : val
              return (
                <Badge
                  key={val}
                  variant="secondary"
                  className="flex items-center gap-1 font-normal py-0.5 px-2 text-xs"
                >
                  {label}
                  <button
                    type="button"
                    onClick={(e) => removeOption(e, val)}
                    aria-label={`Remove ${label}`}
                    className="ml-0.5 rounded-full p-0.5 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-zinc-200"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )
            })
          )}

          <div className="ml-auto flex items-center gap-1 text-zinc-400">
            {clearable && (selected ?? []).length > 0 && !disabled && (
              <button
                type="button"
                onClick={clearAll}
                aria-label="Clear all options"
                className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
            <ChevronDown
              className={cn("h-4 w-4 transition-transform duration-150", open && "rotate-180")}
            />
          </div>
        </div>

        {open && (
          <div
            className="absolute left-0 right-0 top-[calc(100%+4px)] z-50 max-h-60 overflow-hidden flex flex-col rounded-lg border border-zinc-200 bg-popover p-1 text-popover-foreground shadow-lg dark:border-zinc-800 animate-in fade-in-0 zoom-in-95"
          >
            {searchable && (
              <div className="p-1 border-b border-zinc-100 dark:border-zinc-800 mb-1">
                <input
                  ref={searchInputRef}
                  type="text"
                  aria-label="Search options"
                  placeholder="Search options..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full bg-transparent px-2 py-1 text-xs outline-none placeholder:text-zinc-400"
                />
              </div>
            )}

            <div
              id={listboxId}
              role="listbox"
              aria-label={props["aria-label"] || "Options"}
              aria-multiselectable="true"
              className="overflow-auto max-h-48"
            >
              {filteredOptions.length === 0 ? (
                <div className="py-4 text-center text-xs text-zinc-500">No options found.</div>
              ) : (
                filteredOptions.map((opt) => {
                  const checked = isSelected(opt.value)
                  return (
                    <div
                      key={opt.value}
                      role="option"
                      aria-selected={checked}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (!opt.disabled) toggleOption(opt.value)
                      }}
                      className={cn(
                        "flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs transition-colors cursor-pointer select-none",
                        checked
                          ? "bg-blue-50 text-blue-900 font-medium dark:bg-blue-950/50 dark:text-blue-100"
                          : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200",
                        opt.disabled && "cursor-not-allowed opacity-50"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {opt.icon && <span className="text-zinc-500">{opt.icon}</span>}
                        {opt.label}
                      </span>
                      {checked && <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />}
                    </div>
                  )
                })
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
)

MultiSelect.displayName = "MultiSelect"
