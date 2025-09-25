import { useState } from 'react'; // 👉 ajouter ça !
import { Link } from 'react-router-dom';
import logo from '../../assets/logo site molky.jpg';
import './styles/navbar.css'; // 🔗 import du CSS

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to={'/'} className="nav-link" onClick={closeMenu}>
          Accueil
        </Link>
        <Link to={'/news'} className="nav-link" onClick={closeMenu}>
          Actualités
        </Link>
        <Link to={'/event'} className="nav-link" onClick={closeMenu}>
          Évènements
        </Link>
        <Link to={'/about'} className="nav-link" onClick={closeMenu}>
          À propos
        </Link>
        <a href="#footer" className="nav-link" onClick={closeMenu}>
          Contact
        </a>
      </div>

      <button className="burger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '☰'}
      </button>
    </nav>
  );
}
