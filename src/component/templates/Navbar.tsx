import { Link } from "react-router-dom";
import "./styles/navbar.css"; // 🔗 import du CSS
import logo from './logo site molky.jpg'

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    <div className="nav-links">
      <Link to={"/"} className="nav-link">Accueil</Link>
      <Link to={"/news"} className="nav-link">Actualités</Link>
      <Link to={"/event"} className="nav-link">Évènements</Link>
      <Link to={"/about"} className="nav-link">À propos</Link>
      <a href="#footer" className="nav-link">Contact</a>

    </div>
    </nav>
  );
}

