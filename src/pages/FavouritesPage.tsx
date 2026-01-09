import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { Header } from '../components/layout/Header'
import { PageLayout } from '../components/layout/PageLayout'
import { ProductCard } from '../components/product/ProductCard'
import { CollectionCard } from '../components/product/CollectionCard'
import { Chip } from '../components/ui/Chip'
import { Button } from '../components/ui/Button'
import { products, collections } from '../data/mockData'

const tabs = ['All', 'My collections', 'Favourite collections']

export function FavouritesPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('All')

  // Simulate favourited products
  const favouriteProducts = products.filter((_, index) => index % 2 === 0)

  return (
    <PageLayout cartCount={2}>
      <Header variant="home" title="Collections" showSearch showCart cartCount={2} />

      {/* Tabs */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto hide-scrollbar border-b border-[#E6E6E6]">
        {tabs.map((tab) => (
          <Chip
            key={tab}
            selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Chip>
        ))}
      </div>

      {activeTab === 'All' ? (
        <div className="animate-fade-in">
          {/* Create New Collection Button */}
          <div className="px-4 py-4">
            <Button
              variant="primary"
              fullWidth
              onClick={() => {}}
              leftIcon={<span className="text-lg">+</span>}
            >
              Create new
            </Button>
          </div>

          {/* Favourite Products */}
          {favouriteProducts.length > 0 ? (
            <section className="px-4 py-2">
              <h2 className="text-sm font-semibold text-[#151515] mb-3">
                Saved Products ({favouriteProducts.length})
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {favouriteProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    isFavorite
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                ))}
              </div>
            </section>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-[#999999]" />
              </div>
              <h3 className="text-lg font-semibold text-[#151515] mb-2">No favourites yet</h3>
              <p className="text-sm text-[#666666] text-center mb-4">
                Save products you love to find them easily later
              </p>
              <Button onClick={() => navigate('/')}>Start browsing</Button>
            </div>
          )}
        </div>
      ) : activeTab === 'My collections' ? (
        <div className="animate-fade-in px-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            {collections.filter((c) => c.author === 'me').map((collection) => (
              <CollectionCard
                key={collection.id}
                {...collection}
                onClick={() => navigate(`/collection/${collection.id}`)}
              />
            ))}
          </div>
          {collections.filter((c) => c.author === 'me').length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-[#666666]">No collections yet</p>
              <Button className="mt-4" onClick={() => {}}>
                Create a collection
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="animate-fade-in px-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            {collections.map((collection) => (
              <CollectionCard
                key={collection.id}
                {...collection}
                onClick={() => navigate(`/collection/${collection.id}`)}
              />
            ))}
          </div>
        </div>
      )}
    </PageLayout>
  )
}
