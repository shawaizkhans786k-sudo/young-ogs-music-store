import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import { inject } from '@vercel/analytics'

// Vercel Analytics active karein
inject()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
