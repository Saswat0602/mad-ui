import * as React from "react"

export interface UseHotkeysOptions {
  enabled?: boolean
  preventDefault?: boolean
  enableOnInputs?: boolean
}

/**
 * Normalizes keyboard event modifier keys and key codes.
 */
function matchHotkey(event: KeyboardEvent, hotkeyString: string): boolean {
  const parts = hotkeyString.toLowerCase().split("+").map((s) => s.trim())
  const key = parts[parts.length - 1]
  const modifiers = parts.slice(0, -1)

  const hasMod = modifiers.includes("mod")
  if (hasMod) {
    if (!event.metaKey && !event.ctrlKey) return false
  } else {
    if (modifiers.includes("meta") !== event.metaKey) return false
    if (modifiers.includes("ctrl") !== event.ctrlKey) return false
  }

  if (modifiers.includes("alt") !== event.altKey) return false
  if (modifiers.includes("shift") !== event.shiftKey) return false

  const eventKey = event.key.toLowerCase()
  if (key === "space") return eventKey === " " || eventKey === "space"
  if (key === "esc") return eventKey === "escape"
  
  return eventKey === key
}

/**
 * Hook to listen for global keyboard shortcuts with modifier detection.
 */
export function useHotkeys(
  hotkey: string | string[],
  handler: (event: KeyboardEvent) => void,
  options: UseHotkeysOptions = {}
) {
  const { enabled = true, preventDefault = true, enableOnInputs = false } = options
  const handlerRef = React.useRef(handler)

  React.useEffect(() => {
    handlerRef.current = handler
  })

  React.useEffect(() => {
    if (!enabled || typeof window === "undefined") return

    const listener = (event: KeyboardEvent) => {
      // Ignore input and textarea events unless explicitly enabled
      if (!enableOnInputs) {
        const target = event.target as HTMLElement
        const tagName = target?.tagName?.toLowerCase()
        if (
          tagName === "input" ||
          tagName === "textarea" ||
          tagName === "select" ||
          target?.isContentEditable
        ) {
          return
        }
      }

      const hotkeys = Array.isArray(hotkey) ? hotkey : [hotkey]
      const matched = hotkeys.some((hk) => matchHotkey(event, hk))

      if (matched) {
        if (preventDefault) {
          event.preventDefault()
        }
        handlerRef.current(event)
      }
    }

    window.addEventListener("keydown", listener)
    return () => window.removeEventListener("keydown", listener)
  }, [hotkey, enabled, preventDefault, enableOnInputs])
}
