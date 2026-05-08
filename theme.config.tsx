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
      <div style={{ textAlign: 'center', fontSize: '0.7rem', color: '#94A3B8' }}>
        © {new Date().getFullYear()} TaskBloom ·{' '}
        <a href="https://taskbloom.co.uk" style={{ color: '#3B82F6' }}>taskbloom.co.uk</a>
        {' · '}
        <a href="mailto:support@taskbloom.co.uk" style={{ color: '#3B82F6' }}>support@taskbloom.co.uk</a>
      </div>
    )
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system'
  },
  search: {
    placeholder: 'Search documentation...'
  },
  navbar: {
    extraContent: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
        <a
          href="https://taskbloom.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: '0.375rem 0.75rem', borderRadius: '0.5rem', fontWeight: 500, color: '#64748B' }}
        >
          Main Site →
        </a>
        <a
          href="https://task-rewards.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: '0.375rem 0.75rem', borderRadius: '0.5rem', fontWeight: 500, color: '#64748B' }}
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
  gitTimestamp: ({ timestamp }) => {
    const d = new Date(timestamp)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${months[d.getMonth()]} ${d.getFullYear()}`
  },
}