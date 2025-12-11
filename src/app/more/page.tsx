'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import { useAuth } from '@/contexts/AuthContext'
import { FileText, Stethoscope, Activity, Phone, User, Settings, HelpCircle, LogOut, ChevronRight, Crown, Users, TrendingUp, Calendar, Pill, Shield } from 'lucide-react'
import Link from 'next/link'

export default function More() {
  const { user, logout } = useAuth()

  // Admin menu items
  const adminMenuItems = [
    { icon: TrendingUp, label: 'Reports & Analytics', path: '/admin/reports', color: 'text-primary bg-primary/10' },
    { icon: Crown, label: 'Subscriptions', path: '/admin/subscriptions', color: 'text-warning bg-warning/10' },
    { icon: Settings, label: 'System Settings', path: '/admin/settings', color: 'text-info bg-info/10' },
  ]

  // Doctor menu items
  const doctorMenuItems = [
    { icon: Stethoscope, label: 'Consultations', path: '/doctor/consultations', color: 'text-purple-500 bg-purple-50' },
    { icon: FileText, label: 'Prescriptions', path: '/doctor/prescriptions', color: 'text-blue-500 bg-blue-50' },
    { icon: Activity, label: 'Lab Results', path: '/doctor/lab-results', color: 'text-green-500 bg-green-50' },
  ]

  // Patient/Caregiver menu items
  const patientMenuItems = [
    { icon: FileText, label: 'Medical Records', path: '/records', color: 'text-blue-500 bg-blue-50' },
    { icon: Stethoscope, label: 'Doctor Advice', path: '/advice', color: 'text-purple-500 bg-purple-50' },
    { icon: Activity, label: 'Health Vitals', path: '/vitals', color: 'text-green-500 bg-green-50' },
    { icon: Phone, label: 'Emergency Contacts', path: '/contacts', color: 'text-red-500 bg-red-50' },
  ]

  const getMenuItems = () => {
    if (user?.role === 'admin') return adminMenuItems
    if (user?.role === 'doctor') return doctorMenuItems
    return patientMenuItems
  }

  const menuItems = getMenuItems()

  const accountItems = [
    { icon: User, label: 'Profile Settings', path: '/profile', color: 'text-gray-500 bg-gray-50' },
    { icon: Settings, label: 'App Settings', path: '/settings', color: 'text-gray-500 bg-gray-50' },
    { icon: HelpCircle, label: 'Help & Support', path: '/help', color: 'text-gray-500 bg-gray-50' },
  ]

  const subscriptionItem = { 
    icon: ChevronRight, 
    label: 'Subscription Plans', 
    path: '/subscription', 
    color: 'text-warning bg-warning/10',
    iconColor: 'text-warning',
    iconComponent: ChevronRight
  }

  const getTitle = () => {
    if (user?.role === 'admin') return 'Admin Menu'
    if (user?.role === 'doctor') return 'Doctor Menu'
    return 'More Options'
  }

  const getDescription = () => {
    if (user?.role === 'admin') return 'System administration and settings'
    if (user?.role === 'doctor') return 'Additional doctor features'
    return 'Additional features and settings'
  }

  return (
    <MainLayout>
      <div className="space-y-4 md:space-y-6 overflow-x-hidden">
        {/* Header */}
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{getTitle()}</h1>
          <p className="text-neutral-textSecondary text-sm md:text-base lg:text-lg">{getDescription()}</p>
        </div>

        {/* User Profile Card */}
        <Card className="bg-gradient-to-r from-primary-light to-primary/10">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl md:text-2xl font-bold flex-shrink-0">
              {user?.name?.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg md:text-xl font-bold truncate">{user?.name}</h2>
              <p className="text-neutral-textSecondary text-sm md:text-base truncate">{user?.email}</p>
              <p className="text-xs md:text-sm text-primary font-semibold capitalize mt-1">{user?.role} Account</p>
            </div>
          </div>
        </Card>

        {/* Main Features */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-neutral-textSecondary">Health Features</h2>
          <div className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link href={item.path} key={index}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                        <div className={`p-2 md:p-3 rounded-lg ${item.color} flex-shrink-0`}>
                          <Icon size={20} className="md:w-6 md:h-6" />
                        </div>
                        <span className="font-semibold text-base md:text-lg truncate">{item.label}</span>
                      </div>
                      <ChevronRight className="text-neutral-textSecondary flex-shrink-0" size={20} />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Subscription */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-neutral-textSecondary">Subscription</h2>
          <Link href="/subscription">
            <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 border-warning/30 bg-warning/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-warning/20">
                    <Crown size={24} className="text-warning" />
                  </div>
                  <div>
                    <span className="font-semibold text-lg">Subscription Plans</span>
                    <p className="text-sm text-neutral-textSecondary">View pricing & upgrade</p>
                  </div>
                </div>
                <ChevronRight className="text-neutral-textSecondary" size={24} />
              </div>
            </Card>
          </Link>
        </div>

        {/* Account & Settings */}
        <div>
          <h2 className="text-base md:text-lg font-semibold mb-3 text-neutral-textSecondary">Account & Settings</h2>
          <div className="space-y-2">
            {accountItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link href={item.path} key={index}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                        <div className={`p-2 md:p-3 rounded-lg ${item.color} flex-shrink-0`}>
                          <Icon size={20} className="md:w-6 md:h-6" />
                        </div>
                        <span className="font-semibold text-base md:text-lg truncate">{item.label}</span>
                      </div>
                      <ChevronRight className="text-neutral-textSecondary flex-shrink-0" size={20} />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Logout */}
        <button onClick={logout} className="w-full">
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 border-error/20">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="p-2 md:p-3 rounded-lg bg-error/10 flex-shrink-0">
                <LogOut size={20} className="text-error md:w-6 md:h-6" />
              </div>
              <span className="font-semibold text-base md:text-lg text-error">Sign Out</span>
            </div>
          </Card>
        </button>

        {/* App Version */}
        <div className="text-center text-neutral-textSecondary text-xs md:text-sm py-4">
          DjibCare Version 1.0.0 • {user?.role && user.role.charAt(0).toUpperCase() + user.role.slice(1)} Portal
        </div>
      </div>
    </MainLayout>
  )
}


