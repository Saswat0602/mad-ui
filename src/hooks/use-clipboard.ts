import * as React from "react"

export interface UseClipboardOptions {
  timeout?: number
}

export interface UseClipboardReturn {
  copy: (text: string) => Promise<boolean>
  copied: boolean
  error: Error | null
  reset: () => void
}

/**
 * Hook to copy text to the clipboard with temporary copied state feedback and error handling.
 */
export function useClipboard(options: UseClipboardOptions = {}): UseClipboardReturn {
  const { timeout = 2000 } = options
  const [copied, setCopied] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const reset = React.useCallback(() => {
    setCopied(false)
    setError(null)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const copy = React.useCallback(
    async (text: string): Promise<boolean> => {
      reset()

      if (!navigator?.clipboard) {
        // Fallback for non-secure contexts or legacy browsers
        try {
          const textArea = document.createElement("textarea")
          textArea.value = text
          textArea.style.position = "fixed"
          textArea.style.left = "-999999px"
          textArea.style.top = "-999999px"
          document.body.appendChild(textArea)
          textArea.focus()
          textArea.select()
          const successful = document.execCommand("copy")
          textArea.remove()

          if (successful) {
            setCopied(true)
            timeoutRef.current = setTimeout(() => setCopied(false), timeout)
            return true
          }
          throw new Error("execCommand copy returned false")
        } catch (err) {
          const e = err instanceof Error ? err : new Error(String(err))
          setError(e)
          return false
        }
      }

      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        timeoutRef.current = setTimeout(() => setCopied(false), timeout)
        return true
      } catch (err) {
        const e = err instanceof Error ? err : new Error(String(err))
        setError(e)
        return false
      }
    },
    [timeout, reset]
  )

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return { copy, copied, error, reset }
}
