"use client"

import * as React from "react"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "../../lib/utils"
import { useClickOutside } from "../../lib/use-click-outside"
import { useControllableState } from "../../lib/use-controllable-state"

export interface DateRange {
  from?: Date
  to?: Date
}

export interface DateRangePreset {
  label: string
  getRange: () => DateRange
}

export interface DateRangePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  value?: DateRange
  defaultValue?: DateRange
  onChange?: (range: DateRange) => void
  placeholder?: string
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  error?: boolean
  presets?: DateRangePreset[]
  formatDate?: (date: Date) => string
}

const DEFAULT_PRESETS: DateRangePreset[] = [
  {
    label: "Today",
    getRange: () => {
      const now = new Date()
      return { from: now, to: now }
    },
  },
  {
    label: "Last 7 Days",
    getRange: () => {
      const to = new Date()
      const from = new Date()
      from.setDate(to.getDate() - 6)
      return { from, to }
    },
  },
  {
    label: "Last 30 Days",
    getRange: () => {
      const to = new Date()
      const from = new Date()
      from.setDate(to.getDate() - 29)
      return { from, to }
    },
  },
  {
    label: "This Month",
    getRange: () => {
      const now = new Date()
      const from = new Date(now.getFullYear(), now.getMonth(), 1)
      const to = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      return { from, to }
    },
  },
]

export const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue,
      onChange,
      placeholder = "Pick a date range",
      minDate,
      maxDate,
      disabled = false,
      error = false,
      presets = DEFAULT_PRESETS,
      formatDate,
      ...props
    },
    ref
  ) => {
    const [range, setRange] = useControllableState<DateRange>({
      prop: controlledValue,
      defaultProp: defaultValue ?? {},
      onChange,
    })

    const [open, setOpen] = React.useState(false)
    const [viewDate, setViewDate] = React.useState<Date>(() => range?.from ?? new Date())
    const containerRef = React.useRef<HTMLDivElement>(null)

    useClickOutside(containerRef, () => setOpen(false))

    const defaultFormat = (d: Date) =>
      d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

    const formatFn = formatDate ?? defaultFormat

    const formattedLabel = React.useMemo(() => {
      if (range?.from && range?.to) {
        return `${formatFn(range.from)} – ${formatFn(range.to)}`
      }
      if (range?.from) {
        return `${formatFn(range.from)} – ...`
      }
      return placeholder
    }, [range, formatFn, placeholder])

    const isSameDay = (d1?: Date, d2?: Date) => {
      if (!d1 || !d2) return false
      return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
      )
    }

    const isBetween = (d: Date, start?: Date, end?: Date) => {
      if (!start || !end) return false
      const time = d.getTime()
      return time > start.getTime() && time < end.getTime()
    }

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
    const firstDayIndex = (year: number, month: number) => new Date(year, month, 1).getDay()

    const handleSelectDay = (day: number) => {
      const selectedDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)

      if (!range?.from || (range.from && range.to)) {
        // Start new range selection
        setRange({ from: selectedDate, to: undefined })
      } else {
        // Complete range selection
        if (selectedDate.getTime() < range.from.getTime()) {
          setRange({ from: selectedDate, to: range.from })
        } else {
          setRange({ from: range.from, to: selectedDate })
        }
        setOpen(false)
      }
    }

    const prevMonth = () => {
      setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
    }

    const nextMonth = () => {
      setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
    }

    const clearRange = (e: React.MouseEvent) => {
      e.stopPropagation()
      setRange({ from: undefined, to: undefined })
    }

    const monthName = viewDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })
    const totalDays = daysInMonth(viewDate.getFullYear(), viewDate.getMonth())
    const startingBlankDays = firstDayIndex(viewDate.getFullYear(), viewDate.getMonth())

    return (
      <div
        ref={containerRef}
        className={cn("relative inline-block w-full", className)}
        {...props}
      >
        <button
          ref={ref as any}
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="dialog"
          className={cn(
            "flex h-9 w-full items-center justify-between rounded-lg border bg-background px-3 py-1.5 text-sm ring-offset-background transition-all shadow-2xs cursor-pointer select-none",
            error
              ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-2 focus-visible:ring-red-500/20"
              : "border-zinc-300 dark:border-zinc-700 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20",
            disabled && "cursor-not-allowed opacity-50 bg-zinc-50 dark:bg-zinc-900",
            !range?.from && "text-muted-foreground"
          )}
        >
          <span className="flex items-center gap-2 truncate">
            <CalendarIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span>{formattedLabel}</span>
          </span>

          <span className="flex items-center gap-1">
            {range?.from && !disabled && (
              <span
                role="button"
                onClick={clearRange}
                aria-label="Clear date range"
                className="p-0.5 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
              >
                <X className="h-3.5 w-3.5" />
              </span>
            )}
          </span>
        </button>

        {open && (
          <div
            role="dialog"
            aria-label="Date range calendar"
            className="absolute left-0 top-[calc(100%+6px)] z-50 flex flex-col sm:flex-row gap-3 rounded-xl border border-zinc-200 bg-popover p-4 text-popover-foreground shadow-xl dark:border-zinc-800 animate-in fade-in-0 zoom-in-95"
          >
            {presets && presets.length > 0 && (
              <div className="flex sm:flex-col gap-1 border-b sm:border-b-0 sm:border-r border-zinc-100 dark:border-zinc-800 pb-3 sm:pb-0 sm:pr-3">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      setRange(preset.getRange())
                      setOpen(false)
                    }}
                    className="rounded-md px-2.5 py-1.5 text-left text-xs font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            )}

            <div className="w-64 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">{monthName}</span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={prevMonth}
                    aria-label="Previous month"
                    className="p-1 rounded text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextMonth}
                    aria-label="Next month"
                    className="p-1 rounded text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-zinc-400">
                <span>Su</span>
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
              </div>

              <div className="grid grid-cols-7 gap-y-1 text-center text-xs">
                {Array.from({ length: startingBlankDays }).map((_, i) => (
                  <div key={`blank-${i}`} />
                ))}
                {Array.from({ length: totalDays }).map((_, i) => {
                  const day = i + 1
                  const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
                  const isStart = isSameDay(date, range?.from)
                  const isEnd = isSameDay(date, range?.to)
                  const inBetween = isBetween(date, range?.from, range?.to)
                  const isSelectable =
                    (!minDate || date >= minDate) && (!maxDate || date <= maxDate)

                  return (
                    <button
                      key={`day-${day}`}
                      type="button"
                      disabled={!isSelectable}
                      onClick={() => isSelectable && handleSelectDay(day)}
                      className={cn(
                        "h-8 w-8 text-xs font-medium transition-colors flex items-center justify-center cursor-pointer",
                        isStart && "rounded-l-md bg-blue-600 text-white font-semibold",
                        isEnd && "rounded-r-md bg-blue-600 text-white font-semibold",
                        isStart && isEnd && "rounded-md",
                        inBetween && "bg-blue-50 text-blue-900 dark:bg-blue-950/60 dark:text-blue-100",
                        !isStart && !isEnd && !inBetween && "rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200",
                        !isSelectable && "opacity-30 cursor-not-allowed pointer-events-none"
                      )}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
)

DateRangePicker.displayName = "DateRangePicker"
