'use client'

import { Home, Pill, Calendar, FileText, Stethoscope, Activity, Phone, User, LogOut, Crown, Users, UserCog, TrendingUp, Shield } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function Sidebar() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  // Admin navigation items
  const adminNavItems = [
    { icon: Home, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: Stethoscope, label: 'Doctors', path: '/admin/doctors' },
    { icon: Crown, label: 'Subscriptions', path: '/admin/subscriptions' },
    { icon: TrendingUp, label: 'Reports', path: '/admin/reports' },
    { icon: Shield, label: 'Settings', path: '/admin/settings' },
  ]

  // Doctor navigation items
  const doctorNavItems = [
    { icon: Home, label: 'Dashboard', path: '/doctor' },
    { icon: Users, label: 'My Patients', path: '/doctor/patients' },
    { icon: Calendar, label: 'Appointments', path: '/doctor/appointments' },
    { icon: Stethoscope, label: 'Consultations', path: '/doctor/consultations' },
    { icon: FileText, label: 'Prescriptions', path: '/doctor/prescriptions' },
    { icon: Activity, label: 'Lab Results', path: '/doctor/lab-results' },
    { icon: User, label: 'Profile', path: '/profile' },
  ]

  // Patient/Caregiver navigation items
  const patientNavItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Pill, label: 'Medications', path: '/medications' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: FileText, label: 'Medical Records', path: '/records' },
    { icon: Stethoscope, label: 'Doctor Advice', path: '/advice' },
    { icon: Activity, label: 'Vitals', path: '/vitals' },
    { icon: Phone, label: 'Emergency Contacts', path: '/contacts' },
    { icon: User, label: 'Profile', path: '/profile' },
  ]

  let navItems = patientNavItems
  if (user?.role === 'doctor') navItems = doctorNavItems
  if (user?.role === 'admin') navItems = adminNavItems

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
      
      {/* Bottom Actions */}
      <div className="border-t-2 border-neutral-border">
        {/* Subscription Link - Only for patients/caregivers */}
        {user?.role !== 'doctor' && user?.role !== 'admin' && (
          <Link
            href="/subscription"
            className={`flex items-center gap-4 px-6 py-4 transition-colors ${
              pathname === '/subscription'
                ? 'bg-warning/10 text-warning border-r-4 border-warning' 
                : 'text-warning hover:bg-warning/5'
            }`}
          >
            <Crown size={24} strokeWidth={2} />
            <span className="text-base font-medium">Subscription</span>
          </Link>
        )}
        
        {/* Logout Button */}
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


