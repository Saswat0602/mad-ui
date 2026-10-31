"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { ChevronsUpDown, Check, Search } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "../layout/popover"

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
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-label={selectedOption ? selectedOption.label : placeholder}
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "flex h-9 w-full items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 transition-colors shadow-2xs cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            disabled && "cursor-not-allowed opacity-50",
            className
          )}
        >
          <span className={cn("truncate", !selectedOption && "text-zinc-400 dark:text-zinc-500")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronsUpDown className="h-3.5 w-3.5 shrink-0 text-zinc-400 ml-2 opacity-60" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        sideOffset={4}
        className="w-64 min-w-[12rem] p-1 shadow-xl"
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
              className="w-full bg-transparent text-xs outline-none placeholder:text-zinc-400"
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
            <div className="px-3 py-2 text-center text-xs text-zinc-400">
              No matching options.
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Combobox
