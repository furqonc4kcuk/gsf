import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import OperasionalPage from './pages/OperasionalPage'
import KasirPage from './pages/KasirPage'
import AkuntansiPage from './pages/AkuntansiPage'
import CrmPage from './pages/CrmPage'
import InventarisPage from './pages/InventarisPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OperasionalPage />} />
          <Route path="kasir" element={<KasirPage />} />
          <Route path="akuntansi" element={<AkuntansiPage />} />
          <Route path="crm" element={<CrmPage />} />
          <Route path="inventaris" element={<InventarisPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
