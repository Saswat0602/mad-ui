import * as React from "react"
import { createPortal } from "react-dom"

export interface PortalProps {
    children: React.ReactNode
    container?: HTMLElement | null
}

export function Portal({ children, container }: PortalProps) {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    if (!mounted) return null

    return createPortal(
        children,
        container || document.body
    )
}

// Hook to create a portal container
export function usePortal(id?: string) {
    const [container, setContainer] = React.useState<HTMLElement | null>(null)

    React.useEffect(() => {
        const portalId = id || 'mad-ui-portal'
        let element = document.getElementById(portalId)

        if (!element) {
            element = document.createElement('div')
            element.id = portalId
            document.body.appendChild(element)
        }

        setContainer(element)

        return () => {
            // Only remove if we created it and it's empty
            if (element && !id && element.childNodes.length === 0) {
                document.body.removeChild(element)
            }
        }
    }, [id])

    return container
}
