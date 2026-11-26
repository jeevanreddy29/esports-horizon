export default function BrandLogo({ size = 38, showText = true, subtitle = false }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, userSelect: 'none' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: 'drop-shadow(0 4px 12px rgba(245, 166, 35, 0.22))' }}
        aria-label="Esports Horizon Logo"
      >
        <defs>
          <linearGradient id="eh-nav-shield" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#141926" />
            <stop offset="100%" stopColor="#090c14" />
          </linearGradient>
          <linearGradient id="eh-nav-gold" x1="12" y1="10" x2="52" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffd60a" />
            <stop offset="100%" stopColor="#f5a623" />
          </linearGradient>
          <linearGradient id="eh-nav-cyan" x1="14" y1="30" x2="50" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00f3ff" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        <path
          d="M32 4L56 14V33C56 46.5 45.5 55.8 32 60C18.5 55.8 8 46.5 8 33V14L32 4Z"
          fill="url(#eh-nav-shield)"
          stroke="url(#eh-nav-gold)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M16 25L24 19L32 23L40 19L48 25L44 33H20L16 25Z"
          fill="url(#eh-nav-gold)"
          fillOpacity="0.16"
          stroke="url(#eh-nav-gold)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M13 35H51" stroke="url(#eh-nav-cyan)" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M21 42L32 49L43 42"
          stroke="url(#eh-nav-cyan)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M32 11V17" stroke="#00f3ff" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="32" cy="27" r="2.6" fill="#00f3ff" />
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
