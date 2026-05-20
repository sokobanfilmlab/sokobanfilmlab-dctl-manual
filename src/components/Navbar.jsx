import { useNavigate, useLocation } from 'react-router-dom'

// ── 新增 Engine 時，在這裡加一筆 ─────────────────────────
const PRODUCTS = [
  {
    path: '/omni-log-engine',
    label: 'Omni Log Engine',
    tag: 'DCTL',
    color: '#F5A623',
  },
  // {
  //   path: '/engine-2',
  //   label: 'Engine 2 Name',
  //   tag: 'DCTL',
  //   color: '#4DBFBF',
  // },
]

export default function Navbar({ manualLabel }) {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(0,0,0,0.96)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #1e1e1e',
      padding: '0 28px', height: 60,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <div
        onClick={() => navigate('/')}
        style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}
      >
        <div style={{
          width: 32, height: 32, background: '#F5A623', borderRadius: 5,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 800, color: '#000',
          fontFamily: "'Barlow Condensed', sans-serif",
        }}>S</div>
        <div>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 15, fontWeight: 700, color: '#FFFFFF',
            textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>SokobanFilmLab</div>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10, color: '#DEDEDE', letterSpacing: '0.1em',
          }}>
            {isHome ? 'User Manuals' : manualLabel || 'User Manual'}
          </div>
        </div>
      </div>

      {/* Product switcher — shown on manual pages */}
      {!isHome && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {PRODUCTS.map(p => (
            <button
              key={p.path}
              onClick={() => navigate(p.path)}
              style={{
                fontFamily: "'DM Mono', monospace", fontSize: 11,
                color: location.pathname === p.path ? p.color : '#666',
                border: `1px solid ${location.pathname === p.path ? p.color + '55' : '#2a2a2a'}`,
                background: location.pathname === p.path ? p.color + '11' : 'transparent',
                padding: '3px 12px', borderRadius: 20,
                letterSpacing: '0.06em', cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      {/* Manual tag — shown on home */}
      {isHome && (
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#F5A623',
          border: '1px solid #3a2e18', background: '#1a1200',
          padding: '3px 12px', borderRadius: 20, letterSpacing: '0.06em',
        }}>User Manuals</span>
      )}
    </header>
  )
}
