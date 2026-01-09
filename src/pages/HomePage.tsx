import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Header } from '../components/layout/Header'
import { PageLayout } from '../components/layout/PageLayout'
import { ProductCard } from '../components/product/ProductCard'
import { BrandCard } from '../components/product/BrandCard'
import { CollectionCard } from '../components/product/CollectionCard'
import { Chip } from '../components/ui/Chip'
import { products, brands, collections, categories, styleFilters } from '../data/mockData'

export function HomePage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Inspiration')
  const [selectedStyle, setSelectedStyle] = useState('All')

  const filteredProducts = selectedStyle === 'All'
    ? products.slice(0, 6)
    : products.filter(p => p.category?.toLowerCase().includes(selectedStyle.toLowerCase())).slice(0, 6)

  return (
    <PageLayout cartCount={2}>
      <Header
        variant="home"
        segment={{
          options: ['Inspiration', 'Shop'],
          value: activeTab,
          onChange: setActiveTab,
        }}
        showSearch
        showCart
        cartCount={2}
      />

      {activeTab === 'Inspiration' ? (
        <div className="animate-fade-in">
          {/* Style Filter Chips */}
          <div className="px-4 py-3 flex gap-2 overflow-x-auto hide-scrollbar">
            {styleFilters.map((style) => (
              <Chip
                key={style}
                selected={selectedStyle === style}
                onClick={() => setSelectedStyle(style)}
              >
                {style}
              </Chip>
            ))}
          </div>

          {/* Brand Spotlight */}
          <section className="px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-[#151515]">Brand Spotlight</h2>
              <button className="text-sm text-[#666666] flex items-center gap-1">
                See all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {brands.slice(0, 3).map((brand) => (
                <BrandCard
                  key={brand.id}
                  {...brand}
                  variant="spotlight"
                  onClick={() => navigate(`/brand/${brand.id}`)}
                  className="w-[280px] flex-shrink-0"
                />
              ))}
            </div>
          </section>

          {/* Collections */}
          <section className="px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-[#151515]">Collections You Might Like</h2>
              <button className="text-sm text-[#666666] flex items-center gap-1">
                See all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {collections.map((collection) => (
                <CollectionCard
                  key={collection.id}
                  {...collection}
                  variant="large"
                  onClick={() => navigate(`/collection/${collection.id}`)}
                  className="w-[200px] flex-shrink-0"
                />
              ))}
            </div>
          </section>

          {/* Trending Products */}
          <section className="px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-[#151515]">Trending Now</h2>
              <button className="text-sm text-[#666666] flex items-center gap-1">
                See all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
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
        </div>
      ) : (
        <div className="animate-fade-in">
          {/* Categories */}
          <section className="px-4 py-4">
            <h2 className="text-lg font-semibold text-[#151515] mb-3">Shop by Room</h2>
            <div className="grid grid-cols-3 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => navigate(`/category/${category.id}`)}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-full aspect-square rounded-full overflow-hidden bg-[#F5F5F5]">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-[#151515] text-center">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Shop All Products */}
          <section className="px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-[#151515]">New Arrivals</h2>
              <button className="text-sm text-[#666666] flex items-center gap-1">
                See all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {products.filter(p => p.isNew).map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              ))}
            </div>
          </section>

          {/* Featured Brands */}
          <section className="px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-[#151515]">Featured Brands</h2>
              <button className="text-sm text-[#666666] flex items-center gap-1">
                See all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {brands.map((brand) => (
                <BrandCard
                  key={brand.id}
                  {...brand}
                  variant="small"
                  onClick={() => navigate(`/brand/${brand.id}`)}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </PageLayout>
  )
}
