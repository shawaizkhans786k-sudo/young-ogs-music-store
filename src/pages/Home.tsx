import React from 'react'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#09090b',
      color: '#fafafa',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '12px',
          backgroundColor: '#f97316',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px auto',
          fontSize: '24px',
          color: '#09090b',
          fontWeight: 'bold'
        }}>
          🎵
        </div>
        
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px', letterSpacing: '-0.05em' }}>
          Welcome to <span style={{ color: '#f97316' }}>Young OG's Music Store</span>
        </h1>
        
        <p style={{ color: '#a1a1aa', fontSize: '18px', marginBottom: '32px', lineHeight: '1.6' }}>
          Stream, browse, and purchase exclusive beats and high-quality tracks directly from Young OG.
        </p>
        
        <a 
          href="/dashboard"
          style={{
            display: 'inline-block',
            padding: '12px 32px',
            backgroundColor: '#f97316',
            color: '#09090b',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            boxShadow: '0 4px 14px rgba(249, 115, 22, 0.3)'
          }}
        >
          Explore All Tracks
        </a>
      </div>

      <footer style={{ marginTop: '80px', borderTop: '1px solid #27272a', paddingTop: '24px', width: '100%', maxWidth: '600px' }}>
        <p style={{ fontSize: '12px', color: '#71717a' }}>
          &copy; {new Date().getFullYear()} Young OG's Music Store. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
