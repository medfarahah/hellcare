'use client'

import { useRouter } from 'next/navigation'
import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { useAuth } from '@/contexts/AuthContext'
import { Users, Calendar, FileText, Activity, Clock, AlertCircle, Plus } from 'lucide-react'
import { useEffect } from 'react'

export default function DoctorDashboard() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user && user.role !== 'doctor') {
      router.push('/')
    }
  }, [user, router])

  if (!user || user.role !== 'doctor') {
    return null
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome, {user.name}!</h1>
          <p className="text-white/90 text-lg">{user.specialty} | Doctor Portal</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="flex items-center gap-4 bg-blue-50 border-blue-200">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="text-blue-600" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">24</p>
              <p className="text-neutral-textSecondary">Total Patients</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 bg-green-50 border-green-200">
            <div className="bg-green-100 p-3 rounded-full">
              <Calendar className="text-green-600" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-neutral-textSecondary">Today's Appointments</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 bg-orange-50 border-orange-200">
            <div className="bg-orange-100 p-3 rounded-full">
              <Clock className="text-orange-600" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-neutral-textSecondary">Pending Reviews</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 bg-purple-50 border-purple-200">
            <div className="bg-purple-100 p-3 rounded-full">
              <FileText className="text-purple-600" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-neutral-textSecondary">Reports to Sign</p>
            </div>
          </Card>
        </div>

        {/* Today's Appointments */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Today's Appointments</h2>
            <Button variant="secondary" className="text-sm px-4 py-2">
              View All
            </Button>
          </div>
          <div className="space-y-3">
            <Card className="border-2 border-primary bg-primary-light">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-primary p-2 rounded-lg">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-bold text-lg">10:00 AM</p>
                      <span className="bg-warning text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Next
                      </span>
                    </div>
                    <p className="font-semibold">Abdifatah Ismail</p>
                    <p className="text-neutral-textSecondary text-sm">Regular Checkup</p>
                    <p className="text-neutral-textSecondary text-xs mt-1">ID: PA-2025-001234</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="primary" className="text-sm px-4 py-2 min-h-0">
                    Start Consultation
                  </Button>
                  <Button variant="secondary" className="text-sm px-4 py-2 min-h-0">
                    View Records
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-neutral-bg p-2 rounded-lg">
                    <Clock className="text-neutral-textSecondary" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg mb-2">11:30 AM</p>
                    <p className="font-semibold">Fatima Hassan</p>
                    <p className="text-neutral-textSecondary text-sm">Follow-up Visit</p>
                    <p className="text-neutral-textSecondary text-xs mt-1">ID: PA-2025-001456</p>
                  </div>
                </div>
                <Button variant="secondary" className="text-sm px-4 py-2 min-h-0">
                  View Details
                </Button>
              </div>
            </Card>

            <Card>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-neutral-bg p-2 rounded-lg">
                    <Clock className="text-neutral-textSecondary" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg mb-2">2:00 PM</p>
                    <p className="font-semibold">Ahmed Ibrahim</p>
                    <p className="text-neutral-textSecondary text-sm">Initial Consultation</p>
                    <p className="text-neutral-textSecondary text-xs mt-1">ID: PA-2025-001789</p>
                  </div>
                </div>
                <Button variant="secondary" className="text-sm px-4 py-2 min-h-0">
                  View Details
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Pending Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-warning/5 border-2 border-warning/30">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="text-warning" size={24} />
              <h3 className="font-semibold text-lg">Pending Prescriptions</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <p className="font-semibold">Abdifatah Ismail</p>
                  <p className="text-sm text-neutral-textSecondary">Metformin refill</p>
                </div>
                <Button variant="primary" className="text-sm px-3 py-1 min-h-0">
                  Approve
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <p className="font-semibold">Fatima Hassan</p>
                  <p className="text-sm text-neutral-textSecondary">New prescription</p>
                </div>
                <Button variant="primary" className="text-sm px-3 py-1 min-h-0">
                  Review
                </Button>
              </div>
            </div>
          </Card>

          <Card className="bg-info/5 border-2 border-info/30">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-info" size={24} />
              <h3 className="font-semibold text-lg">Recent Lab Results</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <p className="font-semibold">Blood Test - Ahmed Ibrahim</p>
                  <p className="text-sm text-neutral-textSecondary">Received 2 hours ago</p>
                </div>
                <Button variant="secondary" className="text-sm px-3 py-1 min-h-0">
                  Review
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <p className="font-semibold">X-Ray - Fatima Hassan</p>
                  <p className="text-sm text-neutral-textSecondary">Received today</p>
                </div>
                <Button variant="secondary" className="text-sm px-3 py-1 min-h-0">
                  Review
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="secondary" className="flex-col h-auto py-4">
              <Plus size={24} className="mb-2" />
              <span>Add Advice</span>
            </Button>
            <Button variant="secondary" className="flex-col h-auto py-4">
              <FileText size={24} className="mb-2" />
              <span>Write Prescription</span>
            </Button>
            <Button variant="secondary" className="flex-col h-auto py-4">
              <Users size={24} className="mb-2" />
              <span>View Patients</span>
            </Button>
            <Button variant="secondary" className="flex-col h-auto py-4">
              <Activity size={24} className="mb-2" />
              <span>View Reports</span>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

