import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../lib/utils'

export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

export interface ComboboxProps {
  options: ComboboxOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  searchable?: boolean
}

export const Combobox: React.FC<ComboboxProps> = ({
  options,
  value,
  onValueChange,
  placeholder = 'Select an option...',
  className,
  disabled = false,
  searchable = true
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [selectedValue, setSelectedValue] = useState(value || '')
  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredOptions = searchable
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    : options

  const selectedOption = options.find(option => option.value === selectedValue)

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue)
    setSearchValue('')
    setIsOpen(false)
    onValueChange?.(optionValue)
  }

  const handleTriggerClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
      if (!isOpen && searchable) {
        setTimeout(() => inputRef.current?.focus(), 0)
      }
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setSearchValue('')
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  return (
    <div className={cn('relative', className)}>
      <div
        ref={triggerRef}
        className={cn(
          'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          isOpen && 'ring-2 ring-ring ring-offset-2'
        )}
        onClick={handleTriggerClick}
      >
        <div className="flex-1">
          {searchable && isOpen ? (
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={placeholder}
              className="w-full bg-transparent outline-none"
            />
          ) : (
            <span className={selectedOption ? 'text-foreground' : 'text-muted-foreground'}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          )}
        </div>
        <svg
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div
          ref={contentRef}
          className="absolute top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className={cn(
                  'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
                  option.value === selectedValue
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground',
                  option.disabled && 'pointer-events-none opacity-50'
                )}
                onClick={() => !option.disabled && handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="px-2 py-1.5 text-sm text-muted-foreground">
              No options found.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
