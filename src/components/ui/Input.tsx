import { clsx } from 'clsx'
import { Search } from 'lucide-react'
import type { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  className,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#151515] mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999999]">
            {leftIcon}
          </span>
        )}
        <input
          className={clsx(
            'w-full px-4 py-3 text-sm bg-[#F5F5F5] border border-transparent rounded-lg',
            'placeholder:text-[#999999] text-[#151515]',
            'focus:outline-none focus:border-[#151515] focus:bg-white',
            'transition-all duration-200',
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            error && 'border-red-500 focus:border-red-500',
            className
          )}
          {...props}
        />
        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999]">
            {rightIcon}
          </span>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

export function SearchInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Input
      leftIcon={<Search className="w-5 h-5" />}
      placeholder="Search for anything"
      className={className}
      {...props}
    />
  )
}
