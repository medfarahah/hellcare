'use client'

import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { Settings, Bell, Shield, Database, Mail, Globe, DollarSign, Users, Save } from 'lucide-react'
import { useState } from 'react'

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    // General Settings
    siteName: 'DjibCare',
    siteDescription: 'Medical Care Tracker for Djibouti',
    maintenanceMode: false,
    
    // Email Settings
    emailNotifications: true,
    adminEmail: 'admin@djibcare.dj',
    smtpServer: 'smtp.djibcare.dj',
    
    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: '30',
    passwordExpiry: '90',
    
    // Subscription Settings
    allowRegistration: true,
    trialPeriod: '14',
    standardPrice: '3000',
    premiumPrice: '5000',
    
    // Notification Settings
    newUserNotification: true,
    doctorApprovalNotification: true,
    subscriptionNotification: true,
    systemAlertNotification: true,
    
    // Localization
    defaultLanguage: 'fr',
    timezone: 'Africa/Djibouti',
    currency: 'DJF'
  })

  const handleChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    // In production, this would save to backend
    alert('Settings saved successfully!')
  }

  return (
    <MainLayout>
      <div className="space-y-4 md:space-y-6 overflow-x-hidden max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">Settings</h1>
            <p className="text-neutral-textSecondary text-sm md:text-base lg:text-lg">Configure system settings</p>
          </div>
          <Button variant="primary" onClick={handleSave} className="flex-shrink-0">
            <Save size={18} />
            <span className="hidden sm:inline">Save</span>
          </Button>
        </div>

        {/* General Settings */}
        <Card>
          <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
            <Settings className="text-primary" size={20} />
            General Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => handleChange('siteName', e.target.value)}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Site Description</label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) => handleChange('siteDescription', e.target.value)}
                className="input min-h-[80px] resize-none"
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-neutral-bg rounded-lg">
              <div>
                <p className="font-semibold">Maintenance Mode</p>
                <p className="text-sm text-neutral-textSecondary">Put site in maintenance mode</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.maintenanceMode}
                  onChange={(e) => handleChange('maintenanceMode', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </Card>

        {/* Email Settings */}
        <Card>
          <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
            <Mail className="text-primary" size={20} />
            Email Settings
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-neutral-bg rounded-lg">
              <div>
                <p className="font-semibold">Email Notifications</p>
                <p className="text-sm text-neutral-textSecondary">Enable email notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Admin Email</label>
              <input
                type="email"
                value={settings.adminEmail}
                onChange={(e) => handleChange('adminEmail', e.target.value)}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">SMTP Server</label>
              <input
                type="text"
                value={settings.smtpServer}
                onChange={(e) => handleChange('smtpServer', e.target.value)}
                className="input"
              />
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card>
          <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
            <Shield className="text-primary" size={20} />
            Security Settings
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-neutral-bg rounded-lg">
              <div>
                <p className="font-semibold">Two-Factor Authentication</p>
                <p className="text-sm text-neutral-textSecondary">Require 2FA for admin login</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.twoFactorAuth}
                  onChange={(e) => handleChange('twoFactorAuth', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Session Timeout (minutes)</label>
              <input
                type="number"
                value={settings.sessionTimeout}
                onChange={(e) => handleChange('sessionTimeout', e.target.value)}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Password Expiry (days)</label>
              <input
                type="number"
                value={settings.passwordExpiry}
                onChange={(e) => handleChange('passwordExpiry', e.target.value)}
                className="input"
              />
            </div>
          </div>
        </Card>

        {/* Subscription Settings */}
        <Card>
          <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="text-primary" size={20} />
            Subscription Settings
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-neutral-bg rounded-lg">
              <div>
                <p className="font-semibold">Allow New Registrations</p>
                <p className="text-sm text-neutral-textSecondary">Allow users to register</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.allowRegistration}
                  onChange={(e) => handleChange('allowRegistration', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Free Trial Period (days)</label>
              <input
                type="number"
                value={settings.trialPeriod}
                onChange={(e) => handleChange('trialPeriod', e.target.value)}
                className="input"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Standard Price (DJF/month)</label>
                <input
                  type="number"
                  value={settings.standardPrice}
                  onChange={(e) => handleChange('standardPrice', e.target.value)}
                  className="input"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Premium Price (DJF/month)</label>
                <input
                  type="number"
                  value={settings.premiumPrice}
                  onChange={(e) => handleChange('premiumPrice', e.target.value)}
                  className="input"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card>
          <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
            <Bell className="text-primary" size={20} />
            Notification Settings
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg">
              <p className="font-semibold text-sm md:text-base">New User Registration</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.newUserNotification}
                  onChange={(e) => handleChange('newUserNotification', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg">
              <p className="font-semibold text-sm md:text-base">Doctor Approval Requests</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.doctorApprovalNotification}
                  onChange={(e) => handleChange('doctorApprovalNotification', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg">
              <p className="font-semibold text-sm md:text-base">Subscription Changes</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.subscriptionNotification}
                  onChange={(e) => handleChange('subscriptionNotification', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg">
              <p className="font-semibold text-sm md:text-base">System Alerts</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.systemAlertNotification}
                  onChange={(e) => handleChange('systemAlertNotification', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-border rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </Card>

        {/* Localization */}
        <Card>
          <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
            <Globe className="text-primary" size={20} />
            Localization
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Default Language</label>
              <select
                value={settings.defaultLanguage}
                onChange={(e) => handleChange('defaultLanguage', e.target.value)}
                className="input"
              >
                <option value="fr">French (Français)</option>
                <option value="ar">Arabic (العربية)</option>
                <option value="en">English</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Timezone</label>
              <select
                value={settings.timezone}
                onChange={(e) => handleChange('timezone', e.target.value)}
                className="input"
              >
                <option value="Africa/Djibouti">Africa/Djibouti (GMT+3)</option>
                <option value="Africa/Addis_Ababa">Africa/Addis Ababa (GMT+3)</option>
                <option value="Africa/Nairobi">Africa/Nairobi (GMT+3)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Currency</label>
              <select
                value={settings.currency}
                onChange={(e) => handleChange('currency', e.target.value)}
                className="input"
              >
                <option value="DJF">Djiboutian Franc (DJF)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
              </select>
            </div>
          </div>
        </Card>

        {/* System Information */}
        <Card className="bg-info/5 border-info">
          <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
            <Database className="text-info" size={20} />
            System Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-white rounded-lg">
              <p className="text-sm text-neutral-textSecondary">Version</p>
              <p className="font-bold">1.0.0</p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p className="text-sm text-neutral-textSecondary">Database</p>
              <p className="font-bold text-success">Connected</p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p className="text-sm text-neutral-textSecondary">Storage Used</p>
              <p className="font-bold">2.4 GB / 50 GB</p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p className="text-sm text-neutral-textSecondary">Last Backup</p>
              <p className="font-bold">Dec 10, 2025</p>
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-3">
          <Button variant="secondary">
            Reset to Defaults
          </Button>
          <Button variant="primary" onClick={handleSave}>
            <Save size={20} />
            Save All Settings
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}

