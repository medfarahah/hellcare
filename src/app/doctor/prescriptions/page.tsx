'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { FileText, Calendar, User, Pill, Plus, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function DoctorPrescriptions() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all')

  const prescriptions = [
    {
      id: 'RX-001',
      patient: 'Abdifatah Ismail',
      patientId: 'PA-2025-001234',
      medication: 'Metformin 500mg',
      dosage: 'Twice daily with meals',
      duration: '90 days',
      date: 'Dec 11, 2025',
      status: 'approved',
      refills: 2,
      notes: 'For Type 2 Diabetes management'
    },
    {
      id: 'RX-002',
      patient: 'Fatima Hassan',
      patientId: 'PA-2025-001456',
      medication: 'Ibuprofen 400mg',
      dosage: 'Three times daily after meals',
      duration: '14 days',
      date: 'Dec 10, 2025',
      status: 'pending',
      refills: 0,
      notes: 'For arthritis pain management'
    },
    {
      id: 'RX-003',
      patient: 'Ahmed Ibrahim',
      patientId: 'PA-2025-001789',
      medication: 'Atorvastatin 20mg',
      dosage: 'Once daily at bedtime',
      duration: '90 days',
      date: 'Dec 9, 2025',
      status: 'approved',
      refills: 3,
      notes: 'For high cholesterol'
    },
    {
      id: 'RX-004',
      patient: 'Amina Mohamed',
      patientId: 'PA-2025-001012',
      medication: 'Calcium Supplement',
      dosage: 'Twice daily',
      duration: '180 days',
      date: 'Dec 8, 2025',
      status: 'pending',
      refills: 1,
      notes: 'For osteoporosis prevention'
    },
  ]

  const filteredPrescriptions = prescriptions.filter(rx => 
    filter === 'all' || rx.status === filter
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-success/10 text-success border-success'
      case 'pending':
        return 'bg-warning/10 text-warning border-warning'
      case 'cancelled':
        return 'bg-error/10 text-error border-error'
      default:
        return 'bg-neutral-bg text-neutral-textSecondary'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle size={18} />
      case 'pending':
        return <Clock size={18} />
      default:
        return <AlertCircle size={18} />
    }
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Prescriptions</h1>
            <p className="text-neutral-textSecondary text-lg">Manage patient prescriptions</p>
          </div>
          <Button variant="primary">
            <Plus size={20} />
            New Prescription
          </Button>
        </div>

        {/* Filter Buttons */}
        <Card>
          <div className="flex gap-3">
            <Button 
              variant={filter === 'all' ? 'primary' : 'secondary'}
              onClick={() => setFilter('all')}
              className="flex-1"
            >
              All ({prescriptions.length})
            </Button>
            <Button 
              variant={filter === 'pending' ? 'primary' : 'secondary'}
              onClick={() => setFilter('pending')}
              className="flex-1"
            >
              Pending ({prescriptions.filter(rx => rx.status === 'pending').length})
            </Button>
            <Button 
              variant={filter === 'approved' ? 'primary' : 'secondary'}
              onClick={() => setFilter('approved')}
              className="flex-1"
            >
              Approved ({prescriptions.filter(rx => rx.status === 'approved').length})
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center bg-primary/5">
            <p className="text-3xl font-bold text-primary">{prescriptions.length}</p>
            <p className="text-neutral-textSecondary">Total Prescriptions</p>
          </Card>
          <Card className="text-center bg-warning/5">
            <p className="text-3xl font-bold text-warning">
              {prescriptions.filter(rx => rx.status === 'pending').length}
            </p>
            <p className="text-neutral-textSecondary">Pending Approval</p>
          </Card>
          <Card className="text-center bg-success/5">
            <p className="text-3xl font-bold text-success">
              {prescriptions.filter(rx => rx.status === 'approved').length}
            </p>
            <p className="text-neutral-textSecondary">Approved</p>
          </Card>
          <Card className="text-center bg-info/5">
            <p className="text-3xl font-bold text-info">6</p>
            <p className="text-neutral-textSecondary">Refills Due</p>
          </Card>
        </div>

        {/* Prescriptions List */}
        <div className="space-y-4">
          {filteredPrescriptions.map((prescription) => (
            <Card key={prescription.id} className="hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Pill className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{prescription.medication}</h3>
                      <div className="flex items-center gap-2 text-neutral-textSecondary">
                        <User size={16} />
                        <span>{prescription.patient}</span>
                        <span>•</span>
                        <span className="text-sm">{prescription.patientId}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm text-neutral-textSecondary">
                        <Calendar size={14} />
                        <span>{prescription.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border-2 ${getStatusColor(prescription.status)}`}>
                      {getStatusIcon(prescription.status)}
                      {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                    </span>
                    <span className="text-sm text-neutral-textSecondary">
                      {prescription.id}
                    </span>
                  </div>
                </div>

                {/* Prescription Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-neutral-bg p-4 rounded-lg">
                  <div>
                    <p className="text-sm font-semibold text-neutral-textSecondary mb-1">Dosage</p>
                    <p className="font-semibold">{prescription.dosage}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-textSecondary mb-1">Duration</p>
                    <p className="font-semibold">{prescription.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-textSecondary mb-1">Refills</p>
                    <p className="font-semibold">{prescription.refills} remaining</p>
                  </div>
                </div>

                {/* Notes */}
                {prescription.notes && (
                  <div className="border-t border-neutral-border pt-3">
                    <p className="text-sm font-semibold text-neutral-textSecondary mb-1 flex items-center gap-2">
                      <FileText size={16} />
                      Notes
                    </p>
                    <p className="text-neutral-text">{prescription.notes}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {prescription.status === 'pending' && (
                    <>
                      <Button variant="primary" className="text-sm px-4 py-2">
                        <CheckCircle size={18} />
                        Approve
                      </Button>
                      <Button variant="secondary" className="text-sm px-4 py-2">
                        Edit
                      </Button>
                      <Button variant="secondary" className="text-sm px-4 py-2 text-error border-error">
                        Cancel
                      </Button>
                    </>
                  )}
                  {prescription.status === 'approved' && (
                    <>
                      <Button variant="secondary" className="text-sm px-4 py-2">
                        View Details
                      </Button>
                      <Button variant="secondary" className="text-sm px-4 py-2">
                        Print
                      </Button>
                      <Button variant="secondary" className="text-sm px-4 py-2">
                        Refill
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredPrescriptions.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-neutral-textSecondary text-lg">
              No {filter !== 'all' ? filter : ''} prescriptions found
            </p>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}

