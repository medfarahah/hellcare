'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { Search, Stethoscope, Mail, Phone, CheckCircle, XCircle, Clock, Plus } from 'lucide-react'
import { useState } from 'react'

export default function AdminDoctors() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'verified' | 'pending'>('all')

  const doctors = [
    {
      id: 'DR-001',
      name: 'Dr. Mohamed',
      specialty: 'Cardiology',
      email: 'doctor@demo.com',
      phone: '+253 21 35 00 00',
      patients: 24,
      status: 'verified',
      joined: 'Dec 1, 2024',
      license: 'MC-12345-DJ'
    },
    {
      id: 'DR-002',
      name: 'Dr. Ali',
      specialty: 'General Practice',
      email: 'dr.ali@demo.com',
      phone: '+253 21 35 00 01',
      patients: 18,
      status: 'verified',
      joined: 'Dec 15, 2024',
      license: 'MC-12346-DJ'
    },
    {
      id: 'DR-003',
      name: 'Dr. Moussa',
      specialty: 'Ophthalmology',
      email: 'dr.moussa@demo.com',
      phone: '+253 21 35 00 02',
      patients: 15,
      status: 'verified',
      joined: 'Jan 5, 2025',
      license: 'MC-12347-DJ'
    },
    {
      id: 'DR-004',
      name: 'Dr. Amina Hassan',
      specialty: 'Pediatrics',
      email: 'dr.amina@demo.com',
      phone: '+253 21 35 00 03',
      patients: 0,
      status: 'pending',
      joined: 'Jan 20, 2025',
      license: 'MC-12348-DJ'
    },
  ]

  const filteredDoctors = doctors.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         d.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         d.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === 'all' || d.status === filter
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    if (status === 'verified') return 'bg-success/10 text-success border-success'
    if (status === 'pending') return 'bg-warning/10 text-warning border-warning'
    return 'bg-error/10 text-error border-error'
  }

  const getStatusIcon = (status: string) => {
    if (status === 'verified') return <CheckCircle size={16} />
    if (status === 'pending') return <Clock size={16} />
    return <XCircle size={16} />
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Doctor Management</h1>
            <p className="text-neutral-textSecondary text-lg">Manage and verify doctors</p>
          </div>
          <Button variant="primary">
            <Plus size={20} />
            Add Doctor
          </Button>
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
                placeholder="Search by name, specialty or ID..."
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
                All ({doctors.length})
              </Button>
              <Button 
                variant={filter === 'verified' ? 'primary' : 'secondary'}
                onClick={() => setFilter('verified')}
                className="flex-1 text-sm"
              >
                Verified
              </Button>
              <Button 
                variant={filter === 'pending' ? 'primary' : 'secondary'}
                onClick={() => setFilter('pending')}
                className="flex-1 text-sm"
              >
                Pending
              </Button>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center bg-primary/5">
            <p className="text-3xl font-bold text-primary">{doctors.length}</p>
            <p className="text-neutral-textSecondary">Total Doctors</p>
          </Card>
          <Card className="text-center bg-success/5">
            <p className="text-3xl font-bold text-success">
              {doctors.filter(d => d.status === 'verified').length}
            </p>
            <p className="text-neutral-textSecondary">Verified</p>
          </Card>
          <Card className="text-center bg-warning/5">
            <p className="text-3xl font-bold text-warning">
              {doctors.filter(d => d.status === 'pending').length}
            </p>
            <p className="text-neutral-textSecondary">Pending</p>
          </Card>
          <Card className="text-center bg-info/5">
            <p className="text-3xl font-bold text-info">57</p>
            <p className="text-neutral-textSecondary">Total Patients</p>
          </Card>
        </div>

        {/* Doctors List */}
        <div className="space-y-4">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="text-primary" size={28} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{doctor.name}</h3>
                      <p className="text-sm text-neutral-textSecondary">{doctor.specialty} | {doctor.id}</p>
                      <p className="text-xs text-neutral-textSecondary mt-1">License: {doctor.license}</p>
                    </div>
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(doctor.status)}`}>
                      {getStatusIcon(doctor.status)}
                      {doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-3 text-sm">
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <Mail size={14} />
                      <span className="truncate">{doctor.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <Phone size={14} />
                      <span>{doctor.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <Stethoscope size={14} />
                      <span>{doctor.patients} Patients</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <span>Joined: {doctor.joined}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {doctor.status === 'pending' && (
                      <>
                        <Button variant="primary" className="text-sm px-4 py-2">
                          <CheckCircle size={16} />
                          Verify
                        </Button>
                        <Button variant="secondary" className="text-sm px-4 py-2 text-error border-error">
                          <XCircle size={16} />
                          Reject
                        </Button>
                      </>
                    )}
                    <Button variant="secondary" className="text-sm px-4 py-2">
                      View Profile
                    </Button>
                    <Button variant="secondary" className="text-sm px-4 py-2">
                      View Patients
                    </Button>
                    {doctor.status === 'verified' && (
                      <Button variant="secondary" className="text-sm px-4 py-2 text-warning border-warning">
                        Suspend
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-neutral-textSecondary text-lg">
              No doctors found {searchTerm && `matching "${searchTerm}"`}
            </p>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}

