import logoImg from '../assets/esports-horizon-logo.jpg';

export default function BrandLogo({ size = 38 }) {
  const height = size >= 44 ? 82 : size >= 40 ? 60 : 52;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', userSelect: 'none' }}>
      <img
        src={logoImg}
        alt="Esports Horizon — Tournaments, All Games, One Place"
        style={{
          height,
          width: 'auto',
          borderRadius: 10,
          objectFit: 'contain',
          border: '1px solid rgba(168, 85, 247, 0.35)',
          boxShadow: '0 4px 16px rgba(139, 92, 246, 0.25)',
          display: 'block',
        }}
      />
    </div>
  );
}
