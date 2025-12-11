'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { Mail, Lock, AlertCircle, User } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }

    const success = login(email, password)
    if (!success) {
      setError('Invalid email or password')
    }
  }

  const fillDemoCredentials = (userType: 'patient' | 'caregiver') => {
    if (userType === 'patient') {
      setEmail('patient@demo.com')
      setPassword('demo123')
    } else {
      setEmail('caregiver@demo.com')
      setPassword('demo123')
    }
    setError('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-info/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col items-center justify-center mb-6 bg-white rounded-3xl p-8 shadow-xl">
            {/* Medical Shield Icon */}
            <div className="relative w-32 h-32 mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7CB342] to-[#558B2F] rounded-full opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-[#7CB342] to-[#558B2F] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-5xl font-bold">+</span>
              </div>
            </div>
            
            {/* DjibCare Text Logo */}
            <h1 className="text-5xl font-bold mb-2" style={{ color: '#7CB342' }}>
              DjibCare
            </h1>
            
            {/* Accessibility Icons */}
            <div className="flex gap-6 mt-4 text-[#7CB342]">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="2"/>
                <path d="M12 7c-3.5 0-6 2.5-6 6v8h2v-8c0-2.2 1.8-4 4-4s4 1.8 4 4v8h2v-8c0-3.5-2.5-6-6-6z"/>
              </svg>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="4" r="2"/>
                <path d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7c-1.3 0-1.97.72-2.36 1.11l-3.77 3.56c-.31.29-.48.7-.48 1.12V21h2v-7h2v7h2v-7.88c0-.42-.17-.83-.48-1.12L15.89 8.11z"/>
              </svg>
            </div>
          </div>
          <p className="text-neutral-textSecondary text-lg font-semibold">Medical Care Tracker for All</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-neutral-text">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-textSecondary" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-12"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-neutral-text">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-textSecondary" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-12"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-error/10 border border-error rounded-lg">
                <AlertCircle className="text-error" size={20} />
                <p className="text-error text-sm font-semibold">{error}</p>
              </div>
            )}

            {/* Login Button */}
            <Button type="submit" variant="primary" className="w-full mt-6">
              Sign In
            </Button>
          </form>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <button className="text-primary hover:underline text-sm font-semibold">
              Forgot Password?
            </button>
          </div>
        </Card>

        {/* Demo Credentials */}
        <Card className="mt-6 bg-info/5 border-info">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="text-info" size={20} />
              <h3 className="font-semibold text-lg">Demo Accounts (MVP)</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-2 border-neutral-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <User className="text-primary" size={18} />
                    <p className="font-semibold">Patient Account</p>
                  </div>
                  <button
                    onClick={() => fillDemoCredentials('patient')}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Use This
                  </button>
                </div>
                <p className="text-sm text-neutral-textSecondary">
                  <span className="font-semibold">Email:</span> patient@demo.com
                </p>
                <p className="text-sm text-neutral-textSecondary">
                  <span className="font-semibold">Password:</span> demo123
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-neutral-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <User className="text-success" size={18} />
                    <p className="font-semibold">Caregiver Account</p>
                  </div>
                  <button
                    onClick={() => fillDemoCredentials('caregiver')}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Use This
                  </button>
                </div>
                <p className="text-sm text-neutral-textSecondary">
                  <span className="font-semibold">Email:</span> caregiver@demo.com
                </p>
                <p className="text-sm text-neutral-textSecondary">
                  <span className="font-semibold">Password:</span> demo123
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-primary">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <User className="text-primary" size={18} />
                    <p className="font-semibold text-primary">Doctor Account</p>
                  </div>
                  <button
                    onClick={() => {
                      setEmail('doctor@demo.com')
                      setPassword('demo123')
                      setError('')
                    }}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Use This
                  </button>
                </div>
                <p className="text-sm text-neutral-textSecondary">
                  <span className="font-semibold">Email:</span> doctor@demo.com
                </p>
                <p className="text-sm text-neutral-textSecondary">
                  <span className="font-semibold">Password:</span> demo123
                </p>
                <p className="text-xs text-primary mt-1">Dr. Mohamed - Cardiology</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-neutral-textSecondary text-sm">
            Don't have an account? <button className="text-primary font-semibold hover:underline">Sign Up</button>
          </p>
        </div>

        <div className="text-center mt-4 text-neutral-textSecondary text-xs">
          DjibCare v1.0.0 - MVP Demo
        </div>
      </div>
    </div>
  )
}

