'use client'

import { User, Settings } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function TopNav() {
  const { user } = useAuth()

  return (
    <header className="sticky top-0 bg-white border-b-2 border-neutral-border z-40">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="relative h-12 w-12 bg-gradient-to-br from-[#7CB342] to-[#558B2F] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-2xl font-bold">+</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#7CB342] tracking-tight">DjibCare</span>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden md:block text-right mr-2">
            <p className="text-sm font-semibold text-neutral-text">{user?.name}</p>
            <p className="text-xs text-neutral-textSecondary capitalize">{user?.role}</p>
          </div>
          <button className="min-h-touch min-w-touch flex items-center justify-center hover:bg-neutral-bg rounded-full transition-colors">
            <Settings size={24} className="text-neutral-textSecondary" />
          </button>
          <Link href="/profile" className="min-h-touch min-w-touch flex items-center justify-center hover:bg-neutral-bg rounded-full transition-colors">
            <User size={24} className="text-neutral-textSecondary" />
          </Link>
        </div>
      </div>
    </header>
  )
}


