import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">Pride<span>Moyana</span></Link>
        <nav className={`nav-menu${menuOpen ? ' active' : ''}`}>
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link${location.pathname === path ? ' active' : ''}`}
              onClick={handleNavClick}
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-toggle"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  )
}
