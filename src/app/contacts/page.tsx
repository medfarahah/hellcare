import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { Plus, Phone, Mail, AlertCircle } from 'lucide-react'

export default function EmergencyContacts() {
  const emergencyContacts = [
    {
      name: 'Emergency Services',
      relationship: 'Emergency',
      phone: '911',
      email: '-',
      priority: 'critical',
      color: 'border-error bg-error/10'
    },
    {
      name: 'Dr. Mohamed (Cardiologist)',
      relationship: 'Primary Doctor',
      phone: '+253 21 35 00 00',
      email: 'dr.mohamed@medical.dj',
      priority: 'high',
      color: 'border-warning bg-warning/10'
    },
    {
      name: 'Peltier Hospital',
      relationship: 'Hospital',
      phone: '+253 21 35 22 31',
      email: 'info@hopital-peltier.dj',
      priority: 'high',
      color: 'border-warning bg-warning/10'
    },
  ]

  const familyContacts = [
    {
      name: 'Mohamed',
      relationship: 'Son',
      phone: '+253 77 12 34 56',
      email: 'mohamed@email.dj',
    },
    {
      name: 'Fatima Hassan',
      relationship: 'Daughter',
      phone: '+253 77 23 45 67',
      email: 'fatima.hassan@email.dj',
    },
    {
      name: 'Ahmed Ibrahim',
      relationship: 'Caregiver',
      phone: '+253 77 34 56 78',
      email: 'ahmed.ibrahim@care.dj',
    },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Emergency Contacts</h1>
            <p className="text-neutral-textSecondary text-lg">Quick access to important contacts</p>
          </div>
          <Button variant="primary">
            <Plus size={20} />
            Add Contact
          </Button>
        </div>

        {/* Emergency Alert */}
        <Card className="bg-error/10 border-2 border-error">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-error" size={28} />
            <div>
              <h3 className="font-semibold text-lg text-error">In Case of Emergency</h3>
              <p className="text-neutral-textSecondary">Call 911 immediately for life-threatening situations</p>
            </div>
          </div>
        </Card>

        {/* Emergency Contacts */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className={`border-2 ${contact.color}`}>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-lg">{contact.name}</h3>
                    <p className="text-neutral-textSecondary">{contact.relationship}</p>
                  </div>

                  <div className="space-y-2">
                    <a 
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-neutral-bg transition-colors"
                    >
                      <Phone size={20} className="text-primary" />
                      <span className="font-semibold text-lg">{contact.phone}</span>
                    </a>
                    {contact.email !== '-' && (
                      <a 
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-neutral-bg transition-colors"
                      >
                        <Mail size={20} className="text-primary" />
                        <span className="text-neutral-textSecondary">{contact.email}</span>
                      </a>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="primary" className="flex-1">
                      <Phone size={18} />
                      Call Now
                    </Button>
                    <Button variant="secondary" className="px-4">
                      Edit
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Family & Caregivers */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Family & Caregivers</h2>
          <div className="space-y-3">
            {familyContacts.map((contact, index) => (
              <Card key={index}>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-lg">{contact.name}</h3>
                    <p className="text-neutral-textSecondary">{contact.relationship}</p>
                  </div>

                  <div className="space-y-2">
                    <a 
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-3 p-2 hover:bg-neutral-bg rounded-lg transition-colors"
                    >
                      <Phone size={18} className="text-primary" />
                      <span className="text-neutral-text">{contact.phone}</span>
                    </a>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-3 p-2 hover:bg-neutral-bg rounded-lg transition-colors"
                    >
                      <Mail size={18} className="text-primary" />
                      <span className="text-neutral-textSecondary text-sm">{contact.email}</span>
                    </a>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="secondary" className="flex-1 text-sm px-4 py-2">
                      <Phone size={16} />
                      Call
                    </Button>
                    <Button variant="secondary" className="flex-1 text-sm px-4 py-2">
                      <Mail size={16} />
                      Email
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

