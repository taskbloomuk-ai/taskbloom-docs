import './globals.css'

export default {
  logo: (
    <span style={{
      fontWeight: 800,
      fontSize: '1.25rem',
      background: 'linear-gradient(135deg, #1E3A5F, #3B82F6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '-0.03em'
    }}>
      TaskBloom
    </span>
  ),
  project: {
    link: 'https://github.com/taskbloom/taskbloom-docs'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94A3B8', padding: '1rem 0' }}>
        <p>© {new Date().getFullYear()} TaskBloom. All rights reserved.</p>
        <p style={{ marginTop: '0.25rem' }}>
          <a href="https://taskbloom.co.uk" style={{ color: '#3B82F6' }}>taskbloom.co.uk</a>
          {' · '}
          <a href="mailto:support@taskbloom.co.uk" style={{ color: '#3B82F6' }}>support@taskbloom.co.uk</a>
        </p>
      </div>
    )
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light'
  },
  search: {
    placeholder: 'Search documentation...',
    emptyResult: (
      <div style={{ padding: '1.5rem', textAlign: 'center', color: '#94A3B8', fontSize: '0.9rem' }}>
        No results found. Try different keywords.
      </div>
    )
  },
  navbar: {
    extraContent: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
        <a
          href="https://taskbloom.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.375rem 0.75rem',
            borderRadius: '0.5rem',
            fontWeight: 500,
            color: '#64748B',
            transition: 'all 0.15s ease'
          }}
          onMouseOver={e => { e.currentTarget.style.color = '#3B82F6'; e.currentTarget.style.background = '#EFF6FF' }}
          onMouseOut={e => { e.currentTarget.style.color = '#64748B'; e.currentTarget.style.background = 'transparent' }}
        >
          Main Site →
        </a>
        <a
          href="https://task-rewards.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.375rem 0.75rem',
            borderRadius: '0.5rem',
            fontWeight: 500,
            color: '#64748B',
            transition: 'all 0.15s ease'
          }}
          onMouseOver={e => { e.currentTarget.style.color = '#3B82F6'; e.currentTarget.style.background = '#EFF6FF' }}
          onMouseOut={e => { e.currentTarget.style.color = '#64748B'; e.currentTarget.style.background = 'transparent' }}
        >
          Platform →
        </a>
      </div>
    )
  },
  toc: {
    float: true,
    title: 'On This Page',
    backToTop: true,
  },
  primaryHue: 217,
  primarySaturation: 91,
  primaryLightness: 59,
}