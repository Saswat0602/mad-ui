import * as React from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "../../lib/utils"

export interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  disabled?: boolean
  placeholder?: string
  children: React.ReactNode
  className?: string
}

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
}

export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  className?: string
  children: React.ReactNode
}

export interface SelectGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export interface SelectLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string
  className?: string
}

const SelectContext = React.createContext<{
  value?: string
  onValueChange?: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: false,
  setOpen: () => {}
})

const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  defaultValue,
  disabled = false,
  children,
  className
}) => {
  const [open, setOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState(defaultValue || "")

  const currentValue = value !== undefined ? value : internalValue

  const handleValueChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
    setOpen(false)
  }

  return (
    <SelectContext.Provider value={{ value: currentValue, onValueChange: handleValueChange, open, setOpen }}>
      <div className={cn("relative", className)}>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = React.useContext(SelectContext)

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "flex h-9 w-full items-center justify-between rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background px-3 py-1.5 text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-2xs",
          className
        )}
        onClick={() => setOpen(!open)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
    )
  }
)
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ placeholder, className, ...props }, ref) => {
    const { value } = React.useContext(SelectContext)

    return (
      <span
        ref={ref}
        className={cn("block truncate", !value && "text-muted-foreground", className)}
        {...props}
      >
        {value || placeholder}
      </span>
    )
  }
)
SelectValue.displayName = "SelectValue"

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = React.useContext(SelectContext)
    const contentRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
          setOpen(false)
        }
      }

      if (open) {
        document.addEventListener("mousedown", handleClickOutside)
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [open, setOpen])

    if (!open) return null

    return (
      <div
        ref={contentRef}
        className={cn(
          "absolute top-full left-0 z-50 w-full mt-1.5 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 p-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, ...props }, ref) => {
    const { value: selectedValue, onValueChange } = React.useContext(SelectContext)
    const isSelected = selectedValue === value

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-zinc-100 dark:hover:bg-zinc-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors",
          isSelected && "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-medium",
          className
        )}
        onClick={() => onValueChange?.(value)}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          {isSelected && <Check className="h-4 w-4" />}
        </span>
        {children}
      </div>
    )
  }
)
SelectItem.displayName = "SelectItem"

const SelectGroup = React.forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-1", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SelectGroup.displayName = "SelectGroup"

const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SelectLabel.displayName = "SelectLabel"

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel
}