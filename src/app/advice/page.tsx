'use client'

import { useState } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import ViewDetailsModal from '@/components/Modals/ViewDetailsModal'
import NotesModal from '@/components/Modals/NotesModal'
import { Plus, Stethoscope, Calendar, AlertCircle } from 'lucide-react'

export default function DoctorAdvice() {
  const [viewModal, setViewModal] = useState<any>(null)
  const [notesModal, setNotesModal] = useState(false)
  const adviceList = [
    {
      doctor: 'Dr. Mohamed',
      specialty: 'Cardiology',
      date: 'Dec 5, 2025',
      title: 'Exercise Recommendations',
      advice: 'Continue with light walking exercises for 30 minutes daily. Avoid strenuous activities until next checkup.',
      priority: 'normal',
      color: 'border-blue-200 bg-blue-50'
    },
    {
      doctor: 'Dr. Ali',
      specialty: 'General Practice',
      date: 'Nov 28, 2025',
      title: 'Medication Timing',
      advice: 'Take Metformin with meals to reduce stomach upset. Stay hydrated throughout the day.',
      priority: 'important',
      color: 'border-warning bg-warning/10'
    },
    {
      doctor: 'Dr. Moussa',
      specialty: 'Ophthalmology',
      date: 'Nov 15, 2025',
      title: 'Eye Care Instructions',
      advice: 'Use prescribed eye drops twice daily. Schedule follow-up in 3 months for vision check.',
      priority: 'normal',
      color: 'border-purple-200 bg-purple-50'
    },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Doctor Advice</h1>
            <p className="text-neutral-textSecondary text-lg">Important instructions from your healthcare providers</p>
          </div>
          <Button variant="primary">
            <Plus size={20} />
            Add Note
          </Button>
        </div>

        {/* Summary Card */}
        <Card className="bg-info/5 border-info">
          <div className="flex items-center gap-3">
            <Stethoscope className="text-info" size={28} />
            <div>
              <h3 className="font-semibold text-lg">Active Advice</h3>
              <p className="text-neutral-textSecondary">
                You have <span className="font-bold text-info">3 active</span> instructions to follow
              </p>
            </div>
          </div>
        </Card>

        {/* Advice List */}
        <div className="space-y-4">
          {adviceList.map((item, index) => (
            <Card key={index} className={`border-2 ${item.color}`}>
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white">
                      <Stethoscope size={24} className="text-neutral-text" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-neutral-textSecondary text-sm">
                        {item.doctor} - {item.specialty}
                      </p>
                    </div>
                  </div>
                  {item.priority === 'important' && (
                    <span className="flex items-center gap-1 bg-warning text-white text-xs px-2 py-1 rounded-full font-semibold">
                      <AlertCircle size={14} />
                      Important
                    </span>
                  )}
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-neutral-text leading-relaxed">{item.advice}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-neutral-textSecondary text-sm">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <Button 
                    variant="secondary" 
                    className="text-sm px-4 py-2 min-h-0"
                    onClick={() => setViewModal({
                      'Title': item.title,
                      'Doctor': item.doctor,
                      'Specialty': item.specialty,
                      'Date': item.date,
                      'Priority': item.priority,
                      'Advice': item.advice
                    })}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Reminder Card */}
        <Card className="bg-primary-light border-primary">
          <div className="flex gap-3">
            <AlertCircle className="text-primary flex-shrink-0" size={24} />
            <div>
              <p className="font-semibold text-lg mb-1">Reminder</p>
              <p className="text-neutral-textSecondary">
                Always consult your doctor before making any changes to your medication or treatment plan.
              </p>
            </div>
          </div>
        </Card>

        {/* Modals */}
        {viewModal && (
          <ViewDetailsModal
            isOpen={!!viewModal}
            onClose={() => setViewModal(null)}
            title="Advice Details"
            data={viewModal}
          />
        )}

        {notesModal && (
          <NotesModal
            isOpen={notesModal}
            onClose={() => setNotesModal(false)}
            title="Add Personal Note"
            onSave={(note) => alert('Note saved!')}
          />
        )}
      </div>
    </MainLayout>
  )
}

