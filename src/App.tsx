import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { SearchPage } from './pages/SearchPage'
import { FavouritesPage } from './pages/FavouritesPage'
import { CartPage } from './pages/CartPage'
import { ProfilePage } from './pages/ProfilePage'

function App() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/*" element={<ProfilePage />} />
        <Route path="/brand/:id" element={<HomePage />} />
        <Route path="/collection/:id" element={<HomePage />} />
        <Route path="/category/:id" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
