'use client'

import { useState } from 'react'
import Button from '@/components/UI/Button'
import { X, Calendar, Clock, MapPin, User, Stethoscope, FileText } from 'lucide-react'

interface BookAppointmentModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (appointment: AppointmentData) => void
}

export interface AppointmentData {
  doctorName: string
  specialty: string
  date: string
  time: string
  location: string
  reason: string
  notes: string
}

export default function BookAppointmentModal({ isOpen, onClose, onSubmit }: BookAppointmentModalProps) {
  const [formData, setFormData] = useState<AppointmentData>({
    doctorName: '',
    specialty: '',
    date: '',
    time: '',
    location: '',
    reason: '',
    notes: ''
  })

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentData, string>>>({})

  const handleChange = (field: keyof AppointmentData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AppointmentData, string>> = {}

    if (!formData.doctorName.trim()) newErrors.doctorName = 'Doctor name is required'
    if (!formData.specialty.trim()) newErrors.specialty = 'Specialty is required'
    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'
    if (!formData.location.trim()) newErrors.location = 'Location is required'
    if (!formData.reason.trim()) newErrors.reason = 'Reason is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validate()) {
      onSubmit(formData)
      // Reset form
      setFormData({
        doctorName: '',
        specialty: '',
        date: '',
        time: '',
        location: '',
        reason: '',
        notes: ''
      })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-primary text-white p-6 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-2xl font-bold">Book New Appointment</h2>
          <button 
            onClick={onClose}
            className="min-h-touch min-w-touch flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Doctor Name */}
          <div>
            <label className="flex items-center gap-2 text-base font-semibold mb-2">
              <User size={20} className="text-primary" />
              Doctor Name *
            </label>
              <input
                type="text"
                value={formData.doctorName}
                onChange={(e) => handleChange('doctorName', e.target.value)}
                className={`input ${errors.doctorName ? 'border-error' : ''}`}
                placeholder="Dr. Mohamed"
              />
            {errors.doctorName && (
              <p className="text-error text-sm mt-1">{errors.doctorName}</p>
            )}
          </div>

          {/* Specialty */}
          <div>
            <label className="flex items-center gap-2 text-base font-semibold mb-2">
              <Stethoscope size={20} className="text-primary" />
              Specialty *
            </label>
            <select
              value={formData.specialty}
              onChange={(e) => handleChange('specialty', e.target.value)}
              className={`input ${errors.specialty ? 'border-error' : ''}`}
            >
              <option value="">Select Specialty</option>
              <option value="Cardiology">Cardiology</option>
              <option value="General Practice">General Practice</option>
              <option value="Neurology">Neurology</option>
              <option value="Ophthalmology">Ophthalmology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Psychiatry">Psychiatry</option>
              <option value="Other">Other</option>
            </select>
            {errors.specialty && (
              <p className="text-error text-sm mt-1">{errors.specialty}</p>
            )}
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date */}
            <div>
              <label className="flex items-center gap-2 text-base font-semibold mb-2">
                <Calendar size={20} className="text-primary" />
                Date *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className={`input ${errors.date ? 'border-error' : ''}`}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.date && (
                <p className="text-error text-sm mt-1">{errors.date}</p>
              )}
            </div>

            {/* Time */}
            <div>
              <label className="flex items-center gap-2 text-base font-semibold mb-2">
                <Clock size={20} className="text-primary" />
                Time *
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleChange('time', e.target.value)}
                className={`input ${errors.time ? 'border-error' : ''}`}
              />
              {errors.time && (
                <p className="text-error text-sm mt-1">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="flex items-center gap-2 text-base font-semibold mb-2">
              <MapPin size={20} className="text-primary" />
              Location *
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className={`input ${errors.location ? 'border-error' : ''}`}
              placeholder="City Medical Center, Room 302"
            />
            {errors.location && (
              <p className="text-error text-sm mt-1">{errors.location}</p>
            )}
          </div>

          {/* Reason for Visit */}
          <div>
            <label className="flex items-center gap-2 text-base font-semibold mb-2">
              <FileText size={20} className="text-primary" />
              Reason for Visit *
            </label>
            <input
              type="text"
              value={formData.reason}
              onChange={(e) => handleChange('reason', e.target.value)}
              className={`input ${errors.reason ? 'border-error' : ''}`}
              placeholder="Regular checkup, Follow-up, etc."
            />
            {errors.reason && (
              <p className="text-error text-sm mt-1">{errors.reason}</p>
            )}
          </div>

          {/* Additional Notes */}
          <div>
            <label className="flex items-center gap-2 text-base font-semibold mb-2">
              <FileText size={20} className="text-primary" />
              Additional Notes (Optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              className="input min-h-[100px] resize-none"
              placeholder="Any additional information..."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="submit" variant="primary" className="flex-1">
              <Calendar size={20} />
              Book Appointment
            </Button>
            <Button type="button" variant="secondary" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

