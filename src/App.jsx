import { Routes, Route } from 'react-router-dom'
import Home      from './pages/Home.jsx'
import OmniLogEngine from './pages/OmniLogEngine.jsx'
// ── 新增 Engine 時，在這裡加 import ──────────────────────
// import Engine2 from './pages/Engine2.jsx'
// import Engine3 from './pages/Engine3.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/omni-log-engine" element={<OmniLogEngine />} />
      {/* ── 新增 Engine 時，在這裡加 Route ──────────────── */}
      {/* <Route path="/engine-2" element={<Engine2 />} /> */}
      {/* <Route path="/engine-3" element={<Engine3 />} /> */}
    </Routes>
  )
}
