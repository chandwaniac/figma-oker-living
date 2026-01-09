import { clsx } from 'clsx'
import { ProductCard } from './ProductCard'
import type { Product } from '../../types'

interface ProductGridProps {
  products: Product[]
  columns?: 2 | 3 | 4
  onProductClick?: (product: Product) => void
  onFavoriteClick?: (product: Product) => void
  onAddToCart?: (product: Product) => void
  className?: string
}

export function ProductGrid({
  products,
  columns = 2,
  onProductClick,
  onFavoriteClick,
  onAddToCart,
  className,
}: ProductGridProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }

  return (
    <div className={clsx('grid gap-4', gridCols[columns], className)}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onClick={() => onProductClick?.(product)}
          onFavoriteClick={() => onFavoriteClick?.(product)}
          onAddToCart={() => onAddToCart?.(product)}
        />
      ))}
    </div>
  )
}
