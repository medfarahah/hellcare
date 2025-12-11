'use client'

import TopNav from '../Navigation/TopNav'
import BottomNav from '../Navigation/BottomNav'
import Sidebar from '../Navigation/Sidebar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 pb-20 md:pb-0">
          <div className="max-w-7xl mx-auto p-4 md:p-6">
            {children}
          </div>
        </main>
      </div>
      
      <BottomNav />
    </div>
  )
}



