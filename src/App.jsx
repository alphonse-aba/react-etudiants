import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Accueil from './pages/Accueil'
import Etudiants from './pages/Etudiants'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>

      {/* Navigation */}
      <nav>
        <Link to="/">Accueil</Link> |
        <Link to="/etudiants">Étudiants</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/etudiants" element={<Etudiants />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App