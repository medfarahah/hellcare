'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { useAuth } from '@/contexts/AuthContext'
import { Settings, Bell, Shield, Globe, Moon, Smartphone, Save } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const { user } = useAuth()

  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    smsAlerts: false,
    medicationReminders: true,
    appointmentReminders: true,
    language: 'en',
    darkMode: false,
    textSize: 'medium',
    biometricAuth: false,
  })

  const handleChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    alert('Settings saved successfully!')
  }

  return (
    <MainLayout>
      <div className="space-y-4 md:space-y-6 overflow-x-hidden max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">Settings</h1>
            <p className="text-neutral-textSecondary text-sm md:text-base lg:text-lg">Manage your app preferences</p>
          </div>
          <Button variant="primary" onClick={handleSave} className="flex-shrink-0">
            <Save size={18} />
            <span className="hidden sm:inline">Save</span>
          </Button>
        </div>

        {/* Notifications */}
        <Card>
          <h2 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2">
            <Bell className="text-primary" size={20} />
            Notifications
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg">
              <div className="min-w-0 flex-1 pr-3">
                <p className="font-semibold text-sm md:text-base">Push Notifications</p>
                <p className="text-xs md:text-sm text-neutral-textSecondary">Receive app notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) => handleChange('notifications', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg">
              <div className="min-w-0 flex-1 pr-3">
                <p className="font-semibold text-sm md:text-base">Email Alerts</p>
                <p className="text-xs md:text-sm text-neutral-textSecondary">Receive email notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                <input
                  type="checkbox"
                  checked={settings.emailAlerts}
                  onChange={(e) => handleChange('emailAlerts', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg">
              <div className="min-w-0 flex-1 pr-3">
                <p className="font-semibold text-sm md:text-base">SMS Alerts</p>
                <p className="text-xs md:text-sm text-neutral-textSecondary">Receive SMS notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                <input
                  type="checkbox"
                  checked={settings.smsAlerts}
                  onChange={(e) => handleChange('smsAlerts', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg">
              <div className="min-w-0 flex-1 pr-3">
                <p className="font-semibold text-sm md:text-base">Medication Reminders</p>
                <p className="text-xs md:text-sm text-neutral-textSecondary">Get reminded to take meds</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                <input
                  type="checkbox"
                  checked={settings.medicationReminders}
                  onChange={(e) => handleChange('medicationReminders', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg">
              <div className="min-w-0 flex-1 pr-3">
                <p className="font-semibold text-sm md:text-base">Appointment Reminders</p>
                <p className="text-xs md:text-sm text-neutral-textSecondary">Get reminded of appointments</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                <input
                  type="checkbox"
                  checked={settings.appointmentReminders}
                  onChange={(e) => handleChange('appointmentReminders', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card>
          <h2 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2">
            <Shield className="text-primary" size={20} />
            Security & Privacy
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg">
              <div className="min-w-0 flex-1 pr-3">
                <p className="font-semibold text-sm md:text-base">Biometric Authentication</p>
                <p className="text-xs md:text-sm text-neutral-textSecondary">Use fingerprint/face ID</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                <input
                  type="checkbox"
                  checked={settings.biometricAuth}
                  onChange={(e) => handleChange('biometricAuth', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div className="p-4 bg-neutral-bg rounded-lg">
              <Button variant="secondary" className="w-full">
                Change Password
              </Button>
            </div>
          </div>
        </Card>

        {/* Appearance */}
        <Card>
          <h2 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2">
            <Moon className="text-primary" size={20} />
            Appearance
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg">
              <div className="min-w-0 flex-1 pr-3">
                <p className="font-semibold text-sm md:text-base">Dark Mode</p>
                <p className="text-xs md:text-sm text-neutral-textSecondary">Switch to dark theme</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={(e) => handleChange('darkMode', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Text Size</label>
              <select
                value={settings.textSize}
                onChange={(e) => handleChange('textSize', e.target.value)}
                className="input"
              >
                <option value="small">Small</option>
                <option value="medium">Medium (Recommended)</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Language & Region */}
        <Card>
          <h2 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2">
            <Globe className="text-primary" size={20} />
            Language & Region
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Language</label>
              <select
                value={settings.language}
                onChange={(e) => handleChange('language', e.target.value)}
                className="input"
              >
                <option value="en">English</option>
                <option value="fr">French (Français)</option>
                <option value="ar">Arabic (العربية)</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Device Settings */}
        <Card>
          <h2 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2">
            <Smartphone className="text-primary" size={20} />
            Device Settings
          </h2>
          <div className="space-y-3">
            <div className="p-4 bg-neutral-bg rounded-lg">
              <p className="font-semibold mb-2">This Device</p>
              <p className="text-sm text-neutral-textSecondary mb-3">Windows PC - Last active: Now</p>
              <Button variant="secondary" className="w-full text-sm">
                Manage Devices
              </Button>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pb-6">
          <Button variant="secondary" className="flex-1">
            Reset to Defaults
          </Button>
          <Button variant="primary" onClick={handleSave} className="flex-1">
            <Save size={20} />
            Save All Settings
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}

