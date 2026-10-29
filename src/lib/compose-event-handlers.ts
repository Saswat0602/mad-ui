/**
 * Compose user-provided event handlers with internal event handlers.
 * Calls user handler first; if not prevented, calls internal handler.
 */
export function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event)

    if (
      checkForDefaultPrevented === false ||
      !(event as unknown as { defaultPrevented: boolean }).defaultPrevented
    ) {
      return ourEventHandler?.(event)
    }
  }
}
