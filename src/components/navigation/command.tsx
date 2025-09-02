import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../../lib/utils'

export interface CommandProps {
  children: React.ReactNode
  className?: string
}

export interface CommandInputProps {
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

export interface CommandListProps {
  children: React.ReactNode
  className?: string
}

export interface CommandEmptyProps {
  children: React.ReactNode
  className?: string
}

export interface CommandGroupProps {
  children: React.ReactNode
  heading?: string
  className?: string
}

export interface CommandItemProps {
  children: React.ReactNode
  onSelect?: () => void
  disabled?: boolean
  className?: string
}

export interface CommandSeparatorProps {
  className?: string
}

export const Command: React.FC<CommandProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground', className)}>
      {children}
    </div>
  )
}

export const CommandInput: React.FC<CommandInputProps> = ({
  placeholder = 'Search...',
  value,
  onValueChange,
  className
}) => {
  return (
    <div className="flex items-center border-b px-3">
      <svg
        className="mr-2 h-4 w-4 shrink-0 opacity-50"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValueChange?.(e.target.value)}
        className={cn(
          'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
      />
    </div>
  )
}

export const CommandList: React.FC<CommandListProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}>
      {children}
    </div>
  )
}

export const CommandEmpty: React.FC<CommandEmptyProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('py-6 text-center text-sm', className)}>
      {children}
    </div>
  )
}

export const CommandGroup: React.FC<CommandGroupProps> = ({
  children,
  heading,
  className
}) => {
  return (
    <div className={cn('overflow-hidden p-1 text-foreground', className)}>
      {heading && (
        <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
          {heading}
        </div>
      )}
      {children}
    </div>
  )
}

export const CommandItem: React.FC<CommandItemProps> = ({
  children,
  onSelect,
  disabled = false,
  className
}) => {
  const handleSelect = () => {
    if (!disabled && onSelect) {
      onSelect()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSelect()
    }
  }

  return (
    <div
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
        disabled
          ? 'pointer-events-none opacity-50'
          : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        className
      )}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </div>
  )
}

export const CommandSeparator: React.FC<CommandSeparatorProps> = ({
  className
}) => {
  return (
    <div className={cn('-mx-1 my-1 h-px bg-muted', className)} />
  )
}
