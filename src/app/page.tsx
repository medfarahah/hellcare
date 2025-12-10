'use client'

import { useRouter } from 'next/navigation'
import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { useAuth } from '@/contexts/AuthContext'
import { Pill, Calendar, Activity, AlertCircle, Clock, Plus, Crown, ChevronRight } from 'lucide-react'

export default function Dashboard() {
  const { user } = useAuth()
  const router = useRouter()

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, {user?.name?.split(' ')[0]}!</h1>
          <p className="text-neutral-textSecondary text-lg">Here's your health overview for today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="flex items-center gap-4">
            <div className="bg-primary-light p-3 rounded-full">
              <Pill className="text-primary" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-neutral-textSecondary">Medications Today</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4">
            <div className="bg-info/10 p-3 rounded-full">
              <Calendar className="text-info" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">1</p>
              <p className="text-neutral-textSecondary">Upcoming Appointment</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4">
            <div className="bg-success/10 p-3 rounded-full">
              <Activity className="text-success" size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">120/80</p>
              <p className="text-neutral-textSecondary">Blood Pressure</p>
            </div>
          </Card>
        </div>

        {/* Today's Medications */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Today's Medications</h2>
          <div className="space-y-3">
            <Card className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Clock className="text-success" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg">Aspirin 100mg</p>
                  <p className="text-neutral-textSecondary">8:00 AM - Taken</p>
                </div>
              </div>
              <span className="text-success font-semibold">✓ Done</span>
            </Card>

            <Card className="flex items-center justify-between border-2 border-warning">
              <div className="flex items-center gap-4">
                <div className="bg-warning/10 p-2 rounded-lg">
                  <Clock className="text-warning" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg">Metformin 500mg</p>
                  <p className="text-neutral-textSecondary">12:00 PM - Due Soon</p>
                </div>
              </div>
              <span className="text-warning font-semibold">Pending</span>
            </Card>

            <Card className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-neutral-bg p-2 rounded-lg">
                  <Clock className="text-neutral-textSecondary" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg">Vitamin D 1000IU</p>
                  <p className="text-neutral-textSecondary">8:00 PM</p>
                </div>
              </div>
              <span className="text-neutral-textSecondary font-semibold">Later</span>
            </Card>
          </div>
        </div>

        {/* Upcoming Appointment */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Upcoming Appointment</h2>
            <Button 
              variant="secondary" 
              className="text-sm px-4 py-2"
              onClick={() => router.push('/appointments')}
            >
              <Plus size={18} />
              Book New
            </Button>
          </div>
          <Card className="bg-primary-light border-2 border-primary">
            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-lg">
                <Calendar className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-lg mb-1">Dr. Johnson - Cardiology</p>
                <p className="text-neutral-textSecondary mb-2">Tomorrow, Dec 11 at 10:00 AM</p>
                <p className="text-sm text-neutral-textSecondary">City Medical Center, Room 302</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Subscription Promotion */}
        <Card className="bg-gradient-to-r from-warning/10 to-warning/5 border-2 border-warning/30 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => router.push('/subscription')}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-3 items-center flex-1">
              <div className="bg-warning/20 p-3 rounded-full">
                <Crown className="text-warning" size={28} />
              </div>
              <div>
                <p className="font-bold text-lg mb-1">Upgrade to Premium</p>
                <p className="text-neutral-textSecondary">Starting from 3,000 DJF/month - Unlock all features!</p>
              </div>
            </div>
            <ChevronRight className="text-warning flex-shrink-0" size={24} />
          </div>
        </Card>

        {/* Health Tips */}
        <Card className="bg-info/5 border-info">
          <div className="flex gap-3">
            <AlertCircle className="text-info flex-shrink-0" size={24} />
            <div>
              <p className="font-semibold text-lg mb-1">Health Tip</p>
              <p className="text-neutral-textSecondary">Remember to drink at least 8 glasses of water today!</p>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  )
}


