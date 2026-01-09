import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, ArrowLeft } from 'lucide-react'
import { PageLayout } from '../components/layout/PageLayout'
import { SearchInput } from '../components/ui/Input'
import { Chip } from '../components/ui/Chip'
import { ProductCard } from '../components/product/ProductCard'
import { BrandCard } from '../components/product/BrandCard'
import { products, brands, categories } from '../data/mockData'

const recentSearches = ['Rugs', 'Jaipur Rugs', 'Candle holder', 'Modern decor']
const popularSearches = ['Cushions', 'Vases', 'Wall art', 'Lamps', 'Furniture']

export function SearchPage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'Category' | 'Brand' | 'Collection'>('Category')

  const filteredProducts = searchQuery
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const filteredBrands = searchQuery
    ? brands.filter((b) =>
        b.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const showResults = searchQuery.length > 0

  return (
    <PageLayout cartCount={2}>
      {/* Search Header */}
      <div className="sticky top-0 z-40 bg-white px-4 py-3 border-b border-[#E6E6E6]">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-6 h-6 text-[#151515]" />
          </button>
          <div className="flex-1">
            <SearchInput
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          {searchQuery && (
            <button onClick={() => setSearchQuery('')}>
              <X className="w-5 h-5 text-[#666666]" />
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mt-3">
          {(['Category', 'Brand', 'Collection'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm pb-2 border-b-2 transition-colors ${
                activeTab === tab
                  ? 'text-[#151515] font-semibold border-[#151515]'
                  : 'text-[#666666] border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {showResults ? (
        <div className="animate-fade-in">
          {/* Search Results */}
          {filteredProducts.length > 0 && (
            <section className="px-4 py-4">
              <h2 className="text-sm font-semibold text-[#151515] mb-3">
                Products ({filteredProducts.length})
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                ))}
              </div>
            </section>
          )}

          {filteredBrands.length > 0 && (
            <section className="px-4 py-4">
              <h2 className="text-sm font-semibold text-[#151515] mb-3">
                Brands ({filteredBrands.length})
              </h2>
              <div className="flex flex-col gap-2">
                {filteredBrands.map((brand) => (
                  <BrandCard
                    key={brand.id}
                    {...brand}
                    variant="small"
                    onClick={() => navigate(`/brand/${brand.id}`)}
                  />
                ))}
              </div>
            </section>
          )}

          {filteredProducts.length === 0 && filteredBrands.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <p className="text-[#666666] text-center">
                No results found for "{searchQuery}"
              </p>
              <p className="text-sm text-[#999999] text-center mt-1">
                Try a different search term
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="animate-fade-in">
          {/* Category Filter Chips */}
          {activeTab === 'Category' && (
            <div className="px-4 py-3 flex flex-wrap gap-2">
              {categories.slice(0, 4).map((category) => (
                <Chip key={category.id} onClick={() => setSearchQuery(category.name)}>
                  {category.name}
                </Chip>
              ))}
            </div>
          )}

          {/* Recent Searches */}
          <section className="px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-[#151515]">Recent Searches</h2>
              <button className="text-xs text-[#666666]">Clear all</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search) => (
                <Chip key={search} onClick={() => setSearchQuery(search)}>
                  {search}
                </Chip>
              ))}
            </div>
          </section>

          {/* Popular Searches */}
          <section className="px-4 py-4">
            <h2 className="text-sm font-semibold text-[#151515] mb-3">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <Chip key={search} onClick={() => setSearchQuery(search)}>
                  {search}
                </Chip>
              ))}
            </div>
          </section>

          {/* Trending Products */}
          <section className="px-4 py-4">
            <h2 className="text-sm font-semibold text-[#151515] mb-3">Trending</h2>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {products.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  variant="small"
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="flex-shrink-0"
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </PageLayout>
  )
}
