import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full'

  const variants = {
    primary: 'bg-[#F5A623] text-[#151515] hover:bg-[#E09000] active:bg-[#D08500]',
    secondary: 'bg-[#151515] text-white hover:bg-[#333333] active:bg-[#000000]',
    outline: 'border border-[#151515] text-[#151515] bg-transparent hover:bg-[#F5F5F5] active:bg-[#E6E6E6]',
    ghost: 'text-[#151515] bg-transparent hover:bg-[#F5F5F5] active:bg-[#E6E6E6]',
  }

  const sizes = {
    xs: 'px-3 py-1.5 text-xs gap-1',
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
  }

  const disabledStyles = 'opacity-50 cursor-not-allowed'

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        disabled && disabledStyles,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </motion.button>
  )
}
