'use client'

import { AlertCircle, X } from 'lucide-react'
import Button from '@/components/UI/Button'

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  type?: 'danger' | 'warning' | 'info'
}

export default function ConfirmModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'warning'
}: ConfirmModalProps) {
  if (!isOpen) return null

  const getColor = () => {
    switch (type) {
      case 'danger': return 'bg-error'
      case 'warning': return 'bg-warning'
      default: return 'bg-info'
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className={`${getColor()} text-white p-4 md:p-6 rounded-t-2xl flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <AlertCircle size={24} />
            <h2 className="text-lg md:text-xl font-bold">{title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="min-h-touch min-w-touch flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <p className="text-base text-neutral-text leading-relaxed">{message}</p>
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 border-t border-neutral-border flex gap-3">
          <Button variant="secondary" onClick={onClose} className="flex-1">
            {cancelText}
          </Button>
          <Button 
            variant="primary" 
            onClick={() => {
              onConfirm()
              onClose()
            }} 
            className="flex-1"
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  )
}

