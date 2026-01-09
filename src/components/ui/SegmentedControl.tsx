import { clsx } from 'clsx'
import { motion } from 'framer-motion'

interface SegmentedControlProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export function SegmentedControl({ options, value, onChange, className }: SegmentedControlProps) {
  return (
    <div className={clsx('inline-flex bg-[#E6E6E6] rounded-full p-1', className)}>
      {options.map((option) => {
        const isSelected = option === value
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={clsx(
              'relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200',
              isSelected ? 'text-[#151515]' : 'text-[#666666] hover:text-[#151515]'
            )}
          >
            {isSelected && (
              <motion.div
                layoutId="segment-bg"
                className="absolute inset-0 bg-white rounded-full shadow-sm"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        )
      })}
    </div>
  )
}
