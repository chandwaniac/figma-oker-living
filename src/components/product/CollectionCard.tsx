import { clsx } from 'clsx'
import { motion } from 'framer-motion'

interface CollectionCardProps {
  title: string
  description?: string
  image: string
  productCount?: number
  author?: string
  onClick?: () => void
  variant?: 'default' | 'large' | 'small'
  className?: string
}

export function CollectionCard({
  title,
  description,
  image,
  productCount,
  author,
  onClick,
  variant = 'default',
  className,
}: CollectionCardProps) {
  if (variant === 'large') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={clsx(
          'relative overflow-hidden rounded-xl cursor-pointer aspect-[3/4]',
          className
        )}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-white/80 mt-1 line-clamp-2">{description}</p>
          )}
          <div className="flex items-center gap-2 mt-2 text-xs text-white/70">
            {author && <span>By {author}</span>}
            {productCount !== undefined && <span>{productCount} products</span>}
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === 'small') {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={clsx(
          'flex flex-col cursor-pointer w-28',
          className
        )}
      >
        <div className="aspect-square rounded-lg overflow-hidden bg-[#F5F5F5] mb-2">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xs font-medium text-[#151515] line-clamp-2">{title}</h3>
        {productCount !== undefined && (
          <p className="text-[10px] text-[#666666] mt-0.5">{productCount} products</p>
        )}
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={clsx(
        'bg-white rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow',
        className
      )}
    >
      <div className="aspect-[4/3] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-[#151515] line-clamp-1">{title}</h3>
        {description && (
          <p className="text-xs text-[#666666] mt-0.5 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center gap-2 mt-2 text-xs text-[#999999]">
          {author && <span>By {author}</span>}
          {productCount !== undefined && <span>{productCount} products</span>}
        </div>
      </div>
    </motion.div>
  )
}
