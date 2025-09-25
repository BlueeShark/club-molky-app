import { NavLink } from 'react-router-dom';
import {
  FaChartSimple,
  FaUsers,
  FaCalendar,
  FaNewspaper,
  FaGear,
  FaArrowRightFromBracket,
  FaBars,
} from 'react-icons/fa6';

interface AdminSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function AdminSidebar({ isOpen, onToggle }: AdminSidebarProps) {
  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logout clicked');
  };

  return (
    <aside className={`admin-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <button className="sidebar-toggle-mobile" onClick={onToggle}>
          <FaBars />
        </button>
        {isOpen && <h2>CRHOM Admin</h2>}
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              end
            >
              <FaChartSimple />
              {isOpen && <span>Tableau de bord</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              <FaUsers />
              {isOpen && <span>Utilisateurs</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/events"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              <FaCalendar />
              {isOpen && <span>Événements</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/news"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              <FaNewspaper />
              {isOpen && <span>Actualités</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              <FaGear />
              {isOpen && <span>Paramètres</span>}
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <FaArrowRightFromBracket />
          {isOpen && <span>Déconnexion</span>}
        </button>
      </div>
    </aside>
  );
}
