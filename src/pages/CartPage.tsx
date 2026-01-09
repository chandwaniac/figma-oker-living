import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Trash2, ShoppingBag } from 'lucide-react'
import { PageLayout } from '../components/layout/PageLayout'
import { Button } from '../components/ui/Button'
import { QuantityCounter } from '../components/ui/QuantityCounter'
import { products } from '../data/mockData'
import type { CartItem } from '../types'

export function CartPage() {
  const navigate = useNavigate()

  // Mock cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[0], quantity: 1 },
    { product: products[3], quantity: 2 },
  ])

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems((items) => items.filter((item) => item.product.id !== productId))
    } else {
      setCartItems((items) =>
        items.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      )
    }
  }

  const removeItem = (productId: string) => {
    setCartItems((items) => items.filter((item) => item.product.id !== productId))
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
  const shipping = subtotal > 999 ? 0 : 99
  const total = subtotal + shipping

  const CartEmpty = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-16 h-16 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-4">
        <ShoppingBag className="w-8 h-8 text-[#999999]" />
      </div>
      <h3 className="text-lg font-semibold text-[#151515] mb-2">Your cart is empty</h3>
      <p className="text-sm text-[#666666] text-center mb-4">
        Looks like you haven't added anything to your cart yet
      </p>
      <Button onClick={() => navigate('/')}>Start shopping</Button>
    </div>
  )

  return (
    <PageLayout showNav={false}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#E6E6E6]">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-6 h-6 text-[#151515]" />
          </button>
          <h1 className="text-base font-semibold text-[#151515]">
            Cart ({cartItems.length})
          </h1>
          <div className="w-6" />
        </div>
      </header>

      {cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="pb-36">
          {/* Cart Items */}
          <div className="px-4 py-4">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 py-4 border-b border-[#E6E6E6]"
              >
                <div
                  className="w-20 h-20 rounded-lg overflow-hidden bg-[#F5F5F5] flex-shrink-0 cursor-pointer"
                  onClick={() => navigate(`/product/${item.product.id}`)}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#666666]">{item.product.brand}</p>
                  <h3 className="text-sm font-medium text-[#151515] line-clamp-2">
                    {item.product.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#151515] mt-1">
                    {'\u20B9'}{item.product.price.toLocaleString('en-IN')}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <QuantityCounter
                      value={item.quantity}
                      onChange={(q) => updateQuantity(item.product.id, q)}
                      min={0}
                      showTrash
                    />
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-[#666666] hover:text-[#151515]"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Move to wishlist */}
          <div className="px-4 py-2 border-b border-[#E6E6E6]">
            <button className="text-sm text-[#666666] underline">
              Move all to wishlist
            </button>
          </div>

          {/* Order Summary */}
          <div className="px-4 py-4">
            <h2 className="text-base font-semibold text-[#151515] mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#666666]">Subtotal</span>
                <span className="text-[#151515]">{'\u20B9'}{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#666666]">Shipping</span>
                <span className="text-[#151515]">
                  {shipping === 0 ? 'Free' : `\u20B9${shipping}`}
                </span>
              </div>
              {shipping === 0 && (
                <p className="text-xs text-green-600">
                  You're eligible for free shipping!
                </p>
              )}
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#E6E6E6]">
              <span className="text-base font-semibold text-[#151515]">Total</span>
              <span className="text-lg font-bold text-[#151515]">
                {'\u20B9'}{total.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Checkout Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E6E6E6] px-4 py-3 z-50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[#666666]">Total ({cartItems.length} items)</span>
            <span className="text-lg font-bold text-[#151515]">
              {'\u20B9'}{total.toLocaleString('en-IN')}
            </span>
          </div>
          <Button fullWidth>Proceed to Checkout</Button>
        </div>
      )}
    </PageLayout>
  )
}
