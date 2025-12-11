'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { Search, Crown, User, Calendar, DollarSign, TrendingUp } from 'lucide-react'
import { useState } from 'react'

export default function AdminSubscriptions() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'standard' | 'premium' | 'free'>('all')

  const subscriptions = [
    {
      id: 'SUB-001',
      user: 'Abdifatah Ismail',
      userId: 'PA-2025-001234',
      plan: 'standard',
      amount: 3000,
      period: 'monthly',
      status: 'active',
      startDate: 'Jan 15, 2025',
      nextBilling: 'Feb 15, 2025'
    },
    {
      id: 'SUB-002',
      user: 'Mohamed',
      userId: 'CG-2025-000123',
      plan: 'premium',
      amount: 50000,
      period: 'yearly',
      status: 'active',
      startDate: 'Jan 20, 2025',
      nextBilling: 'Jan 20, 2026'
    },
    {
      id: 'SUB-003',
      user: 'Fatima Hassan',
      userId: 'PA-2025-001456',
      plan: 'premium',
      amount: 5000,
      period: 'monthly',
      status: 'active',
      startDate: 'Feb 1, 2025',
      nextBilling: 'Mar 1, 2025'
    },
    {
      id: 'SUB-004',
      user: 'Ahmed Ibrahim',
      userId: 'PA-2025-001789',
      plan: 'free',
      amount: 0,
      period: 'trial',
      status: 'trial',
      startDate: 'Feb 5, 2025',
      nextBilling: 'Feb 20, 2025'
    },
  ]

  const filteredSubs = subscriptions.filter(s => {
    const matchesSearch = s.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         s.userId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === 'all' || s.plan === filter
    return matchesSearch && matchesFilter
  })

  const getPlanColor = (plan: string) => {
    if (plan === 'premium') return 'bg-warning/10 text-warning border-warning'
    if (plan === 'standard') return 'bg-primary/10 text-primary border-primary'
    return 'bg-neutral-bg text-neutral-textSecondary border-neutral-border'
  }

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fr-DJ', {
      style: 'currency',
      currency: 'DJF',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const totalRevenue = subscriptions.reduce((sum, sub) => sum + sub.amount, 0)
  const monthlyRevenue = subscriptions.filter(s => s.period === 'monthly').reduce((sum, sub) => sum + sub.amount, 0)

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Subscription Management</h1>
          <p className="text-neutral-textSecondary text-lg">Manage user subscriptions and billing</p>
        </div>

        {/* Revenue Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-primary to-primary-dark text-white">
            <div className="flex items-center gap-3">
              <DollarSign size={32} />
              <div>
                <p className="text-2xl font-bold">{formatPrice(totalRevenue)}</p>
                <p className="text-white/80 text-sm">Total Revenue</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-warning to-orange-500 text-white">
            <div className="flex items-center gap-3">
              <TrendingUp size={32} />
              <div>
                <p className="text-2xl font-bold">{formatPrice(monthlyRevenue)}</p>
                <p className="text-white/80 text-sm">Monthly Revenue</p>
              </div>
            </div>
          </Card>

          <Card className="text-center">
            <p className="text-3xl font-bold text-primary">{subscriptions.length}</p>
            <p className="text-neutral-textSecondary">Active Subscriptions</p>
          </Card>

          <Card className="text-center">
            <p className="text-3xl font-bold text-warning">
              {subscriptions.filter(s => s.plan === 'premium').length}
            </p>
            <p className="text-neutral-textSecondary">Premium Users</p>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-textSecondary" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-12"
                placeholder="Search by user name or ID..."
              />
            </div>
          </Card>

          <Card>
            <div className="flex gap-2">
              <Button 
                variant={filter === 'all' ? 'primary' : 'secondary'}
                onClick={() => setFilter('all')}
                className="flex-1 text-sm"
              >
                All
              </Button>
              <Button 
                variant={filter === 'standard' ? 'primary' : 'secondary'}
                onClick={() => setFilter('standard')}
                className="flex-1 text-sm"
              >
                Standard
              </Button>
              <Button 
                variant={filter === 'premium' ? 'primary' : 'secondary'}
                onClick={() => setFilter('premium')}
                className="flex-1 text-sm"
              >
                Premium
              </Button>
              <Button 
                variant={filter === 'free' ? 'primary' : 'secondary'}
                onClick={() => setFilter('free')}
                className="flex-1 text-sm"
              >
                Free
              </Button>
            </div>
          </Card>
        </div>

        {/* Subscriptions List */}
        <div className="space-y-4">
          {filteredSubs.map((sub) => (
            <Card key={sub.id} className="hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
                  <Crown className="text-warning" size={28} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{sub.user}</h3>
                      <p className="text-sm text-neutral-textSecondary">{sub.userId} | {sub.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${getPlanColor(sub.plan)}`}>
                      {sub.plan.charAt(0).toUpperCase() + sub.plan.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3 bg-neutral-bg p-3 rounded-lg">
                    <div>
                      <p className="text-xs text-neutral-textSecondary">Amount</p>
                      <p className="font-bold text-primary">{formatPrice(sub.amount)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-textSecondary">Period</p>
                      <p className="font-semibold capitalize">{sub.period}</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-textSecondary">Start Date</p>
                      <p className="font-semibold">{sub.startDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-textSecondary">Next Billing</p>
                      <p className="font-semibold text-warning">{sub.nextBilling}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="secondary" className="text-sm px-4 py-2">
                      <User size={16} />
                      View User
                    </Button>
                    <Button variant="secondary" className="text-sm px-4 py-2">
                      <Calendar size={16} />
                      Billing History
                    </Button>
                    {sub.plan !== 'free' && (
                      <Button variant="secondary" className="text-sm px-4 py-2 text-error border-error">
                        Cancel Subscription
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredSubs.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-neutral-textSecondary text-lg">
              No subscriptions found {searchTerm && `matching "${searchTerm}"`}
            </p>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}

