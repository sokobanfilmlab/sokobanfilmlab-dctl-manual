import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

// ── 新增 Engine 時，在這裡加一筆 ─────────────────────────
const PRODUCTS = [
  {
    path: '/omni-log-engine',
    name: 'Omni Log Engine',
    nameColor: '#FF8200',
    accentLeft: '#FF8200',
    tag: 'DCTL · DaVinci Resolve Studio',
    tagColor: '#FF8200',
    version: 'v3.0',
    desc: 'A high-precision Log normalisation engine utilising advanced floating-point math. It ensures your sensor\'s dynamic range remains intact, creating a solid core for cinematic colour grading.',
    zh: '高精度 Log 正規化引擎，採用浮點運算數學映射，確保攝影機動態範圍完整保留，建立堅實的調光核心基礎。',
    includes: ['FILMIC', 'Pro Suite', 'Light Engine'],
    platforms: ['Windows', 'macOS', 'iPadOS'],
  },
  // ── 複製以上物件來新增 Engine ────────────────────────────
  // {
  //   path: '/engine-2',
  //   name: 'Engine 2 Name',
  //   nameColor: '#4DBFBF',
  //   accentLeft: '#4DBFBF',
  //   tag: 'DCTL · DaVinci Resolve Studio',
  //   tagColor: '#4DBFBF',
  //   version: '2026',
  //   desc: 'Description here.',
  //   zh: '中文說明。',
  //   includes: ['Version A'],
  //   platforms: ['Windows', 'macOS'],
  // },
]

const C = {
  bg: '#000000', surf: '#0d0d0d', border: '#1e1e1e', border2: '#2a2a2a',
  textHi: '#FFFFFF', textMed: '#E8E8E8', textZh: '#DEDEDE', muted: '#DEDEDE',
}

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.textMed, fontFamily: "'DM Sans','Noto Sans TC',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800&family=DM+Sans:wght@400;500&family=DM+Mono:wght@400;500&family=Noto+Sans+TC:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .product-card { transition: border-color 0.2s, transform 0.2s, background 0.2s; cursor: pointer; }
        .product-card:hover { transform: translateY(-3px); border-color: var(--ac); background: #101010; }
        .product-card .go-arrow { transition: transform 0.2s; }
        .product-card:hover .go-arrow { transform: translateX(5px); }
      `}</style>

      <Navbar />

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '60px clamp(20px,4vw,48px) 80px' }}>

        {/* Hero */}
        <div style={{ marginBottom: 56, borderBottom: '1px solid #1e1e1e', paddingBottom: 40 }}>
          <div style={{
            fontFamily: "'DM Mono',monospace", fontSize: 10, color: '#FF8200',
            letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 16,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ display: 'inline-block', width: 20, height: 1, background: '#FF8200' }} />
            Professional Colour Tools for Creative Workflows
          </div>
          <h1 style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: 'clamp(36px,6vw,60px)', fontWeight: 800,
            color: C.textHi, textTransform: 'uppercase',
            letterSpacing: '0.02em', lineHeight: 1.0, marginBottom: 6,
          }}>Sokoban Film Lab</h1>
          <div style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: 'clamp(16px,2.5vw,22px)', fontWeight: 400,
            color: '#FF8200', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 20,
          }}>User Manuals</div>
          <p style={{ fontSize: 16, color: C.textMed, lineHeight: 1.75, maxWidth: 560 }}>
            Select a product below to view its full user manual, installation guide, and parameter reference.
          </p>
          <p style={{ fontSize: 14, color: C.textZh, lineHeight: 1.85, maxWidth: 520, marginTop: 6, fontFamily: "'DM Sans','Noto Sans TC',sans-serif" }}>
            選擇下方產品，查看完整使用說明、安裝指南與參數說明。
          </p>
        </div>

        {/* Product list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {PRODUCTS.map(p => (
            <div
              key={p.path}
              className="product-card"
              role="button"
              tabIndex={0}
              onClick={() => navigate(p.path)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(p.path) }
              }}
              style={{
                '--ac': p.accentLeft,
                background: C.surf,
                border: `1px solid ${p.accentLeft}44`,
                borderLeft: `3px solid ${p.accentLeft}`,
                borderRadius: 8, padding: '28px 32px',
                display: 'flex', alignItems: 'center', gap: 24,
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, gap: 16, flexWrap: 'wrap' }}>
                <div>
                  <div style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: 22, fontWeight: 800, color: p.nameColor,
                    textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.1, marginBottom: 4,
                  }}>{p.name}</div>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: p.tagColor, letterSpacing: '0.1em' }}>
                    {p.tag}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                  <span style={{
                    fontFamily: "'DM Mono',monospace", fontSize: 10,
                    color: p.nameColor, border: `1px solid ${p.nameColor}44`,
                    background: `${p.nameColor}11`, padding: '2px 10px', borderRadius: 3,
                  }}>{p.version}</span>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {p.platforms.map(pl => (
                      <span key={pl} style={{
                        fontFamily: "'DM Mono',monospace", fontSize: 9, color: C.muted,
                        border: '1px solid #2a2a2a', padding: '1px 7px', borderRadius: 3,
                      }}>{pl}</span>
                    ))}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 15, color: C.textMed, lineHeight: 1.75, marginBottom: 6 }}>{p.desc}</p>
              <p style={{ fontSize: 13, color: C.textZh, lineHeight: 1.85, marginBottom: 18, fontFamily: "'DM Sans','Noto Sans TC',sans-serif" }}>{p.zh}</p>

              <div style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #1e1e1e', paddingTop: 14 }}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.includes.map(inc => (
                    <span key={inc} style={{
                      fontFamily: "'DM Mono',monospace", fontSize: 10, color: C.muted,
                      border: '1px solid #2a2a2a', background: '#0a0a0a',
                      padding: '2px 9px', borderRadius: 3,
                    }}>{inc}</span>
                  ))}
                </div>
              </div>
              </div>

              <div className="go-arrow" aria-hidden="true" style={{
                fontFamily: "'DM Mono',monospace", fontSize: 30, fontWeight: 500,
                color: '#00B2A9', flexShrink: 0, lineHeight: 1,
              }}>→</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid #1e1e1e', marginTop: 56, paddingTop: 24 }}>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: '#333' }}>
            User Manual · July 2026
          </div>
        </div>
      </main>
    </div>
  )
}
