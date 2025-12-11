'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { Activity, Calendar, User, FileText, Download, Eye, CheckCircle, AlertCircle, Search } from 'lucide-react'
import { useState } from 'react'

export default function DoctorLabResults() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'pending' | 'reviewed'>('all')

  const labResults = [
    {
      id: 'LAB-001',
      patient: 'Abdifatah Ismail',
      patientId: 'PA-2025-001234',
      testType: 'Complete Blood Count (CBC)',
      date: 'Dec 11, 2025',
      time: '9:00 AM',
      status: 'pending',
      priority: 'normal',
      results: {
        'WBC': '7.5 × 10⁹/L (Normal: 4-11)',
        'RBC': '4.8 × 10¹²/L (Normal: 4.5-5.5)',
        'Hemoglobin': '14.2 g/dL (Normal: 13-17)',
        'Platelets': '250 × 10⁹/L (Normal: 150-400)'
      }
    },
    {
      id: 'LAB-002',
      patient: 'Fatima Hassan',
      patientId: 'PA-2025-001456',
      testType: 'Lipid Panel',
      date: 'Dec 10, 2025',
      time: '10:30 AM',
      status: 'reviewed',
      priority: 'normal',
      results: {
        'Total Cholesterol': '195 mg/dL (Normal: <200)',
        'LDL': '115 mg/dL (Normal: <130)',
        'HDL': '52 mg/dL (Normal: >40)',
        'Triglycerides': '140 mg/dL (Normal: <150)'
      }
    },
    {
      id: 'LAB-003',
      patient: 'Ahmed Ibrahim',
      patientId: 'PA-2025-001789',
      testType: 'Blood Glucose (Fasting)',
      date: 'Dec 10, 2025',
      time: '8:00 AM',
      status: 'pending',
      priority: 'urgent',
      results: {
        'Fasting Glucose': '126 mg/dL (Normal: 70-100)',
        'HbA1c': '6.8% (Normal: <5.7%)'
      }
    },
    {
      id: 'LAB-004',
      patient: 'Amina Mohamed',
      patientId: 'PA-2025-001012',
      testType: 'Bone Density Scan',
      date: 'Dec 9, 2025',
      time: '2:00 PM',
      status: 'reviewed',
      priority: 'normal',
      results: {
        'T-Score': '-1.8 (Osteopenia)',
        'Z-Score': '-1.5'
      }
    },
  ]

  const filteredResults = labResults.filter(result => {
    const matchesSearch = result.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.testType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === 'all' || result.status === filter
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    return status === 'reviewed' 
      ? 'bg-success/10 text-success border-success'
      : 'bg-warning/10 text-warning border-warning'
  }

  const getPriorityColor = (priority: string) => {
    return priority === 'urgent'
      ? 'bg-error/10 text-error'
      : 'bg-neutral-bg text-neutral-textSecondary'
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Lab Results</h1>
          <p className="text-neutral-textSecondary text-lg">Review patient laboratory test results</p>
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
                placeholder="Search by patient or test type..."
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
                variant={filter === 'pending' ? 'primary' : 'secondary'}
                onClick={() => setFilter('pending')}
                className="flex-1 text-sm"
              >
                Pending
              </Button>
              <Button 
                variant={filter === 'reviewed' ? 'primary' : 'secondary'}
                onClick={() => setFilter('reviewed')}
                className="flex-1 text-sm"
              >
                Reviewed
              </Button>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center bg-primary/5">
            <p className="text-3xl font-bold text-primary">{labResults.length}</p>
            <p className="text-neutral-textSecondary">Total Results</p>
          </Card>
          <Card className="text-center bg-warning/5">
            <p className="text-3xl font-bold text-warning">
              {labResults.filter(r => r.status === 'pending').length}
            </p>
            <p className="text-neutral-textSecondary">Pending Review</p>
          </Card>
          <Card className="text-center bg-error/5">
            <p className="text-3xl font-bold text-error">
              {labResults.filter(r => r.priority === 'urgent').length}
            </p>
            <p className="text-neutral-textSecondary">Urgent</p>
          </Card>
          <Card className="text-center bg-success/5">
            <p className="text-3xl font-bold text-success">
              {labResults.filter(r => r.status === 'reviewed').length}
            </p>
            <p className="text-neutral-textSecondary">Reviewed</p>
          </Card>
        </div>

        {/* Lab Results List */}
        <div className="space-y-4">
          {filteredResults.map((result) => (
            <Card key={result.id} className={`hover:shadow-lg transition-shadow ${result.priority === 'urgent' ? 'border-2 border-error' : ''}`}>
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Activity className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{result.testType}</h3>
                      <div className="flex items-center gap-2 text-neutral-textSecondary mb-1">
                        <User size={16} />
                        <span>{result.patient}</span>
                        <span>•</span>
                        <span className="text-sm">{result.patientId}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-textSecondary">
                        <Calendar size={14} />
                        <span>{result.date} at {result.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border-2 ${getStatusColor(result.status)}`}>
                      {result.status === 'reviewed' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                      {result.status.charAt(0).toUpperCase() + result.status.slice(1)}
                    </span>
                    {result.priority === 'urgent' && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-error text-white">
                        URGENT
                      </span>
                    )}
                  </div>
                </div>

                {/* Test Results */}
                <div className="bg-neutral-bg p-4 rounded-lg">
                  <p className="text-sm font-semibold text-neutral-textSecondary mb-3 flex items-center gap-2">
                    <FileText size={16} />
                    Test Results
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(result.results).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-semibold">{key}:</span>
                        <span className="text-neutral-textSecondary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {result.status === 'pending' && (
                    <>
                      <Button variant="primary" className="text-sm px-4 py-2">
                        <CheckCircle size={18} />
                        Review & Approve
                      </Button>
                      <Button variant="secondary" className="text-sm px-4 py-2">
                        Add Comments
                      </Button>
                    </>
                  )}
                  <Button variant="secondary" className="text-sm px-4 py-2">
                    <Eye size={18} />
                    Full Report
                  </Button>
                  <Button variant="secondary" className="text-sm px-4 py-2">
                    <Download size={18} />
                    Download
                  </Button>
                  <Button variant="secondary" className="text-sm px-4 py-2">
                    Share with Patient
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-neutral-textSecondary text-lg">
              No lab results found {searchTerm && `matching "${searchTerm}"`}
            </p>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}

