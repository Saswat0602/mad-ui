import * as React from 'react'

export interface VisuallyHiddenInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string
  value?: string | number | readonly string[]
}

/**
 * VisuallyHiddenInput primitive for native HTML <form> and Server Actions parity.
 * Emits an inaccessible offscreen input element when `name` is present.
 */
export const VisuallyHiddenInput = React.forwardRef<HTMLInputElement, VisuallyHiddenInputProps>(
  ({ name, value, ...props }, ref) => {
    if (!name) return null

    return (
      <input
        ref={ref}
        type="hidden"
        name={name}
        value={value ?? ''}
        style={{
          position: 'absolute',
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          wordWrap: 'normal',
        }}
        tabIndex={-1}
        aria-hidden="true"
        readOnly
        {...props}
      />
    )
  }
)
VisuallyHiddenInput.displayName = 'VisuallyHiddenInput'
