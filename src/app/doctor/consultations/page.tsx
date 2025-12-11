'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { Stethoscope, Calendar, User, FileText, Plus, Search } from 'lucide-react'
import { useState } from 'react'

export default function DoctorConsultations() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddingNote, setIsAddingNote] = useState(false)

  const consultations = [
    {
      id: 'CONS-001',
      date: 'Dec 11, 2025',
      time: '10:00 AM',
      patient: 'Abdifatah Ismail',
      patientId: 'PA-2025-001234',
      diagnosis: 'Hypertension - Well Controlled',
      symptoms: 'Regular checkup, no new complaints',
      prescription: 'Continue current medications',
      followUp: 'Next visit in 3 months',
      notes: 'Blood pressure: 125/82 mmHg. Patient is compliant with medications. Advised to maintain low-sodium diet and regular exercise.'
    },
    {
      id: 'CONS-002',
      date: 'Dec 10, 2025',
      time: '2:00 PM',
      patient: 'Fatima Hassan',
      patientId: 'PA-2025-001456',
      diagnosis: 'Arthritis - Osteoarthritis',
      symptoms: 'Joint pain in knees, reduced mobility',
      prescription: 'NSAIDs, Physical therapy recommended',
      followUp: 'Follow-up in 2 weeks',
      notes: 'Increased pain in left knee. Recommended physical therapy exercises. Prescribed anti-inflammatory medication for 2 weeks.'
    },
    {
      id: 'CONS-003',
      date: 'Dec 9, 2025',
      time: '11:30 AM',
      patient: 'Ahmed Ibrahim',
      patientId: 'PA-2025-001789',
      diagnosis: 'High Cholesterol',
      symptoms: 'Routine checkup, feeling healthy',
      prescription: 'Statin medication',
      followUp: 'Lab tests in 1 month',
      notes: 'Initial consultation. Total cholesterol: 245 mg/dL. Started on statin therapy. Advised dietary modifications and regular exercise.'
    },
  ]

  const filteredConsultations = consultations.filter(consultation =>
    consultation.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultation.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultation.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Consultations</h1>
            <p className="text-neutral-textSecondary text-lg">View and manage consultation notes</p>
          </div>
          <Button variant="primary" onClick={() => setIsAddingNote(true)}>
            <Plus size={20} />
            New Note
          </Button>
        </div>

        {/* Search Bar */}
        <Card>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-textSecondary" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-12"
              placeholder="Search by patient name, ID, or diagnosis..."
            />
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center bg-primary/5">
            <p className="text-3xl font-bold text-primary">{consultations.length}</p>
            <p className="text-neutral-textSecondary">Total Consultations</p>
          </Card>
          <Card className="text-center bg-success/5">
            <p className="text-3xl font-bold text-success">1</p>
            <p className="text-neutral-textSecondary">Today</p>
          </Card>
          <Card className="text-center bg-info/5">
            <p className="text-3xl font-bold text-info">8</p>
            <p className="text-neutral-textSecondary">This Week</p>
          </Card>
          <Card className="text-center bg-warning/5">
            <p className="text-3xl font-bold text-warning">3</p>
            <p className="text-neutral-textSecondary">Follow-ups Due</p>
          </Card>
        </div>

        {/* Consultations List */}
        <div className="space-y-4">
          {filteredConsultations.map((consultation) => (
            <Card key={consultation.id} className="hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Stethoscope className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{consultation.patient}</h3>
                      <p className="text-neutral-textSecondary">ID: {consultation.patientId}</p>
                      <div className="flex items-center gap-3 mt-2 text-sm text-neutral-textSecondary">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{consultation.date}</span>
                        </div>
                        <span>•</span>
                        <span>{consultation.time}</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {consultation.id}
                  </span>
                </div>

                {/* Consultation Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-neutral-border pt-4">
                  <div>
                    <p className="text-sm font-semibold text-neutral-textSecondary mb-1">Diagnosis</p>
                    <p className="font-semibold">{consultation.diagnosis}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-textSecondary mb-1">Symptoms</p>
                    <p>{consultation.symptoms}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-textSecondary mb-1">Prescription</p>
                    <p>{consultation.prescription}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-textSecondary mb-1">Follow-up</p>
                    <p className="text-warning font-semibold">{consultation.followUp}</p>
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-neutral-bg p-4 rounded-lg">
                  <p className="text-sm font-semibold text-neutral-textSecondary mb-2 flex items-center gap-2">
                    <FileText size={16} />
                    Consultation Notes
                  </p>
                  <p className="text-neutral-text leading-relaxed">{consultation.notes}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="primary" className="text-sm px-4 py-2">
                    Edit Notes
                  </Button>
                  <Button variant="secondary" className="text-sm px-4 py-2">
                    View Full Record
                  </Button>
                  <Button variant="secondary" className="text-sm px-4 py-2">
                    Print
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredConsultations.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-neutral-textSecondary text-lg">
              No consultations found matching "{searchTerm}"
            </p>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}

