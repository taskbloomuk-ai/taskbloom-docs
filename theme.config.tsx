/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  logo: <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#1A6B3C' }}>TaskBloom</span>,
  project: {
    link: 'https://github.com/taskbloom/taskbloom-docs'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: `© ${new Date().getFullYear()} TaskBloom. All rights reserved.`
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light'
  },
  search: {
    placeholder: 'Search documentation...'
  },
  navbar: {
    extraContent: (
      <>
        <a
          href="https://taskbloom.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '1rem', fontSize: '0.875rem', color: '#1A6B3C' }}
        >
          Main Site →
        </a>
        <a
          href="https://task-rewards.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '1rem', fontSize: '0.875rem' }}
        >
          Platform →
        </a>
      </>
    )
  }
};