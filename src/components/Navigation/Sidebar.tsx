'use client'

import { Home, Pill, Calendar, FileText, Stethoscope, Activity, Phone, User, LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function Sidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Pill, label: 'Medications', path: '/medications' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: FileText, label: 'Medical Records', path: '/records' },
    { icon: Stethoscope, label: 'Doctor Advice', path: '/advice' },
    { icon: Activity, label: 'Vitals', path: '/vitals' },
    { icon: Phone, label: 'Emergency Contacts', path: '/contacts' },
    { icon: User, label: 'Profile', path: '/profile' },
  ]

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r-2 border-neutral-border min-h-screen sticky top-[73px] left-0">
      <nav className="flex-1 py-6">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-4 px-6 py-4 transition-colors ${
                isActive 
                  ? 'bg-primary-light text-primary border-r-4 border-primary' 
                  : 'text-neutral-textSecondary hover:bg-neutral-bg'
              }`}
            >
              <Icon size={24} strokeWidth={2} />
              <span className="text-base font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
      
      {/* Logout Button at Bottom */}
      <div className="border-t-2 border-neutral-border">
        <button
          onClick={logout}
          className="flex items-center gap-4 px-6 py-4 w-full text-error hover:bg-error/5 transition-colors"
        >
          <LogOut size={24} strokeWidth={2} />
          <span className="text-base font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  )
}


