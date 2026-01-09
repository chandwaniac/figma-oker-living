import { clsx } from 'clsx'
import { Heart, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'

interface ProductCardProps {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  isNew?: boolean
  isLuxury?: boolean
  isFavorite?: boolean
  onFavoriteClick?: () => void
  onAddToCart?: () => void
  onClick?: () => void
  variant?: 'default' | 'small' | 'large'
  className?: string
}

export function ProductCard({
  name,
  brand,
  price,
  originalPrice,
  image,
  isNew = false,
  isLuxury = false,
  isFavorite = false,
  onFavoriteClick,
  onAddToCart,
  onClick,
  variant = 'default',
  className,
}: ProductCardProps) {
  const hasDiscount = originalPrice && originalPrice > price
  const discount = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  const sizes = {
    default: 'w-full',
    small: 'w-36',
    large: 'w-full',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx('flex flex-col cursor-pointer', sizes[variant], className)}
      onClick={onClick}
    >
      <div className="relative aspect-square bg-[#F5F5F5] rounded-lg overflow-hidden mb-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && <Badge variant="amber">New</Badge>}
          {isLuxury && <Badge variant="default">Luxury</Badge>}
          {hasDiscount && <Badge variant="amber">{discount}% off</Badge>}
        </div>

        {/* Action buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart?.()
            }}
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-[#F5F5F5] transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-[#151515]" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onFavoriteClick?.()
            }}
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-[#F5F5F5] transition-colors"
          >
            <Heart
              className={clsx(
                'w-4 h-4 transition-colors',
                isFavorite ? 'text-red-500 fill-red-500' : 'text-[#151515]'
              )}
            />
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="flex flex-col gap-0.5">
        <p className="text-xs text-[#666666]">{brand}</p>
        <h3 className="text-sm font-medium text-[#151515] line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-semibold text-[#151515]">
            {'\u20B9'}{price.toLocaleString('en-IN')}
          </span>
          {hasDiscount && (
            <span className="text-xs text-[#999999] line-through">
              {'\u20B9'}{originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
