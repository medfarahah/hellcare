'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { TrendingUp, Users, DollarSign, Activity, Download, Calendar } from 'lucide-react'

export default function AdminReports() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Reports & Analytics</h1>
            <p className="text-neutral-textSecondary text-lg">View system performance and insights</p>
          </div>
          <Button variant="primary">
            <Download size={20} />
            Export Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-blue-50 border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-blue-600" size={24} />
              <h3 className="font-semibold">Total Users</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">127</p>
            <p className="text-sm text-success mt-1">↑ 15% from last month</p>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="text-green-600" size={24} />
              <h3 className="font-semibold">Revenue</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">325K DJF</p>
            <p className="text-sm text-success mt-1">↑ 22% from last month</p>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="text-purple-600" size={24} />
              <h3 className="font-semibold">Active Sessions</h3>
            </div>
            <p className="text-3xl font-bold text-purple-600">43</p>
            <p className="text-sm text-neutral-textSecondary mt-1">Currently online</p>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="text-orange-600" size={24} />
              <h3 className="font-semibold">Growth Rate</h3>
            </div>
            <p className="text-3xl font-bold text-orange-600">18%</p>
            <p className="text-sm text-success mt-1">↑ 3% from last month</p>
          </Card>
        </div>

        {/* Usage Statistics */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="text-primary" size={24} />
            Usage Statistics (Last 30 Days)
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Patient Registrations</span>
                <span className="text-primary font-bold">48</span>
              </div>
              <div className="w-full bg-neutral-bg rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Doctor Registrations</span>
                <span className="text-success font-bold">5</span>
              </div>
              <div className="w-full bg-neutral-bg rounded-full h-3">
                <div className="bg-success h-3 rounded-full" style={{ width: '33%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Appointments Booked</span>
                <span className="text-warning font-bold">156</span>
              </div>
              <div className="w-full bg-neutral-bg rounded-full h-3">
                <div className="bg-warning h-3 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Prescriptions Issued</span>
                <span className="text-info font-bold">134</span>
              </div>
              <div className="w-full bg-neutral-bg rounded-full h-3">
                <div className="bg-info h-3 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </Card>

        {/* Revenue Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Revenue by Plan</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                <span className="font-semibold">Premium Plans</span>
                <span className="text-xl font-bold text-warning">175,000 DJF</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <span className="font-semibold">Standard Plans</span>
                <span className="text-xl font-bold text-primary">150,000 DJF</span>
              </div>
              <div className="border-t border-neutral-border pt-3 mt-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="text-2xl font-bold text-success">325,000 DJF</span>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4">Top Specialties</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Cardiology</span>
                <span className="font-bold">24 patients</span>
              </div>
              <div className="flex items-center justify-between">
                <span>General Practice</span>
                <span className="font-bold">18 patients</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Ophthalmology</span>
                <span className="font-bold">15 patients</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Download Options */}
        <Card className="bg-info/5 border-info">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="text-info" size={28} />
              <div>
                <h3 className="font-semibold text-lg">Export Reports</h3>
                <p className="text-neutral-textSecondary">Download detailed reports for analysis</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary">
                <Download size={18} />
                PDF
              </Button>
              <Button variant="secondary">
                <Download size={18} />
                Excel
              </Button>
              <Button variant="secondary">
                <Download size={18} />
                CSV
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  )
}

