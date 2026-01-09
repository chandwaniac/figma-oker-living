import { clsx } from 'clsx'
import { X } from 'lucide-react'
import type { ReactNode } from 'react'

interface ChipProps {
  children: ReactNode
  selected?: boolean
  onRemove?: () => void
  onClick?: () => void
  className?: string
}

export function Chip({ children, selected = false, onRemove, onClick, className }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full transition-all duration-200',
        selected
          ? 'bg-[#151515] text-white'
          : 'bg-white border border-[#D4D4D4] text-[#151515] hover:border-[#151515]',
        className
      )}
    >
      {children}
      {onRemove && (
        <X
          className="w-3.5 h-3.5 cursor-pointer hover:opacity-70"
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
        />
      )}
    </button>
  )
}
