'use client'

import { useState } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import Card from '@/components/UI/Card'
import Button from '@/components/UI/Button'
import { useAuth } from '@/contexts/AuthContext'
import { Check, Crown, Shield, Star, Zap } from 'lucide-react'

type BillingCycle = 'monthly' | 'yearly'

export default function Subscription() {
  const { user } = useAuth()
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: 'standard',
      name: 'Standard',
      icon: Shield,
      description: 'Essential features for personal health tracking',
      monthlyPrice: 3000,
      yearlyPrice: 30000,
      color: 'primary',
      features: [
        'Medication tracking & reminders',
        'Appointment scheduling',
        'Health vitals monitoring',
        'Medical records storage (5GB)',
        'Emergency contacts',
        'Email support',
        'Mobile & Web access'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: Crown,
      description: 'Advanced features for comprehensive care',
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      color: 'warning',
      popular: true,
      features: [
        'All Standard features',
        'Doctor advice & consultation notes',
        'Unlimited medical records storage',
        'Multiple caregiver accounts',
        'Advanced health analytics',
        'Priority 24/7 support',
        'Export health reports (PDF)',
        'Telemedicine integration',
        'Family sharing (up to 5 members)'
      ]
    }
  ]

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId)
    // In a real app, this would redirect to payment
    alert(`Subscribing to ${planId} plan (${billingCycle})!\n\nThis is a demo. Payment integration would go here.`)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-DJ', {
      style: 'currency',
      currency: 'DJF',
      minimumFractionDigits: 0
    }).format(price)
  }

  const calculateSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const monthlyCost = monthlyPrice * 12
    const savings = monthlyCost - yearlyPrice
    const percentage = Math.round((savings / monthlyCost) * 100)
    return { amount: savings, percentage }
  }

  return (
    <MainLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-primary/10 rounded-full p-3 mb-4">
            <Star className="text-primary" size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Choose Your Plan</h1>
          <p className="text-neutral-textSecondary text-lg mb-6">
            Select the perfect plan for your healthcare needs
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <Card className="max-w-md mx-auto">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-white'
                  : 'bg-neutral-bg text-neutral-textSecondary hover:bg-neutral-border'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-primary text-white'
                  : 'bg-neutral-bg text-neutral-textSecondary hover:bg-neutral-border'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-success text-white text-xs px-2 py-1 rounded-full font-bold">
                Save 17%
              </span>
            </button>
          </div>
        </Card>

        {/* Current User Info */}
        {user && (
          <Card className="bg-info/5 border-info max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <Zap className="text-info" size={24} />
              <div>
                <p className="font-semibold text-lg">Welcome, {user.name}!</p>
                <p className="text-neutral-textSecondary">
                  Choose a plan to unlock all DjibCare features
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
            const savings = calculateSavings(plan.monthlyPrice, plan.yearlyPrice)
            
            return (
              <Card
                key={plan.id}
                className={`relative border-2 ${
                  plan.popular 
                    ? 'border-warning bg-warning/5 shadow-lg scale-105' 
                    : 'border-neutral-border'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-warning text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="text-center pt-2">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${plan.color}/10 mb-3`}>
                      <Icon className={`text-${plan.color}`} size={32} />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                    <p className="text-neutral-textSecondary">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center border-t border-b border-neutral-border py-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">{formatPrice(price)}</span>
                      <span className="text-neutral-textSecondary">
                        / {billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-success text-sm font-semibold mt-2">
                        Save {formatPrice(savings.amount)} ({savings.percentage}% off)
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="text-success flex-shrink-0 mt-1" size={20} />
                        <span className="text-neutral-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Subscribe Button */}
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full"
                    onClick={() => handleSubscribe(plan.id)}
                  >
                    {plan.popular ? <Crown size={20} /> : <Shield size={20} />}
                    Subscribe to {plan.name}
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <Card className="bg-neutral-bg max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-center">All Plans Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">🔒</div>
                <p className="font-semibold">Secure & Private</p>
                <p className="text-sm text-neutral-textSecondary">Your data is encrypted</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📱</div>
                <p className="font-semibold">Mobile & Web</p>
                <p className="text-sm text-neutral-textSecondary">Access anywhere</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔄</div>
                <p className="font-semibold">Auto-Sync</p>
                <p className="text-sm text-neutral-textSecondary">Real-time updates</p>
              </div>
            </div>
          </div>
        </Card>

        {/* FAQ */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-bold text-xl mb-3">Questions?</h3>
          <p className="text-neutral-textSecondary mb-4">
            Contact our support team for help choosing the right plan for you.
          </p>
          <Button variant="secondary">
            Contact Support
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}


