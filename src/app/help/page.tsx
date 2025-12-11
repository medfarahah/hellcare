'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { useAuth } from '@/contexts/AuthContext'
import { HelpCircle, Mail, Phone, MessageCircle, FileText, Video, Search } from 'lucide-react'
import { useState } from 'react'

export default function HelpPage() {
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')

  const faqItems = [
    {
      question: 'How do I add a new medication?',
      answer: 'Go to the Medications page and click the "Add Medication" button. Fill in the medication details including name, dosage, and schedule.',
      category: 'medications'
    },
    {
      question: 'How do I book an appointment?',
      answer: 'Navigate to the Appointments page and click "Book Appointment". Select your doctor, date, time, and reason for visit.',
      category: 'appointments'
    },
    {
      question: 'How do I upload medical records?',
      answer: 'Go to Medical Records page and click "Upload Document". Select the file from your device and add relevant details.',
      category: 'records'
    },
    {
      question: 'How do I change my password?',
      answer: 'Go to Profile > Settings and click "Change Password". Enter your current password and new password.',
      category: 'account'
    },
    {
      question: 'What subscription plan is best for me?',
      answer: 'Standard plan is great for basic tracking. Premium offers unlimited storage, multiple caregivers, and priority support.',
      category: 'subscription'
    },
  ]

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <MainLayout>
      <div className="space-y-4 md:space-y-6 overflow-x-hidden">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-3 mb-3">
            <HelpCircle className="text-primary" size={32} />
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Help & Support</h1>
          <p className="text-neutral-textSecondary text-sm md:text-base lg:text-lg">
            We're here to help you
          </p>
        </div>

        {/* Contact Support */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-base mb-1">Call Us</h3>
            <p className="text-sm text-neutral-textSecondary mb-3">+253 21 35 00 00</p>
            <Button variant="secondary" className="w-full text-sm">
              Call Now
            </Button>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="bg-success/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Mail className="text-success" size={24} />
            </div>
            <h3 className="font-semibold text-base mb-1">Email Us</h3>
            <p className="text-sm text-neutral-textSecondary mb-3 truncate">support@djibcare.dj</p>
            <Button variant="secondary" className="w-full text-sm">
              Send Email
            </Button>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="bg-info/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <MessageCircle className="text-info" size={24} />
            </div>
            <h3 className="font-semibold text-base mb-1">Live Chat</h3>
            <p className="text-sm text-neutral-textSecondary mb-3">Chat with support</p>
            <Button variant="secondary" className="w-full text-sm">
              Start Chat
            </Button>
          </Card>
        </div>

        {/* Search FAQs */}
        <Card>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-textSecondary" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-12"
              placeholder="Search frequently asked questions..."
            />
          </div>
        </Card>

        {/* FAQs */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {filteredFAQ.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-base md:text-lg mb-2 text-primary">
                  {item.question}
                </h3>
                <p className="text-sm md:text-base text-neutral-textSecondary leading-relaxed">
                  {item.answer}
                </p>
                <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </Card>
            ))}
          </div>

          {filteredFAQ.length === 0 && (
            <Card className="text-center py-12">
              <p className="text-neutral-textSecondary">
                No FAQs found matching "{searchTerm}"
              </p>
            </Card>
          )}
        </div>

        {/* Resources */}
        <Card>
          <h2 className="text-base md:text-lg font-semibold mb-4">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button variant="secondary" className="justify-start">
              <FileText size={18} />
              User Guide
            </Button>
            <Button variant="secondary" className="justify-start">
              <Video size={18} />
              Video Tutorials
            </Button>
            <Button variant="secondary" className="justify-start">
              <HelpCircle size={18} />
              Terms of Service
            </Button>
            <Button variant="secondary" className="justify-start">
              <Shield size={18} />
              Privacy Policy
            </Button>
          </div>
        </Card>

        {/* Support Hours */}
        <Card className="bg-primary-light border-primary">
          <h3 className="font-semibold text-base md:text-lg mb-2">Support Hours</h3>
          <p className="text-sm md:text-base text-neutral-textSecondary">
            Monday - Friday: 8:00 AM - 6:00 PM<br />
            Saturday: 9:00 AM - 2:00 PM<br />
            Sunday: Closed
          </p>
          <p className="text-xs md:text-sm text-primary font-semibold mt-2">
            Premium users get 24/7 priority support!
          </p>
        </Card>
      </div>
    </MainLayout>
  )
}

