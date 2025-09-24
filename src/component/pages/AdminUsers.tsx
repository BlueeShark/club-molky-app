import { useState } from 'react';
import { FaPen, FaTrash, FaPlus, FaMagnifyingGlass } from 'react-icons/fa6';
import './style/admin.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

export function AdminUsers() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean.dupont@email.com',
      role: 'Membre',
      status: 'active',
      joinDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Marie Martin',
      email: 'marie.martin@email.com',
      role: 'Administrateur',
      status: 'active',
      joinDate: '2024-01-10'
    },
    {
      id: 3,
      name: 'Pierre Durand',
      email: 'pierre.durand@email.com',
      role: 'Membre',
      status: 'inactive',
      joinDate: '2024-01-05'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteUser = (userId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const handleToggleStatus = (userId: number) => {
    setUsers(users.map(user =>
      user.id === userId
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    ));
  };

  return (
    <div className="admin-users">
      <div className="section-header">
        <h1>Gestion des utilisateurs</h1>
        <button className="btn-primary">
          <FaPlus /> Ajouter un utilisateur
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="search-input">
          <FaMagnifyingGlass />
          <input
            type="text"
            placeholder="Rechercher par nom ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Rôle</th>
              <th>Statut</th>
              <th>Date d'inscription</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${user.role.toLowerCase()}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${user.status}`}>
                    {user.status === 'active' ? 'Actif' : 'Inactif'}
                  </span>
                </td>
                <td>{new Date(user.joinDate).toLocaleDateString('fr-FR')}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-icon"
                      onClick={() => handleToggleStatus(user.id)}
                      title={user.status === 'active' ? 'Désactiver' : 'Activer'}
                    >
                      <FaPen />
                    </button>
                    <button
                      className="btn-icon delete"
                      onClick={() => handleDeleteUser(user.id)}
                      title="Supprimer"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredUsers.length === 0 && (
        <div className="no-results">
          <p>Aucun utilisateur trouvé</p>
        </div>
      )}
    </div>
  );
}
