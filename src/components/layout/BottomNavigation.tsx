import { clsx } from 'clsx'
import { Home, Search, Heart, ShoppingCart, User } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Heart, label: 'Favourites', path: '/favourites' },
  { icon: ShoppingCart, label: 'Cart', path: '/cart' },
  { icon: User, label: 'Profile', path: '/profile' },
]

interface BottomNavigationProps {
  cartCount?: number
}

export function BottomNavigation({ cartCount = 0 }: BottomNavigationProps) {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E6E6E6] px-4 py-2 z-50">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path
          const isCart = label === 'Cart'

          return (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center gap-0.5 p-2"
            >
              <div className="relative">
                <Icon
                  className={clsx(
                    'w-6 h-6 transition-colors',
                    isActive ? 'text-[#151515]' : 'text-[#999999]'
                  )}
                  fill={isActive ? 'currentColor' : 'none'}
                  strokeWidth={isActive ? 2 : 1.5}
                />
                {isCart && cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-[#F5A623] text-[#151515] text-[10px] font-bold rounded-full">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </div>
              <span
                className={clsx(
                  'text-[10px]',
                  isActive ? 'text-[#151515] font-medium' : 'text-[#999999]'
                )}
              >
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
