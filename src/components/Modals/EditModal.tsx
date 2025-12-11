'use client'

import { useState } from 'react'
import { X, Edit, Save } from 'lucide-react'
import Button from '@/components/UI/Button'

interface Field {
  key: string
  label: string
  type: 'text' | 'number' | 'email' | 'tel' | 'date' | 'time' | 'textarea' | 'select'
  options?: string[]
  placeholder?: string
}

interface EditModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  fields: Field[]
  initialData: Record<string, any>
  onSave: (data: Record<string, any>) => void
}

export default function EditModal({ isOpen, onClose, title, fields, initialData, onSave }: EditModalProps) {
  const [formData, setFormData] = useState(initialData)

  if (!isOpen) return null

  const handleChange = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    onSave(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-primary text-white p-4 md:p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Edit size={24} />
            <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="min-h-touch min-w-touch flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="p-4 md:p-6 space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-semibold mb-2">{field.label}</label>
              
              {field.type === 'textarea' ? (
                <textarea
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className="input min-h-[100px] resize-none"
                  placeholder={field.placeholder}
                />
              ) : field.type === 'select' ? (
                <select
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className="input"
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className="input"
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 border-t border-neutral-border flex gap-3">
          <Button variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} className="flex-1">
            <Save size={18} />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}

