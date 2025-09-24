import { Link } from "react-router-dom";
import { FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";
import "./styles/footer.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        {/* Navigation */}
        <nav>
          <h3>Navigation</h3>
          <br/>
          <ul>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/news">Actualités</Link>
            </li>
            <li>
              <Link to="/event">Évènements</Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <FaPhone />
              <a href="tel:0637972501">06 37 97 25 01</a>
            </li>
            <li>
              <FaEnvelope />
              <a href="mailto:contact.crhom@gmail.com">contact.crhom@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="social">
          <h3>Suivez-nous</h3>
          <a
            href="https://www.facebook.com/CRHOM69/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
            Facebook
          </a>
        </div>
      </div>

      <div className="bottom-line">
        &copy; {new Date().getFullYear()} CRHOM. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
