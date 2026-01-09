import { clsx } from 'clsx'

interface RadioProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  disabled?: boolean
  className?: string
}

export function Radio({
  checked = false,
  onChange,
  label,
  disabled = false,
  className,
}: RadioProps) {
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
          'w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200',
          checked
            ? 'border-[#151515]'
            : 'border-[#D4D4D4] hover:border-[#151515]'
        )}
      >
        {checked && (
          <div className="w-2.5 h-2.5 rounded-full bg-[#151515]" />
        )}
      </div>
      {label && <span className="text-sm text-[#151515]">{label}</span>}
    </label>
  )
}
