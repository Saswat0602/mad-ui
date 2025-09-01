import * as React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

export interface NativeButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  onPress?: () => void
  disabled?: boolean
  children: React.ReactNode
  style?: any
}

const NativeButton = React.forwardRef<any, NativeButtonProps>(
  ({ variant = "default", size = "default", onPress, disabled, children, style, ...props }, ref) => {
    const buttonStyle = [
      styles.base,
      styles[variant],
      size === 'default' ? styles.sizeDefault : styles[size],
      disabled && styles.disabled,
      style
    ]

    const textStyle = [
      styles.text,
      styles[`${variant}Text`],
      disabled && styles.disabledText
    ]

    return (
      <TouchableOpacity
        ref={ref}
        style={buttonStyle}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
        {...props}
      >
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    )
  }
)

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  default: {
    backgroundColor: '#000',
  },
  destructive: {
    backgroundColor: '#ef4444',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  secondary: {
    backgroundColor: '#f3f4f6',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
  },
  defaultText: {
    color: '#fff',
  },
  destructiveText: {
    color: '#fff',
  },
  outlineText: {
    color: '#000',
  },
  secondaryText: {
    color: '#000',
  },
  ghostText: {
    color: '#000',
  },
  linkText: {
    color: '#000',
    textDecorationLine: 'underline',
  },
  sizeDefault: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 40,
  },
  sm: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 36,
  },
  lg: {
    paddingHorizontal: 32,
    paddingVertical: 10,
    minHeight: 44,
  },
  icon: {
    width: 40,
    height: 40,
    padding: 0,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.5,
  },
})

NativeButton.displayName = "NativeButton"

export { NativeButton }
