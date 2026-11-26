export default function BrandLogo({ size = 38, showText = true, subtitle = false }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, userSelect: 'none' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: 'drop-shadow(0 4px 12px rgba(0, 210, 255, 0.22))' }}
        aria-label="Esports Horizon Logo"
      >
        <defs>
          <linearGradient id="eh-nav-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#121828" />
            <stop offset="100%" stopColor="#080b12" />
          </linearGradient>
          <linearGradient id="eh-nav-cyan" x1="12" y1="16" x2="52" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00f3ff" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="eh-nav-gold" x1="16" y1="22" x2="48" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffd60a" />
            <stop offset="100%" stopColor="#f5a623" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="15" fill="url(#eh-nav-bg)" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        <path d="M14 36C18 24 25 18 32 18C39 18 46 24 50 36" stroke="url(#eh-nav-gold)" strokeWidth="4" strokeLinecap="round" />
        <path d="M22 36C24.5 29 28 25.5 32 25.5C36 25.5 39.5 29 42 36" stroke="url(#eh-nav-cyan)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M10 38H54" stroke="url(#eh-nav-cyan)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M18 45H46" stroke="rgba(255,255,255,0.28)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="14" r="2.5" fill="#ffd60a" />
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 900,
            fontSize: size >= 42 ? '1.15rem' : '1.02rem',
            letterSpacing: '0.06em',
            color: '#ffffff',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            ESPORTS <span style={{ color: 'var(--gold)' }}>HORIZON</span>
          </span>
          {subtitle && (
            <span style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 700,
              fontSize: '0.68rem',
              letterSpacing: '0.18em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginTop: 2,
            }}>
              INDIA COMPETITIVE ARENA
            </span>
          )}
        </div>
      )}
    </div>
  );
}
