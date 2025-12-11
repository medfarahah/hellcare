'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { useAuth } from '@/contexts/AuthContext'
import { Search, User, Phone, Mail, Calendar, FileText } from 'lucide-react'
import { useState } from 'react'

export default function DoctorPatients() {
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')

  const patients = [
    {
      id: 'PA-2025-001234',
      name: 'Abdifatah Ismail',
      age: 70,
      gender: 'Male',
      phone: '+253 77 12 34 56',
      email: 'patient@demo.com',
      lastVisit: 'Dec 5, 2025',
      nextAppointment: 'Tomorrow, 10:00 AM',
      conditions: ['Hypertension', 'Type 2 Diabetes'],
      status: 'active'
    },
    {
      id: 'PA-2025-001456',
      name: 'Fatima Hassan',
      age: 65,
      gender: 'Female',
      phone: '+253 77 23 45 67',
      email: 'fatima.hassan@email.dj',
      lastVisit: 'Nov 28, 2025',
      nextAppointment: 'Today, 11:30 AM',
      conditions: ['Arthritis'],
      status: 'active'
    },
    {
      id: 'PA-2025-001789',
      name: 'Ahmed Ibrahim',
      age: 58,
      gender: 'Male',
      phone: '+253 77 34 56 78',
      email: 'ahmed.ibrahim@care.dj',
      lastVisit: 'Nov 20, 2025',
      nextAppointment: 'Today, 2:00 PM',
      conditions: ['High Cholesterol'],
      status: 'active'
    },
    {
      id: 'PA-2025-001012',
      name: 'Amina Mohamed',
      age: 72,
      gender: 'Female',
      phone: '+253 77 45 67 89',
      email: 'amina.mohamed@email.dj',
      lastVisit: 'Dec 1, 2025',
      nextAppointment: 'Dec 15, 2025',
      conditions: ['Osteoporosis'],
      status: 'active'
    },
  ]

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">My Patients</h1>
          <p className="text-neutral-textSecondary text-lg">
            Manage and view patient information
          </p>
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
              placeholder="Search patients by name or ID..."
            />
          </div>
        </Card>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <p className="text-3xl font-bold text-primary">{patients.length}</p>
            <p className="text-neutral-textSecondary">Total Patients</p>
          </Card>
          <Card className="text-center">
            <p className="text-3xl font-bold text-success">3</p>
            <p className="text-neutral-textSecondary">Today's Visits</p>
          </Card>
          <Card className="text-center">
            <p className="text-3xl font-bold text-warning">2</p>
            <p className="text-neutral-textSecondary">Follow-ups Due</p>
          </Card>
          <Card className="text-center">
            <p className="text-3xl font-bold text-info">5</p>
            <p className="text-neutral-textSecondary">New This Month</p>
          </Card>
        </div>

        {/* Patients List */}
        <div className="space-y-4">
          {filteredPatients.map((patient) => (
            <Card key={patient.id} className="hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                {/* Patient Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="text-primary" size={32} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{patient.name}</h3>
                      <p className="text-neutral-textSecondary">
                        ID: {patient.id} | {patient.age} years | {patient.gender}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {patient.conditions.map((condition, index) => (
                          <span
                            key={index}
                            className="bg-error/10 text-error text-xs px-2 py-1 rounded-full font-semibold"
                          >
                            {condition}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="bg-success/10 text-success text-sm px-3 py-1 rounded-full font-semibold">
                    Active
                  </span>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border-t border-neutral-border pt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="text-primary" size={18} />
                    <span className="text-sm">{patient.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="text-primary" size={18} />
                    <span className="text-sm">{patient.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="text-primary" size={18} />
                    <span className="text-sm">Last: {patient.lastVisit}</span>
                  </div>
                </div>

                {/* Next Appointment */}
                {patient.nextAppointment && (
                  <div className="bg-primary-light p-3 rounded-lg">
                    <p className="text-sm text-neutral-textSecondary">Next Appointment:</p>
                    <p className="font-semibold text-primary">{patient.nextAppointment}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button variant="primary" className="flex-1 text-sm">
                    <FileText size={18} />
                    View Records
                  </Button>
                  <Button variant="secondary" className="flex-1 text-sm">
                    <Calendar size={18} />
                    Schedule Visit
                  </Button>
                  <Button variant="secondary" className="px-4 text-sm">
                    Add Note
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredPatients.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-neutral-textSecondary text-lg">
              No patients found matching "{searchTerm}"
            </p>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}

