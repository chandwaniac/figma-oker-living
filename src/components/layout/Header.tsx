import { clsx } from 'clsx'
import { ArrowLeft, Search, Share2, ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { SegmentedControl } from '../ui/SegmentedControl'

interface HeaderProps {
  variant?: 'home' | 'back' | 'transparent'
  title?: string
  showSearch?: boolean
  showCart?: boolean
  showShare?: boolean
  segment?: {
    options: string[]
    value: string
    onChange: (value: string) => void
  }
  cartCount?: number
  className?: string
}

export function Header({
  variant = 'home',
  title,
  showSearch = false,
  showCart = false,
  showShare = false,
  segment,
  cartCount = 0,
  className,
}: HeaderProps) {
  const navigate = useNavigate()

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 bg-white',
        className
      )}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {variant === 'back' && (
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center -ml-2"
            >
              <ArrowLeft className="w-6 h-6 text-[#151515]" />
            </button>
          )}
          {variant === 'home' && (
            <svg
              viewBox="0 0 80 28"
              fill="none"
              className="h-7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 3C6.36 3 3 6.36 3 10.5C3 14.64 6.36 18 10.5 18C14.64 18 18 14.64 18 10.5C18 6.36 14.64 3 10.5 3ZM10.5 15C8.02 15 6 12.98 6 10.5C6 8.02 8.02 6 10.5 6C12.98 6 15 8.02 15 10.5C15 12.98 12.98 15 10.5 15Z"
                fill="#151515"
              />
              <path
                d="M25.5 3L21 10.5L25.5 18H29L33.5 10.5L29 3H25.5ZM27.25 15L24.5 10.5L27.25 6H27.25L30 10.5L27.25 15Z"
                fill="#151515"
              />
              <path
                d="M43 3H36V18H39V13H43C46.31 13 49 10.31 49 7C49 3.69 46.31 3 43 3ZM43 10H39V6H43C44.66 6 46 6.34 46 7C46 7.66 44.66 10 43 10Z"
                fill="#151515"
              />
              <path
                d="M59 3H52V18H55V13H59L63 18H67L62.5 12.5C64.5 11.5 66 9.5 66 7C66 3.69 63.31 3 59 3ZM59 10H55V6H59C60.66 6 62 6.34 62 7C62 7.66 60.66 10 59 10Z"
                fill="#151515"
              />
            </svg>
          )}
          {title && (
            <h1 className="text-base font-semibold text-[#151515]">{title}</h1>
          )}
        </div>

        {segment && (
          <SegmentedControl
            options={segment.options}
            value={segment.value}
            onChange={segment.onChange}
          />
        )}

        <div className="flex items-center gap-2">
          {showSearch && (
            <button className="w-10 h-10 flex items-center justify-center">
              <Search className="w-6 h-6 text-[#151515]" />
            </button>
          )}
          {showShare && (
            <button className="w-10 h-10 flex items-center justify-center">
              <Share2 className="w-6 h-6 text-[#151515]" />
            </button>
          )}
          {showCart && (
            <button className="w-10 h-10 flex items-center justify-center relative">
              <ShoppingCart className="w-6 h-6 text-[#151515]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center bg-[#F5A623] text-[#151515] text-[10px] font-bold rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
