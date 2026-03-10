import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { TimelinePage } from './pages/TimelinePage'
import { MetricsPage } from './pages/MetricsPage'
import { GasPage } from './pages/GasPage'

function Navigation() {
  const location = useLocation()
  
  const links = [
    { path: '/', label: 'Timeline' },
    { path: '/metrics', label: 'Metrics' },
    { path: '/gas', label: 'Gas' },
  ]

  return (
    <nav className="fixed top-20 left-0 right-0 z-30 bg-[var(--bg-primary)]/80 backdrop-blur-sm border-b border-[var(--bg-tertiary)]">
      <div className="max-w-6xl mx-auto px-8 py-3 flex items-center gap-6">
        {links.map(link => {
          const isActive = location.pathname === link.path
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-[var(--eth-purple)] text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router basename="/ethereum-archive">
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Header />
        <Navigation />
        
        <div className="pt-32">
          <Routes>
            <Route path="/" element={<TimelinePage />} />
            <Route path="/metrics" element={<MetricsPage />} />
            <Route path="/gas" element={<GasPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
