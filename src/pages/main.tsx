import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard'
import { inject } from '@vercel/analytics'

// Analytics active karein
inject()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
)
