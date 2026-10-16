import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Music2 } from 'lucide-react'

// Render components conditionally to avoid any internal module structure crash
export default function Home() {
  const navigate = useNavigate()
  const [loading] = useState(false)
  const [error] = useState(false)
  const [searchQuery] = useState('')
  const [activeGenre] = useState('All')
  const [filteredTracks] = useState<any[]>([])

  return (
    <div className="min-h-screen bg-ink-950 text-ink-50">
      {/* Navigation Header */}
      <header className="border-b border-ink-800 bg-ink-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-flame-500 flex items-center justify-center">
              <Music2 size={18} className="text-ink-950" />
            </div>
            <span className="font-display text-xl text-ink-50 tracking-tight">YOUNG OG'S MUSIC STORE</span>
          </div>
          <button 
            onClick={() => navigate('/dashboard')}
            className="px-4 py-2 bg-flame-500 hover:bg-flame-600 text-ink-950 font-medium rounded-lg transition-colors text-sm"
          >
            Open Dashboard
          </button>
        </div>
      </header>

      {/* Main content area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-50">
            Welcome to the Official <span className="text-flame-500">Music Store</span>
          </h1>
          <p className="text-ink-400 text-lg sm:text-xl">
            Stream, browse, and purchase exclusive beats and high-quality tracks directly from Young OG.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button 
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 bg-flame-500 hover:bg-flame-600 text-ink-950 font-bold rounded-xl transition-all shadow-lg shadow-flame-500/10 text-base"
            >
              Explore All Tracks
            </button>
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-ink-900 text-center">
        <h2 className="text-2xl font-bold mb-4 text-ink-100">Get in Touch</h2>
        <p className="text-ink-400 max-w-md mx-auto">
          Have questions or want custom production? Contact Young OG's Music Store anytime.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink-900 bg-ink-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} Young OG's Music Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
