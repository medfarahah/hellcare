'use client'

import { useState } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import BookAppointmentModal, { AppointmentData } from '@/components/Appointments/BookAppointmentModal'
import { Plus, Calendar, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function Appointments() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [appointments, setAppointments] = useState([
    {
      doctor: 'Dr. Mohamed',
      specialty: 'Cardiology',
      date: 'Tomorrow, Dec 11',
      time: '10:00 AM',
      location: 'City Medical Center, Room 302',
      status: 'upcoming',
      color: 'border-primary bg-primary-light'
    },
    {
      doctor: 'Dr. Ali',
      specialty: 'General Practice',
      date: 'Dec 18, 2025',
      time: '2:00 PM',
      location: 'Health Clinic, Building A',
      status: 'upcoming',
      color: 'border-neutral-border'
    },
    {
      doctor: 'Dr. Moussa',
      specialty: 'Ophthalmology',
      date: 'Dec 28, 2025',
      time: '11:30 AM',
      location: 'Eye Care Center',
      status: 'upcoming',
      color: 'border-neutral-border'
    },
  ])

  const handleBookAppointment = (appointmentData: AppointmentData) => {
    // Format the date for display
    const dateObj = new Date(appointmentData.date)
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })

    // Add new appointment to the list
    const newAppointment = {
      doctor: appointmentData.doctorName,
      specialty: appointmentData.specialty,
      date: formattedDate,
      time: appointmentData.time,
      location: appointmentData.location,
      status: 'upcoming' as const,
      color: 'border-success bg-success/10'
    }

    setAppointments(prev => [newAppointment, ...prev])
    
    // Show success message
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }
  const pastAppointments = [
    {
      doctor: 'Dr. Ali',
      specialty: 'Neurology',
      date: 'Dec 3, 2025',
      time: '9:00 AM',
      status: 'completed'
    },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Success Message */}
        {showSuccess && (
          <Card className="bg-success/10 border-2 border-success animate-pulse">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-success" size={28} />
              <div>
                <h3 className="font-semibold text-lg text-success">Appointment Booked!</h3>
                <p className="text-neutral-textSecondary">Your appointment has been scheduled successfully.</p>
              </div>
            </div>
          </Card>
        )}

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Appointments</h1>
            <p className="text-neutral-textSecondary text-lg">Manage your doctor visits</p>
          </div>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            <Plus size={20} />
            Book Appointment
          </Button>
        </div>

        {/* Calendar Overview */}
        <Card className="bg-info/5 border-info">
            <div className="flex items-center gap-3">
              <Calendar className="text-info" size={28} />
              <div>
                <h3 className="font-semibold text-lg">Next Appointment</h3>
                <p className="text-neutral-textSecondary">
                  <span className="font-bold">Tomorrow</span> with Dr. Mohamed at 10:00 AM
                </p>
              </div>
            </div>
        </Card>

        {/* Upcoming Appointments */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {appointments.map((apt, index) => (
              <Card key={index} className={`border-2 ${apt.color}`}>
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{apt.doctor}</h3>
                      <p className="text-neutral-textSecondary">{apt.specialty}</p>
                    </div>
                    {apt.status === 'upcoming' && index === 0 && (
                      <span className="bg-primary text-white text-sm px-3 py-1 rounded-full font-semibold">
                        Next
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <Calendar size={18} />
                      <span>{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <Clock size={18} />
                      <span>{apt.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-textSecondary">
                      <MapPin size={18} />
                      <span>{apt.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="primary" className="flex-1 text-sm px-4 py-2">
                      View Details
                    </Button>
                    <Button variant="secondary" className="flex-1 text-sm px-4 py-2">
                      Reschedule
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Appointments */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
          <div className="space-y-3">
            {pastAppointments.map((apt, index) => (
              <Card key={index} className="bg-neutral-bg/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{apt.doctor}</h3>
                    <p className="text-neutral-textSecondary">{apt.specialty}</p>
                    <p className="text-sm text-neutral-textSecondary mt-1">
                      {apt.date} at {apt.time}
                    </p>
                  </div>
                  <Button variant="secondary" className="text-sm px-4 py-2 min-h-0">
                    View Notes
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Book Appointment Modal */}
        <BookAppointmentModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleBookAppointment}
        />
      </div>
    </MainLayout>
  )
}


