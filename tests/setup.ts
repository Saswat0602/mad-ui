import './polyfill.cjs'
import { afterEach, expect } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from 'vitest-axe/matchers'

expect.extend(matchers)

const originalConsoleError = console.error
console.error = (...args: any[]) => {
  if (typeof args[0] === 'string' && args[0].includes('Not implemented:')) return
  originalConsoleError(...args)
}

if (typeof window !== 'undefined') {
  if (!window.ResizeObserver) {
    window.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  }
  if (!window.matchMedia) {
    window.matchMedia = (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    })
  }
  if (typeof HTMLCanvasElement !== 'undefined' && !HTMLCanvasElement.prototype.getContext) {
    // @ts-expect-error mock getContext for axe-core in jsdom
    HTMLCanvasElement.prototype.getContext = () => ({
      fillRect: () => {},
      clearRect: () => {},
      getImageData: () => ({ data: [] }),
      putImageData: () => {},
      createImageData: () => [],
      setTransform: () => {},
      drawImage: () => {},
      save: () => {},
      fillText: () => {},
      restore: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      closePath: () => {},
      stroke: () => {},
      translate: () => {},
      scale: () => {},
      rotate: () => {},
      arc: () => {},
      fill: () => {},
      measureText: () => ({ width: 0 }),
      transform: () => {},
      rect: () => {},
      clip: () => {},
    })
  }
}

afterEach(() => {
  cleanup()
})

