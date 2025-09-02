import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../lib/utils'

export interface InputOTPProps {
  value: string
  onChange: (value: string) => void
  length?: number
  disabled?: boolean
  className?: string
  placeholder?: string
  type?: 'number' | 'text'
}

export interface InputOTPGroupProps {
  children: React.ReactNode
  className?: string
}

export interface InputOTPSlotProps {
  char?: string
  hasFakeCaret?: boolean
  isActive?: boolean
  className?: string
  children?: React.ReactNode
}

export const InputOTP: React.FC<InputOTPProps> = ({
  value,
  onChange,
  length = 6,
  disabled = false,
  className,
  placeholder = '0',
  type = 'text'
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length)
  }, [length])

  const handleChange = (index: number, char: string) => {
    if (disabled) return

    const newValue = value.split('')
    newValue[index] = char
    const result = newValue.join('').slice(0, length)
    onChange(result)

    if (char && index < length - 1) {
      setActiveIndex(index + 1)
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return

    if (e.key === 'Backspace') {
      e.preventDefault()
      if (value[index]) {
        const newValue = value.split('')
        newValue[index] = ''
        onChange(newValue.join(''))
      } else if (index > 0) {
        setActiveIndex(index - 1)
        inputRefs.current[index - 1]?.focus()
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      setActiveIndex(index - 1)
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      setActiveIndex(index + 1)
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleFocus = (index: number) => {
    setActiveIndex(index)
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    if (disabled) return

    e.preventDefault()
    const pastedData = e.clipboardData.getData('text/plain').slice(0, length)
    if (type === 'number' && !/^\d+$/.test(pastedData)) return

    onChange(pastedData)
    if (pastedData.length === length) {
      setActiveIndex(length - 1)
      inputRefs.current[length - 1]?.focus()
    } else {
      setActiveIndex(pastedData.length)
      inputRefs.current[pastedData.length]?.focus()
    }
  }

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      {Array.from({ length }).map((_, index) => (
        <InputOTPSlot
          key={index}
          char={value[index]}
          isActive={activeIndex === index}
          hasFakeCaret={activeIndex === index && !value[index]}
        >
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type={type === 'number' ? 'tel' : 'text'}
            inputMode={type === 'number' ? 'numeric' : 'text'}
            pattern={type === 'number' ? '[0-9]*' : undefined}
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onFocus={() => handleFocus(index)}
            onPaste={handlePaste}
            disabled={disabled}
            placeholder={placeholder}
            className="absolute inset-0 w-full h-full text-center text-transparent bg-transparent border-none outline-none"
          />
        </InputOTPSlot>
      ))}
    </div>
  )
}

export const InputOTPGroup: React.FC<InputOTPGroupProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      {children}
    </div>
  )
}

export const InputOTPSlot: React.FC<InputOTPSlotProps> = ({
  char,
  hasFakeCaret,
  isActive,
  className,
  children
}) => {
  return (
    <div
      className={cn(
        'relative flex h-10 w-10 items-center justify-center border-y border-r border-l border-input text-sm transition-all first:rounded-l-md last:rounded-r-md',
        isActive && 'z-10 ring-2 ring-ring ring-offset-background',
        className
      )}
    >
      <div className="relative">
        {char && (
          <span className="text-foreground">{char}</span>
        )}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-caret-blink">
            <div className="h-4 w-px bg-foreground duration-150" />
          </div>
        )}
      </div>
      {children}
    </div>
  )
}
