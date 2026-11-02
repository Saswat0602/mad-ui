/**
 * Mad UI OverlayStack & Scroll Lock Manager
 * Maintains a global stack of active modal/floating layers to ensure:
 * 1. Escape key and outside-clicks dismiss strictly the topmost overlay in LIFO order.
 * 2. Background body scroll is locked with scrollbar width compensation to eliminate 15px layout shift.
 */

interface OverlayEntry {
  id: string
  isModal: boolean
  onDismiss: () => void
}

class OverlayManager {
  private stack: OverlayEntry[] = []
  private originalOverflow: string = ''
  private originalPaddingRight: string = ''
  private scrollLocked = false

  public push(id: string, isModal: boolean, onDismiss: () => void): () => void {
    const entry: OverlayEntry = { id, isModal, onDismiss }
    this.stack.push(entry)

    if (isModal && !this.scrollLocked) {
      this.lockScroll()
    }

    return () => this.remove(id)
  }

  public remove(id: string) {
    const index = this.stack.findIndex((item) => item.id === id)
    if (index !== -1) {
      this.stack.splice(index, 1)
    }

    const hasRemainingModals = this.stack.some((item) => item.isModal)
    if (!hasRemainingModals && this.scrollLocked) {
      this.unlockScroll()
    }
  }

  public isTop(id: string): boolean {
    if (this.stack.length === 0) return false
    return this.stack[this.stack.length - 1].id === id
  }

  public dismissTop(): boolean {
    if (this.stack.length === 0) return false
    const top = this.stack[this.stack.length - 1]
    top.onDismiss()
    return true
  }

  private lockScroll() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    this.originalOverflow = document.body.style.overflow
    this.originalPaddingRight = document.body.style.paddingRight

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }
    this.scrollLocked = true
  }

  private unlockScroll() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    document.body.style.overflow = this.originalOverflow
    document.body.style.paddingRight = this.originalPaddingRight
    this.scrollLocked = false
  }
}

export const overlayStack = new OverlayManager()

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      const handled = overlayStack.dismissTop()
      if (handled) {
        e.stopPropagation()
      }
    }
  })
}
