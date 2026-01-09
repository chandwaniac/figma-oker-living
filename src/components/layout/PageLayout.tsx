import { clsx } from 'clsx'
import type { ReactNode } from 'react'
import { BottomNavigation } from './BottomNavigation'

interface PageLayoutProps {
  children: ReactNode
  showNav?: boolean
  cartCount?: number
  className?: string
}

export function PageLayout({
  children,
  showNav = true,
  cartCount = 0,
  className,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <main className={clsx('pb-20', className)}>{children}</main>
      {showNav && <BottomNavigation cartCount={cartCount} />}
    </div>
  )
}
