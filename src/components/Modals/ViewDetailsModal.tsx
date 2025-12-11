'use client'

import { X } from 'lucide-react'
import Button from '@/components/UI/Button'

interface ViewDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  data: Record<string, any>
}

export default function ViewDetailsModal({ isOpen, onClose, title, data }: ViewDetailsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-primary text-white p-4 md:p-6 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          <button 
            onClick={onClose}
            className="min-h-touch min-w-touch flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-4">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="border-b border-neutral-border pb-3 last:border-0">
              <p className="text-sm font-semibold text-neutral-textSecondary mb-1 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p className="text-base font-semibold break-words">
                {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 border-t border-neutral-border">
          <Button variant="secondary" onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

