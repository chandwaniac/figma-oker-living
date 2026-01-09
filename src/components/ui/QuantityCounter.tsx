import { clsx } from 'clsx'
import { Minus, Plus, Trash2 } from 'lucide-react'

interface QuantityCounterProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  showTrash?: boolean
  className?: string
}

export function QuantityCounter({
  value,
  onChange,
  min = 1,
  max = 99,
  showTrash = false,
  className,
}: QuantityCounterProps) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  const showTrashIcon = showTrash && value === min

  return (
    <div className={clsx('inline-flex items-center gap-3', className)}>
      <button
        onClick={handleDecrement}
        disabled={!showTrash && value <= min}
        className={clsx(
          'w-8 h-8 flex items-center justify-center rounded-full border transition-colors',
          value <= min && !showTrash
            ? 'border-[#E6E6E6] text-[#D4D4D4] cursor-not-allowed'
            : 'border-[#D4D4D4] text-[#151515] hover:bg-[#F5F5F5]'
        )}
      >
        {showTrashIcon ? (
          <Trash2 className="w-4 h-4" />
        ) : (
          <Minus className="w-4 h-4" />
        )}
      </button>
      <span className="w-6 text-center text-sm font-semibold text-[#151515]">
        {value}
      </span>
      <button
        onClick={handleIncrement}
        disabled={value >= max}
        className={clsx(
          'w-8 h-8 flex items-center justify-center rounded-full border transition-colors',
          value >= max
            ? 'border-[#E6E6E6] text-[#D4D4D4] cursor-not-allowed'
            : 'border-[#D4D4D4] text-[#151515] hover:bg-[#F5F5F5]'
        )}
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  )
}
