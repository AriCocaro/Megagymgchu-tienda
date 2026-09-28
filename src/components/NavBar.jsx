import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import { categories } from '../data/products'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo" onClick={closeMenu}>
        <img src="/images/logo.png" alt="Logo Megagym" />
      </Link>

      <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>Todos</NavLink>
        {categories.map(({ id, label }) => (
          <NavLink key={id} to={`/category/${id}`} onClick={closeMenu}>{label}</NavLink>
        ))}
        <div className="navbar__social">
          <a href="https://wa.me/5493446670344" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a>
          <a href="https://www.instagram.com/megagymgchu" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
          <a href="https://maps.app.goo.gl/mU6QhjRrZRFX3d3y6" target="_blank" rel="noreferrer" aria-label="Ubicación"><i className="fa-solid fa-location-dot" /></a>
        </div>
      </nav>

      <div className="navbar__actions">
        <CartWidget />
        <button type="button" className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

export default NavBar
