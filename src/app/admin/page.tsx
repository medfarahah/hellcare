'use client'

import { useRouter } from 'next/navigation'
import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { useAuth } from '@/contexts/AuthContext'
import { Users, UserCog, Stethoscope, Crown, TrendingUp, Activity, DollarSign, AlertCircle } from 'lucide-react'
import { useEffect } from 'react'

export default function AdminDashboard() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user && user.role !== 'admin') {
      router.push('/')
    }
  }, [user, router])

  if (!user || user.role !== 'admin') {
    return null
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-info to-primary text-white rounded-2xl p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-white/90 text-lg">Welcome back, {user.name}!</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="flex items-center gap-4 bg-blue-50 border-blue-200">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="text-blue-600" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">127</p>
              <p className="text-neutral-textSecondary">Total Users</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 bg-green-50 border-green-200">
            <div className="bg-green-100 p-3 rounded-full">
              <Stethoscope className="text-green-600" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">15</p>
              <p className="text-neutral-textSecondary">Doctors</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 bg-purple-50 border-purple-200">
            <div className="bg-purple-100 p-3 rounded-full">
              <Crown className="text-purple-600" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">89</p>
              <p className="text-neutral-textSecondary">Subscriptions</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 bg-orange-50 border-orange-200">
            <div className="bg-orange-100 p-3 rounded-full">
              <DollarSign className="text-orange-600" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">325K</p>
              <p className="text-neutral-textSecondary text-sm">Revenue (DJF)</p>
            </div>
          </Card>
        </div>

        {/* User Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Users size={20} className="text-primary" />
              User Distribution
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-textSecondary">Patients</span>
                <span className="font-bold">95</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-textSecondary">Doctors</span>
                <span className="font-bold">15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-textSecondary">Caregivers</span>
                <span className="font-bold">17</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Crown size={20} className="text-warning" />
              Subscription Plans
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-textSecondary">Standard</span>
                <span className="font-bold text-primary">54</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-textSecondary">Premium</span>
                <span className="font-bold text-warning">35</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-textSecondary">Free Trial</span>
                <span className="font-bold text-neutral-textSecondary">6</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Activity size={20} className="text-success" />
              System Activity
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-textSecondary">Active Now</span>
                <span className="font-bold text-success">43</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-textSecondary">Today</span>
                <span className="font-bold">89</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-textSecondary">This Week</span>
                <span className="font-bold">112</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <Card>
              <div className="flex items-center gap-4">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Users className="text-success" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">New User Registration</p>
                  <p className="text-sm text-neutral-textSecondary">Fatima Hassan signed up for Premium plan</p>
                </div>
                <span className="text-sm text-neutral-textSecondary">5 min ago</span>
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Stethoscope className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">New Doctor Added</p>
                  <p className="text-sm text-neutral-textSecondary">Dr. Ali joined as General Practitioner</p>
                </div>
                <span className="text-sm text-neutral-textSecondary">2 hours ago</span>
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-4">
                <div className="bg-warning/10 p-2 rounded-lg">
                  <Crown className="text-warning" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Subscription Upgrade</p>
                  <p className="text-sm text-neutral-textSecondary">Abdifatah Ismail upgraded to Premium</p>
                </div>
                <span className="text-sm text-neutral-textSecondary">4 hours ago</span>
              </div>
            </Card>
          </div>
        </div>

        {/* System Alerts */}
        <Card className="bg-error/5 border-error">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-error flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-lg mb-2">System Alerts</h3>
              <ul className="space-y-1 text-sm text-neutral-textSecondary">
                <li>• 3 subscription renewals pending approval</li>
                <li>• Server backup scheduled for tonight at 2:00 AM</li>
                <li>• 2 doctor verification requests pending</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="secondary" className="flex-col h-auto py-4" onClick={() => router.push('/admin/users')}>
              <Users size={24} className="mb-2" />
              <span>Manage Users</span>
            </Button>
            <Button variant="secondary" className="flex-col h-auto py-4" onClick={() => router.push('/admin/doctors')}>
              <Stethoscope size={24} className="mb-2" />
              <span>Manage Doctors</span>
            </Button>
            <Button variant="secondary" className="flex-col h-auto py-4" onClick={() => router.push('/admin/subscriptions')}>
              <Crown size={24} className="mb-2" />
              <span>Subscriptions</span>
            </Button>
            <Button variant="secondary" className="flex-col h-auto py-4" onClick={() => router.push('/admin/reports')}>
              <TrendingUp size={24} className="mb-2" />
              <span>Reports</span>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

