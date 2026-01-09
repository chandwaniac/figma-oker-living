import { useNavigate } from 'react-router-dom'
import {
  User,
  Package,
  Palette,
  MessageCircle,
  FileText,
  Shield,
  Star,
  ChevronRight,
  LogOut,
} from 'lucide-react'
import { PageLayout } from '../components/layout/PageLayout'
import { Button } from '../components/ui/Button'

const menuItems = [
  { icon: User, label: 'Profile', path: '/profile/edit' },
  { icon: Package, label: 'My Orders', path: '/orders' },
  { icon: Palette, label: 'Know your Aesthetic Style', path: '/style-quiz' },
  { icon: MessageCircle, label: 'Chat with Us', path: '/chat' },
  { icon: Shield, label: 'Privacy Policy', path: '/privacy' },
  { icon: FileText, label: 'Terms and Conditions', path: '/terms' },
  { icon: Star, label: 'Rate App', path: '/rate' },
]

export function ProfilePage() {
  const navigate = useNavigate()

  return (
    <PageLayout cartCount={2}>
      {/* Header */}
      <div className="px-4 py-6 bg-white">
        <h1 className="text-xl font-bold text-[#151515]">My Account</h1>
      </div>

      {/* Menu Items */}
      <div className="bg-white">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className="w-full flex items-center justify-between px-4 py-4 border-b border-[#E6E6E6] hover:bg-[#F5F5F5] transition-colors"
          >
            <div className="flex items-center gap-4">
              <item.icon className="w-5 h-5 text-[#666666]" />
              <span className="text-sm text-[#151515]">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#999999]" />
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-4 py-6">
        <Button
          variant="outline"
          fullWidth
          leftIcon={<LogOut className="w-5 h-5" />}
        >
          Logout
        </Button>
      </div>
    </PageLayout>
  )
}
