'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import { useAuth } from '@/contexts/AuthContext'
import { FileText, Stethoscope, Activity, Phone, User, Settings, HelpCircle, LogOut, ChevronRight, Crown } from 'lucide-react'
import Link from 'next/link'

export default function More() {
  const { user, logout } = useAuth()
  const menuItems = [
    { icon: FileText, label: 'Medical Records', path: '/records', color: 'text-blue-500 bg-blue-50' },
    { icon: Stethoscope, label: 'Doctor Advice', path: '/advice', color: 'text-purple-500 bg-purple-50' },
    { icon: Activity, label: 'Health Vitals', path: '/vitals', color: 'text-green-500 bg-green-50' },
    { icon: Phone, label: 'Emergency Contacts', path: '/contacts', color: 'text-red-500 bg-red-50' },
  ]

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

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">More</h1>
          <p className="text-neutral-textSecondary text-lg">Additional features and settings</p>
        </div>

        {/* User Profile Card */}
        <Card className="bg-gradient-to-r from-primary-light to-primary/10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
              {user?.name?.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-bold">{user?.name}</h2>
              <p className="text-neutral-textSecondary">{user?.email}</p>
              <p className="text-xs text-primary font-semibold capitalize mt-1">{user?.role} Account</p>
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${item.color}`}>
                          <Icon size={24} />
                        </div>
                        <span className="font-semibold text-lg">{item.label}</span>
                      </div>
                      <ChevronRight className="text-neutral-textSecondary" size={24} />
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
          <h2 className="text-lg font-semibold mb-3 text-neutral-textSecondary">Account & Settings</h2>
          <div className="space-y-2">
            {accountItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link href={item.path} key={index}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${item.color}`}>
                          <Icon size={24} />
                        </div>
                        <span className="font-semibold text-lg">{item.label}</span>
                      </div>
                      <ChevronRight className="text-neutral-textSecondary" size={24} />
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
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-error/10">
                <LogOut size={24} className="text-error" />
              </div>
              <span className="font-semibold text-lg text-error">Sign Out</span>
            </div>
          </Card>
        </button>

        {/* App Version */}
        <div className="text-center text-neutral-textSecondary text-sm py-4">
          DjibCare Version 1.0.0
        </div>
      </div>
    </MainLayout>
  )
}


