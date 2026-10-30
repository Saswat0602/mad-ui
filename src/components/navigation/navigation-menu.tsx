"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"
import { Slot } from "../../lib/slot"
import { useId } from "../../hooks/use-id"
import { useClickOutside } from "../../hooks/use-click-outside"
import { useControllableState } from "../../hooks/use-controllable-state"

interface NavigationMenuContextValue {
  value: string | null
  setValue: (value: string | null) => void
  onItemMouseEnter: (value: string) => void
  onItemMouseLeave: () => void
  closeMenu: () => void
}

const NavigationMenuContext = React.createContext<NavigationMenuContextValue | null>(null)

function useNavigationMenuContext() {
  const context = React.useContext(NavigationMenuContext)
  if (!context) {
    throw new Error("NavigationMenu compound components must be used within a NavigationMenu")
  }
  return context
}

interface NavigationMenuItemContextValue {
  value: string
  isOpen: boolean
  triggerId: string
  contentId: string
  toggle: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const NavigationMenuItemContext = React.createContext<NavigationMenuItemContextValue | null>(null)

function useNavigationMenuItemContext() {
  const context = React.useContext(NavigationMenuItemContext)
  if (!context) {
    throw new Error("NavigationMenuTrigger and NavigationMenuContent must be used within a NavigationMenuItem")
  }
  return context
}

export const navigationMenuTriggerStyle = () =>
  cn(
    "group inline-flex h-9 w-max items-center justify-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer",
    "text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100",
    "focus:outline-none focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-zinc-100",
    "disabled:pointer-events-none disabled:opacity-50"
  )

export interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  delayDuration?: number
}

export const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onValueChange,
      delayDuration = 150,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useControllableState<string | null>({
      prop: controlledValue,
      defaultProp: defaultValue ?? null,
      onChange: (next) => onValueChange?.(next ?? ""),
    })

    const navRef = React.useRef<HTMLElement | null>(null)
    const timeoutRef = React.useRef<any>(null)

    const clearTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    const onItemMouseEnter = (itemValue: string) => {
      clearTimer()
      setValue(itemValue)
    }

    const onItemMouseLeave = () => {
      clearTimer()
      timeoutRef.current = setTimeout(() => {
        setValue(null)
      }, delayDuration)
    }

    const closeMenu = () => {
      clearTimer()
      setValue(null)
    }

    useClickOutside(navRef, closeMenu, value !== null)

    React.useEffect(() => {
      if (value === null) return
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault()
          closeMenu()
        }
      }
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [value])

    React.useEffect(() => {
      return () => clearTimer()
    }, [])

    return (
      <NavigationMenuContext.Provider
        value={{
          value,
          setValue,
          onItemMouseEnter,
          onItemMouseLeave,
          closeMenu,
        }}
      >
        <nav
          ref={(node) => {
            navRef.current = node
            if (typeof ref === "function") ref(node)
            else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node
          }}
          className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
          {...props}
        >
          {children}
        </nav>
      </NavigationMenuContext.Provider>
    )
  }
)
NavigationMenu.displayName = "NavigationMenu"

export interface NavigationMenuListProps extends React.HTMLAttributes<HTMLUListElement> {}

export const NavigationMenuList = React.forwardRef<HTMLUListElement, NavigationMenuListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
        {...props}
      >
        {children}
      </ul>
    )
  }
)
NavigationMenuList.displayName = "NavigationMenuList"

export interface NavigationMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  value?: string
}

export const NavigationMenuItem = React.forwardRef<HTMLLIElement, NavigationMenuItemProps>(
  ({ value: explicitValue, className, children, ...props }, ref) => {
    const generatedId = useId()
    const value = explicitValue ?? generatedId
    const { value: activeValue, onItemMouseEnter, onItemMouseLeave, setValue } = useNavigationMenuContext()
    const isOpen = activeValue === value
    const triggerId = `${value}-trigger`
    const contentId = `${value}-content`

    const toggle = () => {
      setValue(isOpen ? null : value)
    }

    const onMouseEnter = () => onItemMouseEnter(value)
    const onMouseLeave = () => onItemMouseLeave()

    return (
      <NavigationMenuItemContext.Provider
        value={{
          value,
          isOpen,
          triggerId,
          contentId,
          toggle,
          onMouseEnter,
          onMouseLeave,
        }}
      >
        <li
          ref={ref}
          className={cn("relative", className)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          {...props}
        >
          {children}
        </li>
      </NavigationMenuItemContext.Provider>
    )
  }
)
NavigationMenuItem.displayName = "NavigationMenuItem"

export interface NavigationMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  showChevron?: boolean
}

export const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, NavigationMenuTriggerProps>(
  ({ asChild = false, showChevron = true, className, children, onClick, ...props }, forwardedRef) => {
    const { isOpen, triggerId, contentId, toggle } = useNavigationMenuItemContext()
    const Comp = asChild ? Slot : "button"

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (!e.defaultPrevented) {
        toggle()
      }
    }

    return (
      <Comp
        ref={forwardedRef as any}
        id={triggerId}
        type={asChild ? undefined : "button"}
        aria-expanded={isOpen}
        aria-controls={contentId}
        data-state={isOpen ? "open" : "closed"}
        onClick={handleClick}
        className={cn(
          navigationMenuTriggerStyle(),
          isOpen && "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100",
          className
        )}
        {...props}
      >
        {children}
        {!asChild && showChevron && (
          <ChevronDown
            className={cn(
              "relative top-[1px] ml-1.5 h-3.5 w-3.5 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        )}
      </Comp>
    )
  }
)
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

export interface NavigationMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavigationMenuContent = React.forwardRef<HTMLDivElement, NavigationMenuContentProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, contentId, triggerId, onMouseEnter, onMouseLeave } = useNavigationMenuItemContext()

    if (!isOpen) return null

    return (
      <div
        ref={ref}
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        data-state={isOpen ? "open" : "closed"}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cn(
          "absolute left-0 top-full mt-1.5 w-max max-w-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 text-zinc-900 dark:text-zinc-100 shadow-xl duration-150 animate-in fade-in-0 zoom-in-95 z-50",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
NavigationMenuContent.displayName = "NavigationMenuContent"

export interface NavigationMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
  active?: boolean
}

export const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, NavigationMenuLinkProps>(
  ({ asChild = false, active = false, className, href, children, ...props }, ref) => {
    const Comp = asChild ? Slot : (href ? "a" : "button")

    return (
      <Comp
        ref={ref as any}
        href={href}
        data-active={active ? "true" : undefined}
        className={cn(
          "block select-none rounded-lg p-2.5 text-xs font-medium leading-none text-zinc-700 dark:text-zinc-300 no-underline outline-none transition-colors",
          "hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100",
          "focus:bg-zinc-100 dark:focus:bg-zinc-800 focus:text-zinc-900 dark:focus:text-zinc-100",
          active && "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100",
          className
        )}
        {...(props as any)}
      >
        {children}
      </Comp>
    )
  }
)
NavigationMenuLink.displayName = "NavigationMenuLink"

export interface NavigationMenuViewportProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavigationMenuViewport = React.forwardRef<HTMLDivElement, NavigationMenuViewportProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute left-0 top-full flex justify-center",
          className
        )}
        {...props}
      />
    )
  }
)
NavigationMenuViewport.displayName = "NavigationMenuViewport"

export interface NavigationMenuIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavigationMenuIndicator = React.forwardRef<HTMLDivElement, NavigationMenuIndicatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden transition-all duration-200",
          className
        )}
        {...props}
      />
    )
  }
)
NavigationMenuIndicator.displayName = "NavigationMenuIndicator"
