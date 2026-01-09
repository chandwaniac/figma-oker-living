export interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  description?: string
  isNew?: boolean
  isLuxury?: boolean
  isFavorite?: boolean
  category?: string
  colors?: ColorOption[]
  rating?: number
  reviewCount?: number
  inStock?: boolean
}

export interface ColorOption {
  id: string
  name: string
  color?: string
  image?: string
}

export interface Brand {
  id: string
  name: string
  description?: string
  image: string
  logo?: string
  followers?: number
  products?: number
}

export interface Collection {
  id: string
  title: string
  description?: string
  image: string
  productCount?: number
  author?: string
  products?: Product[]
}

export interface Category {
  id: string
  name: string
  image: string
  count?: number
}

export interface FilterOption {
  id: string
  label: string
  count?: number
}

export interface FilterGroup {
  id: string
  title: string
  options: FilterOption[]
  type: 'checkbox' | 'radio' | 'color' | 'range'
}

export interface Review {
  id: string
  author: string
  rating: number
  date: string
  comment: string
  helpful?: number
}

export interface CartItem {
  product: Product
  quantity: number
  color?: ColorOption
}
