import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { Plus, Activity, Heart, Droplet, Weight, TrendingUp, TrendingDown } from 'lucide-react'

export default function Vitals() {
  const vitals = [
    {
      name: 'Blood Pressure',
      icon: Heart,
      value: '120/80',
      unit: 'mmHg',
      status: 'normal',
      trend: 'stable',
      lastUpdated: '2 hours ago',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      name: 'Blood Glucose',
      icon: Droplet,
      value: '95',
      unit: 'mg/dL',
      status: 'normal',
      trend: 'down',
      lastUpdated: '3 hours ago',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      name: 'Weight',
      icon: Weight,
      value: '75',
      unit: 'kg',
      status: 'normal',
      trend: 'stable',
      lastUpdated: 'Today',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      name: 'Heart Rate',
      icon: Activity,
      value: '72',
      unit: 'bpm',
      status: 'normal',
      trend: 'up',
      lastUpdated: '1 hour ago',
      color: 'bg-red-50 text-red-600 border-red-200'
    },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Health Vitals</h1>
            <p className="text-neutral-textSecondary text-lg">Track your health measurements</p>
          </div>
          <Button variant="primary">
            <Plus size={20} />
            Add Reading
          </Button>
        </div>

        {/* Summary Card */}
        <Card className="bg-success/5 border-success">
          <div className="flex items-center gap-3">
            <Activity className="text-success" size={28} />
            <div>
              <h3 className="font-semibold text-lg">Overall Health Status</h3>
              <p className="text-neutral-textSecondary">All vitals within normal range</p>
            </div>
          </div>
        </Card>

        {/* Vitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vitals.map((vital, index) => {
            const Icon = vital.icon
            const TrendIcon = vital.trend === 'up' ? TrendingUp : vital.trend === 'down' ? TrendingDown : null
            
            return (
              <Card key={index} className={`border-2 ${vital.color}`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${vital.color}`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="font-semibold text-lg">{vital.name}</h3>
                    </div>
                    {TrendIcon && (
                      <TrendIcon size={20} className="text-neutral-textSecondary" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{vital.value}</span>
                      <span className="text-neutral-textSecondary">{vital.unit}</span>
                    </div>
                    <p className="text-sm text-neutral-textSecondary mt-1">
                      Updated {vital.lastUpdated}
                    </p>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="primary" className="flex-1 text-sm px-4 py-2">
                      Update
                    </Button>
                    <Button variant="secondary" className="flex-1 text-sm px-4 py-2">
                      History
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Recent History */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Readings</h2>
          <Card>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-neutral-border">
                <div>
                  <p className="font-semibold">Blood Pressure</p>
                  <p className="text-sm text-neutral-textSecondary">Dec 10, 2025 - 10:30 AM</p>
                </div>
                <span className="font-bold text-lg">122/82 mmHg</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-neutral-border">
                <div>
                  <p className="font-semibold">Blood Glucose</p>
                  <p className="text-sm text-neutral-textSecondary">Dec 10, 2025 - 9:00 AM</p>
                </div>
                <span className="font-bold text-lg">98 mg/dL</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-semibold">Weight</p>
                  <p className="text-sm text-neutral-textSecondary">Dec 10, 2025 - 7:00 AM</p>
                </div>
                <span className="font-bold text-lg">75 kg</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}


