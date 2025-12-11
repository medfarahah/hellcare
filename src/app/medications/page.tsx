'use client'

import { useState } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import ViewDetailsModal from '@/components/Modals/ViewDetailsModal'
import EditModal from '@/components/Modals/EditModal'
import { Plus, Clock, Pill } from 'lucide-react'

export default function Medications() {
  const [viewDetailsModal, setViewDetailsModal] = useState<any>(null)
  const [editModal, setEditModal] = useState<any>(null)
  const medications = [
    { 
      name: 'Aspirin', 
      dosage: '100mg', 
      frequency: 'Once daily', 
      time: '8:00 AM',
      status: 'active',
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      name: 'Metformin', 
      dosage: '500mg', 
      frequency: 'Twice daily', 
      time: '8:00 AM, 8:00 PM',
      status: 'active',
      color: 'bg-green-100 text-green-600'
    },
    { 
      name: 'Vitamin D', 
      dosage: '1000IU', 
      frequency: 'Once daily', 
      time: '8:00 PM',
      status: 'active',
      color: 'bg-yellow-100 text-yellow-600'
    },
    { 
      name: 'Lisinopril', 
      dosage: '10mg', 
      frequency: 'Once daily', 
      time: '8:00 AM',
      status: 'active',
      color: 'bg-purple-100 text-purple-600'
    },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Medications</h1>
            <p className="text-neutral-textSecondary text-lg">Manage your medication schedule</p>
          </div>
          <Button variant="primary">
            <Plus size={20} />
            Add Medication
          </Button>
        </div>

        {/* Schedule Overview */}
        <Card className="bg-primary-light">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="text-primary" size={24} />
            <h3 className="font-semibold text-lg">Today's Schedule</h3>
          </div>
          <p className="text-neutral-textSecondary">
            You have <span className="font-bold text-primary">5 doses</span> to take today. 
            Next dose: <span className="font-bold">Metformin at 12:00 PM</span>
          </p>
        </Card>

        {/* Medications List */}
        <div className="space-y-4">
          {medications.map((med, index) => (
            <Card key={index}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${med.color}`}>
                  <Pill size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{med.name}</h3>
                  <div className="space-y-1 text-neutral-textSecondary">
                    <p className="text-base">
                      <span className="font-semibold">Dosage:</span> {med.dosage}
                    </p>
                    <p className="text-base">
                      <span className="font-semibold">Frequency:</span> {med.frequency}
                    </p>
                    <p className="text-base">
                      <span className="font-semibold">Time:</span> {med.time}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button 
                    variant="secondary" 
                    className="text-sm px-4 py-2 min-h-0"
                    onClick={() => setEditModal({
                      name: med.name,
                      dosage: med.dosage,
                      frequency: med.frequency,
                      time: med.time
                    })}
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="text-sm px-4 py-2 min-h-0"
                    onClick={() => setViewDetailsModal({
                      'Medication Name': med.name,
                      'Dosage': med.dosage,
                      'Frequency': med.frequency,
                      'Time': med.time,
                      'Status': med.status,
                      'Prescribed By': 'Dr. Mohamed',
                      'Start Date': 'Jan 15, 2025',
                      'Refills Remaining': '2'
                    })}
                  >
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modals */}
        {viewDetailsModal && (
          <ViewDetailsModal
            isOpen={!!viewDetailsModal}
            onClose={() => setViewDetailsModal(null)}
            title="Medication Details"
            data={viewDetailsModal}
          />
        )}

        {editModal && (
          <EditModal
            isOpen={!!editModal}
            onClose={() => setEditModal(null)}
            title="Edit Medication"
            fields={[
              { key: 'name', label: 'Medication Name', type: 'text', placeholder: 'e.g., Aspirin' },
              { key: 'dosage', label: 'Dosage', type: 'text', placeholder: 'e.g., 100mg' },
              { key: 'frequency', label: 'Frequency', type: 'select', options: ['Once daily', 'Twice daily', 'Three times daily', 'As needed'] },
              { key: 'time', label: 'Time(s)', type: 'text', placeholder: 'e.g., 8:00 AM' }
            ]}
            initialData={editModal}
            onSave={(data) => {
              alert(`Medication updated: ${data.name}`)
            }}
          />
        )}
      </div>
    </MainLayout>
  )
}



