import { clsx } from 'clsx'
import { motion } from 'framer-motion'

interface BrandCardProps {
  name: string
  description?: string
  image: string
  logo?: string
  followers?: number
  products?: number
  onClick?: () => void
  variant?: 'default' | 'spotlight' | 'small'
  className?: string
}

export function BrandCard({
  name,
  description,
  image,
  logo,
  followers,
  products,
  onClick,
  variant = 'default',
  className,
}: BrandCardProps) {
  if (variant === 'spotlight') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={clsx(
          'relative overflow-hidden rounded-xl cursor-pointer aspect-[4/5]',
          className
        )}
      >
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          {logo && (
            <img src={logo} alt={`${name} logo`} className="h-6 mb-2" />
          )}
          <h3 className="text-lg font-semibold">{name}</h3>
          {description && (
            <p className="text-sm text-white/80 mt-1 line-clamp-2">{description}</p>
          )}
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
          'flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:shadow-md transition-shadow',
          className
        )}
      >
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#F5F5F5] flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-[#151515] truncate">{name}</h3>
          {description && (
            <p className="text-xs text-[#666666] truncate">{description}</p>
          )}
        </div>
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
      <div className="aspect-video relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3">
          {logo && (
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#F5F5F5] flex-shrink-0">
              <img src={logo} alt={`${name} logo`} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-base font-semibold text-[#151515]">{name}</h3>
            {description && (
              <p className="text-sm text-[#666666] mt-0.5 line-clamp-2">{description}</p>
            )}
          </div>
        </div>
        {(followers !== undefined || products !== undefined) && (
          <div className="flex items-center gap-4 mt-3 text-xs text-[#666666]">
            {followers !== undefined && (
              <span><strong className="text-[#151515]">{followers.toLocaleString()}</strong> followers</span>
            )}
            {products !== undefined && (
              <span><strong className="text-[#151515]">{products}</strong> products</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
