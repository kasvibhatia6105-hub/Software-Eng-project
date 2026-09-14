import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Login from './pages/Login.jsx'
import Feed from './pages/Feed.jsx'
import ReportForm from './pages/ReportForm.jsx'
import ItemDetail from './pages/ItemDetail.jsx'

export default function App() {
  const [user, setUser] = useState(null)

  function handleLogin(email) {
    const name = email.split('@')[0].replace(/[._]/g, ' ')
    const initials = name
      .split(' ')
      .map((p) => p[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
    setUser({ name: name.replace(/\b\w/g, (c) => c.toUpperCase()), initials })
  }

  if (!user) {
    return (
      <div className="shell">
        <Login onLogin={handleLogin} />
      </div>
    )
  }

  return (
    <div className="shell">
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/report/lost" element={<ReportForm type="lost" />} />
        <Route path="/report/found" element={<ReportForm type="found" />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="*" element={<Navigate to="/feed" replace />} />
      </Routes>
    </div>
  )
}
