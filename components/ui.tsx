export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="callout callout-tip">
      <strong>💡 Tip:</strong> {children}
    </div>
  )
}

export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="callout callout-warning">
      <strong>⚠️ Warning:</strong> {children}
    </div>
  )
}

export function Info({ children }: { children: React.ReactNode }) {
  return (
    <div className="callout callout-info">
      <strong>ℹ️ Note:</strong> {children}
    </div>
  )
}

export function Step({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <div className="step-card">
      <div className="step-number">{number}</div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )
}

export function FeatureCard({ icon, title, description, href }: { icon: string; title: string; description: string; href?: string }) {
  const content = (
    <>
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>
      <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{title}</h3>
      <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5 }}>{description}</p>
    </>
  )

  if (href) {
    return (
      <a href={href} className="feature-card" style={{ display: 'block' }}>
        {content}
      </a>
    )
  }

  return <div className="feature-card">{content}</div>
}

export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="feature-card" style={{ textAlign: 'center', padding: '1rem' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, background: 'linear-gradient(135deg, #3B82F6, #2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{value}</div>
      <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.25rem' }}>{label}</div>
    </div>
  )
}