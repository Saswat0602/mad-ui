import * as React from 'react'

export interface UseControllableStateProps<T> {
  prop?: T
  defaultProp?: T
  onChange?: (state: T) => void
}

/**
 * Custom hook to handle controlled and uncontrolled component state.
 * Enables zero-dependency component state handling.
 */
export function useControllableState<T>({
  prop,
  defaultProp,
  onChange,
}: UseControllableStateProps<T>): [T, (nextState: T | ((prevState: T) => T)) => void] {
  const [uncontrolledProp, setUncontrolledProp] = React.useState<T>(
    defaultProp as T
  )

  const isControlled = prop !== undefined
  const value = isControlled ? (prop as T) : uncontrolledProp

  const handleChange = React.useCallback(
    (nextState: T | ((prevState: T) => T)) => {
      const setter = nextState as (prevState: T) => T
      const resolvedValue =
        typeof nextState === 'function' ? setter(value) : nextState

      if (!isControlled) {
        setUncontrolledProp(resolvedValue)
      }

      onChange?.(resolvedValue)
    },
    [isControlled, onChange, value]
  )

  return [value, handleChange]
}

