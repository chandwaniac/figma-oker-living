import { clsx } from 'clsx'
import { Check } from 'lucide-react'

interface ColorOption {
  id: string
  name: string
  color?: string
  image?: string
}

interface ColorSelectorProps {
  options: ColorOption[]
  selectedId: string
  onChange: (id: string) => void
  className?: string
}

export function ColorSelector({
  options,
  selectedId,
  onChange,
  className,
}: ColorSelectorProps) {
  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>
      {options.map((option) => {
        const isSelected = option.id === selectedId

        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={clsx(
              'relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all',
              isSelected ? 'border-[#151515]' : 'border-transparent hover:border-[#D4D4D4]'
            )}
            title={option.name}
          >
            {option.image ? (
              <img
                src={option.image}
                alt={option.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{ backgroundColor: option.color }}
              />
            )}
            {isSelected && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
}
