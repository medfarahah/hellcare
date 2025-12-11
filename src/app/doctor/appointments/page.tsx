'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import ViewDetailsModal from '@/components/Modals/ViewDetailsModal'
import ConfirmModal from '@/components/Modals/ConfirmModal'
import EditModal from '@/components/Modals/EditModal'
import { Calendar, Clock, User, MapPin, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function DoctorAppointments() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [viewModal, setViewModal] = useState<any>(null)
  const [confirmModal, setConfirmModal] = useState<any>(null)
  const [rescheduleModal, setRescheduleModal] = useState<any>(null)

  const appointments = [
    {
      id: 'APT-001',
      time: '09:00 AM',
      patient: 'Abdifatah Ismail',
      patientId: 'PA-2025-001234',
      reason: 'Regular Checkup',
      location: 'Room 302',
      status: 'completed',
      duration: '30 min'
    },
    {
      id: 'APT-002',
      time: '10:00 AM',
      patient: 'Fatima Hassan',
      patientId: 'PA-2025-001456',
      reason: 'Follow-up Visit',
      location: 'Room 302',
      status: 'in-progress',
      duration: '30 min'
    },
    {
      id: 'APT-003',
      time: '11:30 AM',
      patient: 'Ahmed Ibrahim',
      patientId: 'PA-2025-001789',
      reason: 'Initial Consultation',
      location: 'Room 302',
      status: 'scheduled',
      duration: '45 min'
    },
    {
      id: 'APT-004',
      time: '02:00 PM',
      patient: 'Amina Mohamed',
      patientId: 'PA-2025-001012',
      reason: 'Lab Results Review',
      location: 'Room 302',
      status: 'scheduled',
      duration: '30 min'
    },
    {
      id: 'APT-005',
      time: '03:30 PM',
      patient: 'Hassan Omar',
      patientId: 'PA-2025-001567',
      reason: 'Prescription Renewal',
      location: 'Room 302',
      status: 'scheduled',
      duration: '15 min'
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success/10 text-success border-success'
      case 'in-progress':
        return 'bg-warning/10 text-warning border-warning'
      case 'scheduled':
        return 'bg-primary/10 text-primary border-primary'
      case 'cancelled':
        return 'bg-error/10 text-error border-error'
      default:
        return 'bg-neutral-bg text-neutral-textSecondary'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={18} />
      case 'in-progress':
        return <Clock size={18} />
      case 'cancelled':
        return <XCircle size={18} />
      default:
        return <AlertCircle size={18} />
    }
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Appointments</h1>
          <p className="text-neutral-textSecondary text-lg">Manage your patient appointments</p>
        </div>

        {/* Date Selector & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <label className="block text-sm font-semibold mb-2">Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="input"
            />
          </Card>

          <Card className="bg-primary-light border-primary">
            <div className="flex items-center gap-3">
              <Calendar className="text-primary" size={32} />
              <div>
                <p className="text-2xl font-bold">{appointments.length}</p>
                <p className="text-neutral-textSecondary">Appointments Today</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          <Card className="text-center bg-success/5">
            <p className="text-2xl font-bold text-success">1</p>
            <p className="text-xs text-neutral-textSecondary">Completed</p>
          </Card>
          <Card className="text-center bg-warning/5">
            <p className="text-2xl font-bold text-warning">1</p>
            <p className="text-xs text-neutral-textSecondary">In Progress</p>
          </Card>
          <Card className="text-center bg-primary/5">
            <p className="text-2xl font-bold text-primary">3</p>
            <p className="text-xs text-neutral-textSecondary">Scheduled</p>
          </Card>
          <Card className="text-center bg-error/5">
            <p className="text-2xl font-bold text-error">0</p>
            <p className="text-xs text-neutral-textSecondary">Cancelled</p>
          </Card>
          <Card className="text-center bg-info/5">
            <p className="text-2xl font-bold text-info">3h 30m</p>
            <p className="text-xs text-neutral-textSecondary">Total Time</p>
          </Card>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Today's Schedule</h2>
          
          {appointments.map((appointment) => (
            <Card key={appointment.id} className="hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                {/* Time */}
                <div className="flex-shrink-0 text-center">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="text-primary mb-1" size={24} />
                    <p className="font-bold text-sm">{appointment.time}</p>
                    <p className="text-xs text-neutral-textSecondary">{appointment.duration}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{appointment.patient}</h3>
                      <p className="text-neutral-textSecondary text-sm">ID: {appointment.patientId}</p>
                    </div>
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border-2 ${getStatusColor(appointment.status)}`}>
                      {getStatusIcon(appointment.status)}
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1).replace('-', ' ')}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <User size={16} />
                      <span className="text-sm">{appointment.reason}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <MapPin size={16} />
                      <span className="text-sm">{appointment.location}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 flex-wrap">
                    {appointment.status === 'scheduled' && (
                      <>
                        <Button 
                          variant="primary" 
                          className="text-sm px-4 py-2"
                          onClick={() => alert(`Starting consultation with ${appointment.patient}`)}
                        >
                          Start Consultation
                        </Button>
                        <Button 
                          variant="secondary" 
                          className="text-sm px-4 py-2"
                          onClick={() => setRescheduleModal({
                            patient: appointment.patient,
                            date: selectedDate,
                            time: appointment.time
                          })}
                        >
                          Reschedule
                        </Button>
                        <Button 
                          variant="secondary" 
                          className="text-sm px-4 py-2"
                          onClick={() => setConfirmModal({
                            type: 'cancel',
                            patient: appointment.patient,
                            time: appointment.time
                          })}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                    {appointment.status === 'in-progress' && (
                      <>
                        <Button 
                          variant="primary" 
                          className="text-sm px-4 py-2"
                          onClick={() => setConfirmModal({
                            type: 'complete',
                            patient: appointment.patient,
                            time: appointment.time
                          })}
                        >
                          Complete
                        </Button>
                        <Button 
                          variant="secondary" 
                          className="text-sm px-4 py-2"
                          onClick={() => alert('Add notes feature')}
                        >
                          Add Notes
                        </Button>
                      </>
                    )}
                    {appointment.status === 'completed' && (
                      <Button 
                        variant="secondary" 
                        className="text-sm px-4 py-2"
                        onClick={() => setViewModal({
                          'Patient': appointment.patient,
                          'Patient ID': appointment.patientId,
                          'Time': appointment.time,
                          'Reason': appointment.reason,
                          'Location': appointment.location,
                          'Duration': appointment.duration,
                          'Status': 'Completed',
                          'Notes': 'Consultation completed successfully'
                        })}
                      >
                        View Details
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modals */}
        {viewModal && (
          <ViewDetailsModal
            isOpen={!!viewModal}
            onClose={() => setViewModal(null)}
            title="Appointment Details"
            data={viewModal}
          />
        )}

        {confirmModal && (
          <ConfirmModal
            isOpen={!!confirmModal}
            onClose={() => setConfirmModal(null)}
            onConfirm={() => {
              if (confirmModal.type === 'complete') {
                alert(`Consultation with ${confirmModal.patient} completed!`)
              } else if (confirmModal.type === 'cancel') {
                alert(`Appointment with ${confirmModal.patient} cancelled`)
              }
            }}
            title={confirmModal?.type === 'complete' ? 'Complete Consultation' : 'Cancel Appointment'}
            message={confirmModal?.type === 'complete' 
              ? `Mark consultation with ${confirmModal?.patient} as complete?`
              : `Cancel appointment with ${confirmModal?.patient} at ${confirmModal?.time}?`
            }
            confirmText={confirmModal?.type === 'complete' ? 'Yes, Complete' : 'Yes, Cancel'}
            type={confirmModal?.type === 'complete' ? 'info' : 'danger'}
          />
        )}

        {rescheduleModal && (
          <EditModal
            isOpen={!!rescheduleModal}
            onClose={() => setRescheduleModal(null)}
            title="Reschedule Appointment"
            fields={[
              { key: 'date', label: 'New Date', type: 'date' },
              { key: 'time', label: 'New Time', type: 'time' },
              { key: 'reason', label: 'Reason', type: 'textarea', placeholder: 'Reason for rescheduling...' }
            ]}
            initialData={rescheduleModal}
            onSave={(data) => alert(`Appointment rescheduled to ${data.date} at ${data.time}`)}
          />
        )}
      </div>
    </MainLayout>
  )
}

