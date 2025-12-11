'use client'

import { useState } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import ViewDetailsModal from '@/components/Modals/ViewDetailsModal'
import ConfirmModal from '@/components/Modals/ConfirmModal'
import { Plus, FileText, Download, Eye } from 'lucide-react'

export default function MedicalRecords() {
  const [viewModal, setViewModal] = useState<any>(null)
  const [deleteModal, setDeleteModal] = useState<any>(null)
  const records = [
    {
      title: 'Lab Results - Blood Test',
      date: 'Dec 5, 2025',
      type: 'Lab Report',
      doctor: 'Dr. Mohamed',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Prescription - Metformin',
      date: 'Nov 28, 2025',
      type: 'Prescription',
      doctor: 'Dr. Ali',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'X-Ray - Chest',
      date: 'Nov 15, 2025',
      type: 'Imaging',
      doctor: 'Dr. Moussa',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Consultation Notes',
      date: 'Nov 10, 2025',
      type: 'Consultation',
      doctor: 'Dr. Ali',
      color: 'bg-orange-50 border-orange-200'
    },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Medical Records</h1>
            <p className="text-neutral-textSecondary text-lg">Access your health documents</p>
          </div>
          <Button variant="primary">
            <Plus size={20} />
            Upload Document
          </Button>
        </div>

        {/* Info Card */}
        <Card className="bg-primary-light border-primary">
          <div className="flex items-center gap-3">
            <FileText className="text-primary" size={28} />
            <div>
              <h3 className="font-semibold text-lg">Document Storage</h3>
              <p className="text-neutral-textSecondary">
                You have <span className="font-bold text-primary">12 documents</span> stored securely
              </p>
            </div>
          </div>
        </Card>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-neutral-textSecondary">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">5</div>
                <p className="text-sm font-semibold">Lab Reports</p>
              </div>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">3</div>
                <p className="text-sm font-semibold">Prescriptions</p>
              </div>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">2</div>
                <p className="text-sm font-semibold">Imaging</p>
              </div>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">2</div>
                <p className="text-sm font-semibold">Consultations</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Documents */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Documents</h2>
          <div className="space-y-3">
            {records.map((record, index) => (
              <Card key={index} className={`border-2 ${record.color}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 rounded-lg bg-white">
                      <FileText size={24} className="text-neutral-text" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{record.title}</h3>
                      <div className="space-y-1 text-neutral-textSecondary text-sm">
                        <p><span className="font-semibold">Type:</span> {record.type}</p>
                        <p><span className="font-semibold">Date:</span> {record.date}</p>
                        <p><span className="font-semibold">Doctor:</span> {record.doctor}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button 
                      className="min-h-touch min-w-touch flex items-center justify-center hover:bg-neutral-bg rounded-lg transition-colors"
                      onClick={() => setViewModal({
                        'Document Title': record.title,
                        'Type': record.type,
                        'Date': record.date,
                        'Doctor': record.doctor,
                        'File Size': '2.4 MB',
                        'Format': 'PDF',
                        'Status': 'Available'
                      })}
                    >
                      <Eye size={20} className="text-neutral-textSecondary" />
                    </button>
                    <button 
                      className="min-h-touch min-w-touch flex items-center justify-center hover:bg-neutral-bg rounded-lg transition-colors"
                      onClick={() => alert(`Downloading ${record.title}...`)}
                    >
                      <Download size={20} className="text-neutral-textSecondary" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Modals */}
        {viewModal && (
          <ViewDetailsModal
            isOpen={!!viewModal}
            onClose={() => setViewModal(null)}
            title="Document Details"
            data={viewModal}
          />
        )}

        {deleteModal && (
          <ConfirmModal
            isOpen={!!deleteModal}
            onClose={() => setDeleteModal(null)}
            onConfirm={() => alert('Document deleted')}
            title="Delete Document"
            message="Are you sure you want to delete this document? This action cannot be undone."
            confirmText="Yes, Delete"
            type="danger"
          />
        )}
      </div>
    </MainLayout>
  )
}


