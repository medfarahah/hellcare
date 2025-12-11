'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { Search, User, Mail, Phone, Shield, Ban, Edit, Trash2, Plus } from 'lucide-react'
import { useState } from 'react'

export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'patient' | 'caregiver'>('all')

  const users = [
    {
      id: 'PA-2025-001234',
      name: 'Abdifatah Ismail',
      email: 'patient@demo.com',
      phone: '+253 77 12 34 56',
      role: 'patient',
      subscription: 'Standard',
      status: 'active',
      joined: 'Jan 15, 2025'
    },
    {
      id: 'CG-2025-000123',
      name: 'Mohamed',
      email: 'caregiver@demo.com',
      phone: '+253 77 23 45 67',
      role: 'caregiver',
      subscription: 'Premium',
      status: 'active',
      joined: 'Jan 20, 2025'
    },
    {
      id: 'PA-2025-001456',
      name: 'Fatima Hassan',
      email: 'fatima.hassan@email.dj',
      phone: '+253 77 34 56 78',
      role: 'patient',
      subscription: 'Premium',
      status: 'active',
      joined: 'Feb 1, 2025'
    },
    {
      id: 'PA-2025-001789',
      name: 'Ahmed Ibrahim',
      email: 'ahmed.ibrahim@care.dj',
      phone: '+253 77 45 67 89',
      role: 'patient',
      subscription: 'Free',
      status: 'active',
      joined: 'Feb 5, 2025'
    },
  ]

  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         u.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === 'all' || u.role === filter
    return matchesSearch && matchesFilter
  })

  const getRoleColor = (role: string) => {
    return role === 'patient' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
  }

  const getSubscriptionColor = (sub: string) => {
    if (sub === 'Premium') return 'bg-warning/10 text-warning'
    if (sub === 'Standard') return 'bg-primary/10 text-primary'
    return 'bg-neutral-bg text-neutral-textSecondary'
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">User Management</h1>
            <p className="text-neutral-textSecondary text-lg">Manage patients and caregivers</p>
          </div>
          <Button variant="primary">
            <Plus size={20} />
            Add User
          </Button>
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
                placeholder="Search by name, email or ID..."
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
                All ({users.length})
              </Button>
              <Button 
                variant={filter === 'patient' ? 'primary' : 'secondary'}
                onClick={() => setFilter('patient')}
                className="flex-1 text-sm"
              >
                Patients
              </Button>
              <Button 
                variant={filter === 'caregiver' ? 'primary' : 'secondary'}
                onClick={() => setFilter('caregiver')}
                className="flex-1 text-sm"
              >
                Caregivers
              </Button>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center bg-primary/5">
            <p className="text-3xl font-bold text-primary">{users.length}</p>
            <p className="text-neutral-textSecondary">Total Users</p>
          </Card>
          <Card className="text-center bg-success/5">
            <p className="text-3xl font-bold text-success">
              {users.filter(u => u.status === 'active').length}
            </p>
            <p className="text-neutral-textSecondary">Active</p>
          </Card>
          <Card className="text-center bg-warning/5">
            <p className="text-3xl font-bold text-warning">
              {users.filter(u => u.subscription === 'Premium').length}
            </p>
            <p className="text-neutral-textSecondary">Premium</p>
          </Card>
          <Card className="text-center bg-info/5">
            <p className="text-3xl font-bold text-info">4</p>
            <p className="text-neutral-textSecondary">New This Week</p>
          </Card>
        </div>

        {/* Users List */}
        <div className="space-y-4">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="text-primary" size={28} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{user.name}</h3>
                      <p className="text-sm text-neutral-textSecondary">ID: {user.id}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(user.role)}`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSubscriptionColor(user.subscription)}`}>
                        {user.subscription}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3 text-sm">
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <Mail size={14} />
                      <span className="truncate">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <Phone size={14} />
                      <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <Shield size={14} />
                      <span>Joined: {user.joined}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="secondary" className="text-sm px-4 py-2">
                      <Edit size={16} />
                      Edit
                    </Button>
                    <Button variant="secondary" className="text-sm px-4 py-2">
                      <Shield size={16} />
                      View Details
                    </Button>
                    <Button variant="secondary" className="text-sm px-4 py-2 text-warning border-warning">
                      <Ban size={16} />
                      Suspend
                    </Button>
                    <Button variant="secondary" className="text-sm px-4 py-2 text-error border-error">
                      <Trash2 size={16} />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-neutral-textSecondary text-lg">
              No users found {searchTerm && `matching "${searchTerm}"`}
            </p>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}

