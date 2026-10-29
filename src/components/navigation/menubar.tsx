"use client"

import * as React from "react"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "../../lib/utils"
import { Portal } from "../../lib/portal"
import { Slot } from "../../lib/slot"
import { useClickOutside } from "../../lib/use-click-outside"

interface MenubarContextValue {
  activeMenu: string | null
  setActiveMenu: (id: string | null) => void
}

const MenubarContext = React.createContext<MenubarContextValue | null>(null)

interface MenubarMenuContextValue {
  menuId: string
  isOpen: boolean
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>
  triggerRect: DOMRect | null
  updateTriggerRect: () => void
}

const MenubarMenuContext = React.createContext<MenubarMenuContextValue | null>(null)

export interface MenubarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Menubar = React.forwardRef<HTMLDivElement, MenubarProps>(
  ({ className, children, ...props }, ref) => {
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null)
    const menubarRef = React.useRef<HTMLDivElement | null>(null)

    useClickOutside(menubarRef, () => {
      setActiveMenu(null)
    }, activeMenu !== null)

    return (
      <MenubarContext.Provider value={{ activeMenu, setActiveMenu }}>
        <div
          ref={(node) => {
            menubarRef.current = node
            if (typeof ref === "function") ref(node)
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
          }}
          role="menubar"
          className={cn(
            "flex h-9 items-center space-x-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-1 text-zinc-900 dark:text-zinc-100 shadow-2xs",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </MenubarContext.Provider>
    )
  }
)
Menubar.displayName = "Menubar"

export interface MenubarMenuProps {
  children?: React.ReactNode
}

export const MenubarMenu: React.FC<MenubarMenuProps> = ({ children }) => {
  const generatedId = React.useId()
  const menubarCtx = React.useContext(MenubarContext)
  const isOpen = menubarCtx?.activeMenu === generatedId

  const triggerRef = React.useRef<HTMLButtonElement | null>(null)
  const [triggerRect, setTriggerRect] = React.useState<DOMRect | null>(null)

  const updateTriggerRect = React.useCallback(() => {
    if (triggerRef.current) {
      setTriggerRect(triggerRef.current.getBoundingClientRect())
    }
  }, [])

  return (
    <MenubarMenuContext.Provider
      value={{
        menuId: generatedId,
        isOpen,
        triggerRef,
        triggerRect,
        updateTriggerRect,
      }}
    >
      <div className="relative inline-block">{children}</div>
    </MenubarMenuContext.Provider>
  )
}

export interface MenubarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const MenubarTrigger = React.forwardRef<HTMLButtonElement, MenubarTriggerProps>(
  ({ asChild = false, onClick, onMouseEnter, children, className, ...props }, forwardedRef) => {
    const menubarCtx = React.useContext(MenubarContext)
    const menuCtx = React.useContext(MenubarMenuContext)
    const Comp = asChild ? Slot : "button"

    const isOpen = menuCtx?.isOpen ?? false

    const setMergedRef = React.useCallback(
      (node: HTMLButtonElement | null) => {
        if (menuCtx) menuCtx.triggerRef.current = node
        if (typeof forwardedRef === "function") forwardedRef(node)
        else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node
      },
      [forwardedRef, menuCtx]
    )

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (!e.defaultPrevented && menuCtx && menubarCtx) {
        menuCtx.updateTriggerRect()
        menubarCtx.setActiveMenu(isOpen ? null : menuCtx.menuId)
      }
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      onMouseEnter?.(e)
      if (menubarCtx?.activeMenu && menuCtx && menubarCtx.activeMenu !== menuCtx.menuId) {
        menuCtx.updateTriggerRect()
        menubarCtx.setActiveMenu(menuCtx.menuId)
      }
    }

    return (
      <Comp
        ref={setMergedRef as any}
        type={asChild ? undefined : "button"}
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        className={cn(
          "flex cursor-pointer select-none items-center rounded-lg px-3 py-1 text-xs font-medium outline-none transition-colors",
          isOpen
            ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
            : "hover:bg-zinc-100 focus:bg-zinc-100 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
MenubarTrigger.displayName = "MenubarTrigger"

export interface MenubarPortalProps {
  children: React.ReactNode
}

export const MenubarPortal: React.FC<MenubarPortalProps> = ({ children }) => {
  return <>{children}</>
}

export interface MenubarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end"
  sideOffset?: number
}

export const MenubarContent = React.forwardRef<HTMLDivElement, MenubarContentProps>(
  ({ className, align = "start", sideOffset = 8, children, style, ...props }, ref) => {
    const menubarCtx = React.useContext(MenubarContext)
    const menuCtx = React.useContext(MenubarMenuContext)

    if (!menuCtx?.isOpen) return null

    const triggerRect = menuCtx.triggerRect

    const positioningStyle: React.CSSProperties = triggerRect
      ? {
          position: "fixed",
          top: `${triggerRect.bottom + sideOffset}px`,
          left: `${triggerRect.left}px`,
        }
      : {}

    return (
      <Portal>
        <div
          ref={ref}
          role="menu"
          aria-orientation="vertical"
          style={{ ...positioningStyle, ...style }}
          className={cn(
            "fixed z-50 min-w-[12rem] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-1 text-zinc-900 dark:text-zinc-100 shadow-xl duration-150 animate-in fade-in-0 zoom-in-95",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </Portal>
    )
  }
)
MenubarContent.displayName = "MenubarContent"

export interface MenubarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean
  disabled?: boolean
  onSelect?: () => void
}

export const MenubarItem = React.forwardRef<HTMLDivElement, MenubarItemProps>(
  ({ className, inset, disabled = false, onSelect, onClick, ...props }, ref) => {
    const menubarCtx = React.useContext(MenubarContext)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return
      onClick?.(e)
      if (!e.defaultPrevented) {
        onSelect?.()
        menubarCtx?.setActiveMenu(null)
      }
    }

    return (
      <div
        ref={ref}
        role="menuitem"
        aria-disabled={disabled}
        data-disabled={disabled ? "" : undefined}
        onClick={handleClick}
        className={cn(
          "relative flex cursor-pointer select-none items-center rounded-lg px-2.5 py-1.5 text-xs outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 focus:bg-zinc-100 focus:text-zinc-900 dark:focus:bg-zinc-800 dark:focus:text-zinc-100",
          inset && "pl-8",
          disabled && "pointer-events-none opacity-50",
          className
        )}
        {...props}
      />
    )
  }
)
MenubarItem.displayName = "MenubarItem"

export interface MenubarCheckboxItemProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export const MenubarCheckboxItem = React.forwardRef<HTMLDivElement, MenubarCheckboxItemProps>(
  ({ className, children, checked = false, disabled = false, onCheckedChange, onClick, ...props }, ref) => {
    const menubarCtx = React.useContext(MenubarContext)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return
      onClick?.(e)
      if (!e.defaultPrevented) {
        onCheckedChange?.(!checked)
        menubarCtx?.setActiveMenu(null)
      }
    }

    return (
      <div
        ref={ref}
        role="menuitemcheckbox"
        aria-checked={checked}
        aria-disabled={disabled}
        onClick={handleClick}
        className={cn(
          "relative flex cursor-pointer select-none items-center rounded-lg py-1.5 pl-8 pr-2.5 text-xs outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 focus:bg-zinc-100 focus:text-zinc-900 dark:focus:bg-zinc-800 dark:focus:text-zinc-100",
          disabled && "pointer-events-none opacity-50",
          className
        )}
        {...props}
      >
        {checked && (
          <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <Check className="h-3.5 w-3.5" />
          </span>
        )}
        {children}
      </div>
    )
  }
)
MenubarCheckboxItem.displayName = "MenubarCheckboxItem"

export interface MenubarRadioItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  checked?: boolean
  disabled?: boolean
  onSelect?: () => void
}

export const MenubarRadioItem = React.forwardRef<HTMLDivElement, MenubarRadioItemProps>(
  ({ className, children, checked = false, disabled = false, onSelect, onClick, ...props }, ref) => {
    const menubarCtx = React.useContext(MenubarContext)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return
      onClick?.(e)
      if (!e.defaultPrevented) {
        onSelect?.()
        menubarCtx?.setActiveMenu(null)
      }
    }

    return (
      <div
        ref={ref}
        role="menuitemradio"
        aria-checked={checked}
        aria-disabled={disabled}
        onClick={handleClick}
        className={cn(
          "relative flex cursor-pointer select-none items-center rounded-lg py-1.5 pl-8 pr-2.5 text-xs outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 focus:bg-zinc-100 focus:text-zinc-900 dark:focus:bg-zinc-800 dark:focus:text-zinc-100",
          disabled && "pointer-events-none opacity-50",
          className
        )}
        {...props}
      >
        {checked && (
          <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <Circle className="h-2 w-2 fill-current" />
          </span>
        )}
        {children}
      </div>
    )
  }
)
MenubarRadioItem.displayName = "MenubarRadioItem"

export interface MenubarLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean
}

export const MenubarLabel = React.forwardRef<HTMLDivElement, MenubarLabelProps>(
  ({ className, inset, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "px-2.5 py-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
)
MenubarLabel.displayName = "MenubarLabel"

export interface MenubarSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MenubarSeparator = React.forwardRef<HTMLDivElement, MenubarSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-zinc-200 dark:bg-zinc-800", className)}
      {...props}
    />
  )
)
MenubarSeparator.displayName = "MenubarSeparator"

export interface MenubarShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const MenubarShortcut: React.FC<MenubarShortcutProps> = ({ className, ...props }) => {
  return (
    <span
      className={cn("ml-auto text-[10px] tracking-widest text-zinc-400", className)}
      {...props}
    />
  )
}
MenubarShortcut.displayName = "MenubarShortcut"

export interface MenubarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MenubarGroup = React.forwardRef<HTMLDivElement, MenubarGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} role="group" className={cn("p-1", className)} {...props} />
  )
)
MenubarGroup.displayName = "MenubarGroup"

export interface MenubarSubProps {
  children?: React.ReactNode
}

export const MenubarSub: React.FC<MenubarSubProps> = ({ children }) => {
  return <div className="relative">{children}</div>
}

export interface MenubarSubTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean
}

export const MenubarSubTrigger = React.forwardRef<HTMLDivElement, MenubarSubTriggerProps>(
  ({ className, inset, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-lg px-2.5 py-1.5 text-xs outline-none hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:bg-zinc-100 dark:focus:bg-zinc-800",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-3.5 w-3.5" />
    </div>
  )
)
MenubarSubTrigger.displayName = "MenubarSubTrigger"

export interface MenubarSubContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MenubarSubContent = React.forwardRef<HTMLDivElement, MenubarSubContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-1 text-zinc-900 dark:text-zinc-100 shadow-xl duration-150 animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    />
  )
)
MenubarSubContent.displayName = "MenubarSubContent"

export interface MenubarRadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
}

export const MenubarRadioGroup = React.forwardRef<HTMLDivElement, MenubarRadioGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} role="group" className={cn("p-1", className)} {...props} />
  )
)
MenubarRadioGroup.displayName = "MenubarRadioGroup"

export default Menubar
