// src/component/pages/AdminEvents.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Pour le bouton "Modifier"
// Importez un fichier CSS si vous le souhaitez, ex:
import { API_URL } from '../../services/api';
import './style/admin.css';

interface Activity {
  id: number;
  title: string;
  date: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  participants: number;
  maxParticipants: number;
}

export const AdminEvents = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/api/activities`)
      .then(res => res.json())
      .then(data => setActivities(data.data || data)) // Gère les deux formats de réponse
      .catch(() => setError('Erreur de chargement des événements.'));
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      try {
        const response = await fetch(`${API_URL}/api/activities/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('La suppression a échoué.');
        // Met à jour la liste en retirant l'élément supprimé
        setActivities(activities.filter(activity => activity.id !== id));
      } catch (err) {
        setError('Erreur lors de la suppression.');
        console.error(err);
      }
    }
  };

  if (error) return <p>{error}</p>;

  // src/component/pages/AdminEvents.tsx

  // ... (vos imports, useState, useEffect, handleDelete restent les mêmes) ...

  return (
    <div className="admin-content-container">
      <div className="admin-header">
        <h1>Gérer les Événements</h1>
        <Link to="/admin/events/create">
          <button className="btn btn-primary">
            Ajouter un nouvel événement
          </button>
        </Link>
      </div>

      <table className="events-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Date</th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id}>
              <td data-label="Titre">{activity.title}</td>
              <td data-label="Date">
                {new Date(activity.date).toLocaleDateString('fr-FR')}
              </td>
              <td data-label="Actions" className="action-buttons">
                <Link to={`/admin/events/edit/${activity.id}`}>
                  <button className="btn btn-secondary">Modifier</button>
                </Link>
                <button
                  onClick={() => handleDelete(activity.id)}
                  className="btn btn-danger"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ... export default AdminEvents;

export default AdminEvents;
