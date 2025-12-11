'use client'

import { useState } from 'react'
import { X, FileText } from 'lucide-react'
import Button from '@/components/UI/Button'

interface NotesModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  initialNote?: string
  onSave: (note: string) => void
}

export default function NotesModal({ isOpen, onClose, title, initialNote = '', onSave }: NotesModalProps) {
  const [note, setNote] = useState(initialNote)

  if (!isOpen) return null

  const handleSave = () => {
    onSave(note)
    setNote('')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
        {/* Header */}
        <div className="bg-primary text-white p-4 md:p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText size={24} />
            <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
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
          <label className="block text-sm font-semibold mb-2">Add your notes:</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="input min-h-[200px] resize-none"
            placeholder="Type your notes here..."
            autoFocus
          />
          <p className="text-xs text-neutral-textSecondary mt-2">
            {note.length} characters
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 border-t border-neutral-border flex gap-3">
          <Button variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} className="flex-1">
            <FileText size={18} />
            Save Note
          </Button>
        </div>
      </div>
    </div>
  )
}

