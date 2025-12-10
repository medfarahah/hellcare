'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { useAuth } from '@/contexts/AuthContext'
import { User, Mail, Phone, Calendar, MapPin, Edit } from 'lucide-react'

export default function Profile() {
  const { user } = useAuth()

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Profile</h1>
          <p className="text-neutral-textSecondary text-lg">Manage your personal information</p>
        </div>

        {/* Profile Header Card */}
        <Card className="bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-primary text-4xl font-bold">
              {user?.name?.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">{user?.name}</h2>
              <p className="text-white/90 text-lg">Patient ID: PA-2025-001234</p>
              <p className="text-white/90 text-sm capitalize mt-1">{user?.role} Account</p>
            </div>
          </div>
        </Card>

        {/* Personal Information */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <Button variant="secondary" className="text-sm px-4 py-2">
              <Edit size={16} />
              Edit
            </Button>
          </div>

          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-neutral-bg rounded-lg">
                <User className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-neutral-textSecondary">Full Name</p>
                  <p className="font-semibold text-lg">{user?.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-neutral-bg rounded-lg">
                <Mail className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-neutral-textSecondary">Email</p>
                  <p className="font-semibold text-lg">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-neutral-bg rounded-lg">
                <Phone className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-neutral-textSecondary">Phone</p>
                  <p className="font-semibold text-lg">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-neutral-bg rounded-lg">
                <Calendar className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-neutral-textSecondary">Date of Birth</p>
                  <p className="font-semibold text-lg">March 15, 1950</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-neutral-bg rounded-lg">
                <MapPin className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-neutral-textSecondary">Address</p>
                  <p className="font-semibold text-lg">123 Main Street, City, State 12345</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Medical Information */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Medical Information</h2>
            <Button variant="secondary" className="text-sm px-4 py-2">
              <Edit size={16} />
              Edit
            </Button>
          </div>

          <Card>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral-textSecondary mb-1">Blood Type</p>
                <p className="font-semibold text-lg">A+</p>
              </div>

              <div className="border-t border-neutral-border pt-4">
                <p className="text-sm text-neutral-textSecondary mb-2">Allergies</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-error/10 text-error px-3 py-1 rounded-full text-sm font-semibold">
                    Penicillin
                  </span>
                  <span className="bg-error/10 text-error px-3 py-1 rounded-full text-sm font-semibold">
                    Peanuts
                  </span>
                </div>
              </div>

              <div className="border-t border-neutral-border pt-4">
                <p className="text-sm text-neutral-textSecondary mb-2">Chronic Conditions</p>
                <div className="space-y-2">
                  <p className="font-semibold">• Hypertension</p>
                  <p className="font-semibold">• Type 2 Diabetes</p>
                </div>
              </div>

              <div className="border-t border-neutral-border pt-4">
                <p className="text-sm text-neutral-textSecondary mb-1">Insurance Provider</p>
                <p className="font-semibold text-lg">HealthCare Plus</p>
                <p className="text-neutral-textSecondary">Policy #: HC-2025-987654</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Account Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="secondary" className="w-full">
            Change Password
          </Button>
          <Button variant="secondary" className="w-full">
            Privacy Settings
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}

