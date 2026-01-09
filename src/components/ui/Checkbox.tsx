import { clsx } from 'clsx'
import { Check } from 'lucide-react'

interface CheckboxProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  disabled?: boolean
  className?: string
}

export function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  className,
}: CheckboxProps) {
  return (
    <label
      className={clsx(
        'inline-flex items-center gap-2 cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <div
        onClick={() => !disabled && onChange?.(!checked)}
        className={clsx(
          'w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200',
          checked
            ? 'bg-[#151515] border-[#151515]'
            : 'bg-white border-[#D4D4D4] hover:border-[#151515]'
        )}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </div>
      {label && <span className="text-sm text-[#151515]">{label}</span>}
    </label>
  )
}
