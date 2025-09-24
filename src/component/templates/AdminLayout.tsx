import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import '../pages/style/admin.css';

export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="admin-layout">
      <AdminSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <main
        className={`admin-main ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
      >
        <div className="admin-header">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <h1>Administration CRHOM</h1>
        </div>
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
