import React from 'react'
import { cn } from '../../lib/utils'
import { Search } from 'lucide-react'

export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export interface CommandInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

export interface CommandListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export interface CommandEmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export interface CommandGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  heading?: string
  className?: string
}

export interface CommandItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  onSelect?: () => void
  disabled?: boolean
  className?: string
}

export interface CommandSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn('flex h-full w-full flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-md', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Command.displayName = 'Command'

export const CommandInput = React.forwardRef<HTMLInputElement, CommandInputProps>(
  ({ placeholder = 'Type a command or search...', value, onValueChange, className, ...props }, ref) => {
    return (
      <div className="flex items-center border-b border-zinc-200/80 dark:border-zinc-800/80 px-3.5">
        <Search className="mr-2.5 h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-500" />
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onValueChange?.(e.target.value)}
          className={cn(
            'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...props}
        />
      </div>
    )
  }
)
CommandInput.displayName = 'CommandInput'

export const CommandList = React.forwardRef<HTMLDivElement, CommandListProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden p-1', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CommandList.displayName = 'CommandList'

export const CommandEmpty = React.forwardRef<HTMLDivElement, CommandEmptyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn('py-6 text-center text-xs text-muted-foreground', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CommandEmpty.displayName = 'CommandEmpty'

export const CommandGroup = React.forwardRef<HTMLDivElement, CommandGroupProps>(
  ({ children, heading, className, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn('overflow-hidden p-1 text-foreground', className)}
        {...props}
      >
        {heading && (
          <div className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {heading}
          </div>
        )}
        {children}
      </div>
    )
  }
)
CommandGroup.displayName = 'CommandGroup'

export const CommandItem = React.forwardRef<HTMLDivElement, CommandItemProps>(
  ({ children, onSelect, disabled = false, className, ...props }, ref) => {
    const handleSelect = () => {
      if (!disabled && onSelect) {
        onSelect()
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleSelect()
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex cursor-pointer select-none items-center rounded-lg px-2.5 py-1.5 text-xs font-medium outline-none transition-colors',
          disabled
            ? 'pointer-events-none opacity-50'
            : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-50',
          className
        )}
        onClick={handleSelect}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CommandItem.displayName = 'CommandItem'

export const CommandSeparator = React.forwardRef<HTMLDivElement, CommandSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn('-mx-1 my-1 h-px bg-zinc-200/80 dark:bg-zinc-800/80', className)} 
        {...props}
      />
    )
  }
)
import * as DialogPrimitive from '@radix-ui/react-dialog'

export interface CommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const CommandShortcut: React.FC<CommandShortcutProps> = ({ className, ...props }) => {
  return (
    <span
      className={cn('ml-auto text-[11px] font-medium tracking-widest text-zinc-400 dark:text-zinc-500', className)}
      {...props}
    />
  )
}
CommandShortcut.displayName = 'CommandShortcut'

export interface CommandDialogProps extends DialogPrimitive.DialogProps {
  children: React.ReactNode
  className?: string
}

export const CommandDialog: React.FC<CommandDialogProps> = ({ children, className, ...props }) => {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] p-0">
          <Command className={cn('border-none shadow-none', className)}>
            {children}
          </Command>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
CommandDialog.displayName = 'CommandDialog'

export default Command

