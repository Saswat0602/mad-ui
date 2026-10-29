"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "../../lib/utils"
import { ChevronsUpDown, Check, Search } from "lucide-react"

export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

export interface ComboboxProps {
  options: ComboboxOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  searchable?: boolean
}

export const Combobox: React.FC<ComboboxProps> = ({
  options = [],
  value,
  defaultValue = "",
  onValueChange,
  placeholder = "Select an option...",
  className,
  disabled = false,
  searchable = true,
}) => {
  const [open, setOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const isControlled = value !== undefined
  const selectedValue = isControlled ? value : internalValue

  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    : options

  const selectedOption = options.find((option) => option.value === selectedValue)

  const handleSelect = (optionValue: string) => {
    if (!isControlled) {
      setInternalValue(optionValue)
    }
    setSearchValue("")
    setOpen(false)
    onValueChange?.(optionValue)
  }

  React.useEffect(() => {
    if (open && searchable) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open, searchable])

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild disabled={disabled}>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "flex h-9 w-full items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 transition-colors shadow-2xs cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            disabled && "cursor-not-allowed opacity-50",
            className
          )}
        >
          <span className={cn("truncate", !selectedOption && "text-muted-foreground")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronsUpDown className="h-3.5 w-3.5 shrink-0 text-muted-foreground ml-2 opacity-60" />
        </button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={4}
          className="z-50 w-[var(--radix-popover-trigger-width)] min-w-[12rem] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-1 text-zinc-900 dark:text-zinc-100 shadow-xl duration-150 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2"
        >
          {searchable && (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-zinc-100 dark:border-zinc-800 mb-1">
              <Search className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
                className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
              />
            </div>
          )}

          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => {
                const isSelected = option.value === selectedValue

                return (
                  <button
                    key={option.value}
                    type="button"
                    disabled={option.disabled}
                    className={cn(
                      "relative flex w-full cursor-pointer select-none items-center justify-between rounded-lg px-2.5 py-1.5 text-xs outline-none transition-colors",
                      isSelected
                        ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-medium"
                        : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200",
                      option.disabled && "pointer-events-none opacity-40"
                    )}
                    onClick={() => handleSelect(option.value)}
                  >
                    <span className="truncate">{option.label}</span>
                    {isSelected && <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0 ml-2" />}
                  </button>
                )
              })
            ) : (
              <div className="px-3 py-2 text-center text-xs text-muted-foreground">
                No matching options.
              </div>
            )}
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

export default Combobox
