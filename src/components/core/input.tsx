import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  success?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  variant?: "default" | "error" | "success"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  floatingLabel?: boolean
  // Enterprise features
  tooltip?: string
  analyticsId?: string
  analyticsEvent?: string
  analyticsData?: Record<string, any>
  ariaLabel?: string
  ariaDescribedBy?: string
  ariaRequired?: boolean
  ariaInvalid?: boolean
  role?: string
  dataTestId?: string
  onAnalytics?: (event: string, data?: Record<string, any>) => void
  debounceMs?: number
  validation?: {
    required?: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    custom?: (value: string) => boolean | string
  }
  showCharacterCount?: boolean
  autoComplete?: string
  autoFocus?: boolean
  spellCheck?: boolean
  autoCorrect?: string
  autoCapitalize?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = "text", 
    label, 
    error, 
    helperText, 
    success,
    leftIcon,
    rightIcon,
    variant = "default",
    size = "md",
    fullWidth = true,
    floatingLabel = false,
    placeholder,
    // Enterprise features
    tooltip,
    analyticsId,
    analyticsEvent,
    analyticsData,
    ariaLabel,
    ariaDescribedBy,
    ariaRequired,
    ariaInvalid,
    role,
    dataTestId,
    onAnalytics,
    debounceMs = 300,
    validation,
    showCharacterCount = false,
    autoComplete,
    autoFocus,
    spellCheck,
    autoCorrect,
    autoCapitalize,
    ...props 
  }, ref) => {
    
    const [focused, setFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)
    const [value, setValue] = React.useState(props.value || props.defaultValue || '')
    const [validationError, setValidationError] = React.useState<string | null>(null)
    const debounceRef = React.useRef<ReturnType<typeof setTimeout>>()
    const inputRef = React.useRef<HTMLInputElement>(null)
    
    // Combine refs
    React.useImperativeHandle(ref, () => inputRef.current!)
    
    // Validation function
    const validateInput = React.useCallback((inputValue: string) => {
      if (!validation) return null
      
      if (validation.required && !inputValue.trim()) {
        return 'This field is required'
      }
      
      if (validation.minLength && inputValue.length < validation.minLength) {
        return `Minimum length is ${validation.minLength} characters`
      }
      
      if (validation.maxLength && inputValue.length > validation.maxLength) {
        return `Maximum length is ${validation.maxLength} characters`
      }
      
      if (validation.pattern && !validation.pattern.test(inputValue)) {
        return 'Invalid format'
      }
      
      if (validation.custom) {
        const result = validation.custom(inputValue)
        if (typeof result === 'string') return result
        if (!result) return 'Invalid value'
      }
      
      return null
    }, [validation])
    
    // Analytics tracking
    const trackAnalytics = React.useCallback((event: string, data?: Record<string, any>) => {
      if (onAnalytics && analyticsId) {
        onAnalytics(event, {
          component: 'Input',
          analyticsId,
          ...analyticsData,
          ...data
        })
      }
    }, [onAnalytics, analyticsId, analyticsData])
    
    // Determine variant based on states
    const inputVariant = error || validationError ? "error" : success ? "success" : variant
    
    // Size classes with Material Design heights
    const sizeClasses = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-4 text-sm", 
      lg: "h-13 px-4 text-base"
    }
    
    // Base classes with Material Design improvements and proper visibility
    const baseClasses = "w-full rounded-lg border-2 transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
    
    // Enhanced variant classes with Material Design focus states and proper visibility
    const variantClasses = {
      default: "border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 focus-visible:border-blue-500 dark:focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 dark:focus-visible:ring-blue-400/20",
      error: "border-red-500 dark:border-red-400 hover:border-red-600 dark:hover:border-red-500 focus-visible:border-red-500 dark:focus-visible:border-red-400 focus-visible:ring-2 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-400/20 text-red-900 dark:text-red-100",
      success: "border-green-500 dark:border-green-400 hover:border-green-600 dark:hover:border-green-500 focus-visible:border-green-500 dark:focus-visible:border-green-400 focus-visible:ring-2 focus-visible:ring-green-500/20 dark:focus-visible:ring-green-400/20 text-green-900 dark:text-green-100"
    }
    
    // Floating label classes
    const floatingLabelClasses = cn(
      "absolute left-4 transition-all duration-200 pointer-events-none text-muted-foreground",
      (focused || hasValue) 
        ? "top-2 text-xs text-primary transform -translate-y-1" 
        : "top-1/2 text-sm transform -translate-y-1/2"
    )
    
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true)
      trackAnalytics('input_focus', { value: e.target.value })
      props.onFocus?.(e)
    }
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false)
      const inputValue = e.target.value
      setHasValue(inputValue.length > 0)
      
      // Validate on blur
      if (validation) {
        const validationResult = validateInput(inputValue)
        setValidationError(validationResult)
      }
      
      trackAnalytics('input_blur', { value: inputValue, hasError: !!validationError })
      props.onBlur?.(e)
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      setValue(inputValue)
      setHasValue(inputValue.length > 0)
      
      // Clear validation error on change
      if (validationError) {
        setValidationError(null)
      }
      
      // Debounced validation
      if (validation && debounceMs > 0) {
        if (debounceRef.current) {
          clearTimeout(debounceRef.current)
        }
        
        debounceRef.current = setTimeout(() => {
          const validationResult = validateInput(inputValue)
          setValidationError(validationResult)
        }, debounceMs)
      }
      
      trackAnalytics('input_change', { value: inputValue })
      props.onChange?.(e)
    }
    
    // Cleanup debounce on unmount
    React.useEffect(() => {
      return () => {
        if (debounceRef.current) {
          clearTimeout(debounceRef.current)
        }
      }
    }, [])
    
    return (
      <div className={cn("space-y-2", fullWidth && "w-full")}>
        {/* Regular Label */}
        {label && !floatingLabel && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
        
        {/* Input Container */}
        <div className="relative group">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground z-10">
              {leftIcon}
            </div>
          )}
          
          {/* Input Field */}
          <input
            type={type}
            className={cn(
              baseClasses,
              variantClasses[inputVariant],
              sizeClasses[size],
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              floatingLabel && hasValue && "pt-6 pb-2",
              className
            )}
            placeholder={floatingLabel ? "" : placeholder}
            ref={inputRef}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            // Enterprise accessibility features
            aria-label={ariaLabel || label}
            aria-describedby={ariaDescribedBy}
            aria-required={ariaRequired || validation?.required}
            aria-invalid={ariaInvalid || !!validationError}
            role={role}
            data-testid={dataTestId}
            // Enterprise input features
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            spellCheck={spellCheck}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
            {...props}
          />
          
          {/* Floating Label */}
          {label && floatingLabel && (
            <label className={floatingLabelClasses}>
              {label}
            </label>
          )}
          
          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground z-10">
              {rightIcon}
            </div>
          )}
          
          {/* Success/Error Icons */}
          {(success || error) && !rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
              {success && (
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {error && (
                <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          )}
        </div>
        
        {/* Helper Text / Error Message */}
        {(error || validationError || helperText) && (
          <p className={cn(
            "text-xs leading-relaxed",
            (error || validationError) ? "text-red-500" : "text-muted-foreground"
          )}>
            {error || validationError || helperText}
          </p>
        )}
        
        {/* Character Count */}
        {showCharacterCount && validation?.maxLength && (
          <div className="flex justify-end">
            <span className={cn(
              "text-xs",
              String(value).length > validation.maxLength ? "text-red-500" : "text-muted-foreground"
            )}>
              {String(value).length}/{validation.maxLength}
            </span>
          </div>
        )}
        
        {/* Tooltip */}
        {tooltip && (
          <div className="absolute -top-10 left-0 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            {tooltip}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }