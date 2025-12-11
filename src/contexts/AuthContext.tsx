'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface User {
  id: string
  name: string
  email: string
  role: 'patient' | 'caregiver' | 'doctor'
  specialty?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => boolean
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo users for MVP
const DEMO_USERS = [
  {
    id: '1',
    email: 'patient@demo.com',
    password: 'demo123',
    name: 'Abdifatah Ismail',
    role: 'patient' as const
  },
  {
    id: '2',
    email: 'caregiver@demo.com',
    password: 'demo123',
    name: 'Mohamed',
    role: 'caregiver' as const
  },
  {
    id: '3',
    email: 'doctor@demo.com',
    password: 'demo123',
    name: 'Dr. Mohamed',
    role: 'doctor' as const,
    specialty: 'Cardiology'
  },
  {
    id: '4',
    email: 'dr.ali@demo.com',
    password: 'demo123',
    name: 'Dr. Ali',
    role: 'doctor' as const,
    specialty: 'General Practice'
  },
  {
    id: '5',
    email: 'dr.moussa@demo.com',
    password: 'demo123',
    name: 'Dr. Moussa',
    role: 'doctor' as const,
    specialty: 'Ophthalmology'
  }
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem('djibcare_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isLoading && !user && pathname !== '/login') {
      router.push('/login')
    }
    // Redirect doctors to doctor dashboard
    if (!isLoading && user && user.role === 'doctor' && pathname === '/') {
      router.push('/doctor')
    }
  }, [user, isLoading, pathname, router])

  const login = (email: string, password: string): boolean => {
    const demoUser = DEMO_USERS.find(
      u => u.email === email && u.password === password
    )

    if (demoUser) {
      const user: User = {
        id: demoUser.id,
        name: demoUser.name,
        email: demoUser.email,
        role: demoUser.role,
        specialty: demoUser.specialty
      }
      setUser(user)
      localStorage.setItem('djibcare_user', JSON.stringify(user))
      // Redirect based on role
      if (user.role === 'doctor') {
        router.push('/doctor')
      } else {
        router.push('/')
      }
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('djibcare_user')
    router.push('/login')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-bg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-neutral-textSecondary">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

