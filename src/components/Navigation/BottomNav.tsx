'use client'

import { Home, Pill, Calendar, Menu, LogOut, Users, Stethoscope, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function BottomNav() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  // Admin navigation items
  const adminNavItems = [
    { icon: Home, label: 'Home', path: '/admin' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: Stethoscope, label: 'Doctors', path: '/admin/doctors' },
    { icon: Menu, label: 'More', path: '/more' },
  ]

  // Doctor navigation items
  const doctorNavItems = [
    { icon: Home, label: 'Home', path: '/doctor' },
    { icon: Users, label: 'Patients', path: '/doctor/patients' },
    { icon: Calendar, label: 'Appointments', path: '/doctor/appointments' },
    { icon: Menu, label: 'More', path: '/more' },
  ]

  // Patient/Caregiver navigation items
  const patientNavItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Pill, label: 'Medications', path: '/medications' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: Menu, label: 'More', path: '/more' },
  ]

  let navItems = patientNavItems
  if (user?.role === 'doctor') navItems = doctorNavItems
  if (user?.role === 'admin') navItems = adminNavItems

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-neutral-border md:hidden z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={24} strokeWidth={2} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
        
        {/* Logout Button */}
        <button
          onClick={logout}
          className="nav-item text-error hover:text-error"
        >
          <LogOut size={24} strokeWidth={2} />
          <span className="text-xs font-medium">Logout</span>
        </button>
      </div>
    </nav>
  )
}


