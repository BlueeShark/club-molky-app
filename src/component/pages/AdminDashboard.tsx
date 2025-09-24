import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUsers,
  FaCalendar,
  FaNewspaper,
  FaMedal,
  FaChartLine,
  FaEye,
  FaPlus,
  FaPen,
  FaTrash,
  FaEye as FaView
} from 'react-icons/fa6';
import './style/admin.css';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  maxParticipants: string;
  category: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  participants: number;
}

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - replace with real data from API
  const stats = {
    totalUsers: 156,
    totalEvents: 23,
    totalNews: 12,
    activeEvents: 5
  };

  const recentActivities = [
    {
      id: 1,
      type: 'user',
      message: 'Nouvel utilisateur inscrit: Jean Dupont',
      timestamp: '2024-01-15 14:30'
    },
    {
      id: 2,
      type: 'event',
      message: 'Événement créé: Tournoi d\'hiver 2024',
      timestamp: '2024-01-15 10:15'
    },
    {
      id: 3,
      type: 'news',
      message: 'Nouvelle actualité publiée',
      timestamp: '2024-01-14 16:45'
    }
  ];

  const [events] = useState<Event[]>([
    {
      id: 1,
      title: 'Tournoi d\'hiver 2024',
      description: 'Le championnat annuel de Mölkky du club avec des équipes de toute la région.',
      date: '2024-02-15',
      time: '14:00',
      location: 'Parc de la Tête d\'Or, Lyon',
      maxParticipants: '32',
      category: 'competition',
      status: 'upcoming',
      participants: 24
    },
    {
      id: 2,
      title: 'Initiation Mölkky',
      description: 'Séance d\'initiation gratuite pour les nouveaux membres.',
      date: '2024-01-20',
      time: '10:00',
      location: 'Place Bellecour, Lyon',
      maxParticipants: '20',
      category: 'training',
      status: 'ongoing',
      participants: 15
    }
  ]);

  const handleDeleteEvent = (eventId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      // TODO: Implement delete logic
      console.log('Deleting event:', eventId);
    }
  };

  const getStatusLabel = (status: Event['status']) => {
    const labels = {
      upcoming: 'À venir',
      ongoing: 'En cours',
      completed: 'Terminé',
      cancelled: 'Annulé'
    };
    return labels[status];
  };

  const getStatusClass = (status: Event['status']) => {
    return status;
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Administration CRHOM</h1>
        <p>Gérez votre club de Mölkky depuis cette interface</p>
      </div>

      {/* Navigation Tabs */}
      <div className="dashboard-tabs">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <FaChartLine />
            Vue d'ensemble
          </button>
          <button
            className={`tab-button ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            <FaCalendar />
            Gestion des événements
          </button>
          <button
            className={`tab-button ${activeTab === 'create' ? 'active' : ''}`}
            onClick={() => setActiveTab('create')}
          >
            <FaPlus />
            Créer un événement
          </button>
        </div>

        <div className="tabs-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-content">
              {/* Statistics Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaUsers />
                  </div>
                  <div className="stat-content">
                    <h3>{stats.totalUsers}</h3>
                    <p>Utilisateurs inscrits</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <FaCalendar />
                  </div>
                  <div className="stat-content">
                    <h3>{stats.totalEvents}</h3>
                    <p>Événements créés</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <FaNewspaper />
                  </div>
                  <div className="stat-content">
                    <h3>{stats.totalNews}</h3>
                    <p>Actualités publiées</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <FaMedal />
                  </div>
                  <div className="stat-content">
                    <h3>{stats.activeEvents}</h3>
                    <p>Événements actifs</p>
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="dashboard-grid">
                {/* Recent Activities */}
                <div className="dashboard-section">
                  <div className="section-header">
                    <h2>Activité récente</h2>
                    <FaEye />
                  </div>
                  <div className="activities-list">
                    {recentActivities.map(activity => (
                      <div key={activity.id} className="activity-item">
                        <div className="activity-icon">
                          {activity.type === 'user' && <FaUsers />}
                          {activity.type === 'event' && <FaCalendar />}
                          {activity.type === 'news' && <FaNewspaper />}
                        </div>
                        <div className="activity-content">
                          <p>{activity.message}</p>
                          <span className="activity-time">{activity.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="dashboard-section">
                  <div className="section-header">
                    <h2>Actions rapides</h2>
                    <FaChartLine />
                  </div>
                  <div className="quick-actions">
                    <button className="action-btn primary">
                      <FaUsers />
                      <span>Ajouter un utilisateur</span>
                    </button>
                    <Link to="/admin/events/create" className="action-btn secondary">
                      <FaCalendar />
                      <span>Créer un événement</span>
                    </Link>
                    <button className="action-btn secondary">
                      <FaNewspaper />
                      <span>Publier une actualité</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Events Management Tab */}
          {activeTab === 'events' && (
            <div className="tab-content">
              <div className="section-header">
                <h2>Gestion des événements</h2>
                <Link to="/admin/events/create" className="btn-primary">
                  <FaPlus /> Créer un événement
                </Link>
              </div>

              <div className="events-list">
                {events.map(event => (
                  <div key={event.id} className="event-card">
                    <div className="event-header">
                      <h3>{event.title}</h3>
                      <span className={`status-badge ${getStatusClass(event.status)}`}>
                        {getStatusLabel(event.status)}
                      </span>
                    </div>

                    <div className="event-details">
                      <div className="detail-item">
                        <FaCalendar />
                        <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="detail-item">
                        <FaView />
                        <span>{event.location}</span>
                      </div>
                      <div className="detail-item">
                        <FaUsers />
                        <span>{event.participants}/{event.maxParticipants} participants</span>
                      </div>
                    </div>

                    <div className="event-actions">
                      <Link to={`/admin/events/${event.id}`} className="btn-secondary">
                        <FaView /> Voir détails
                      </Link>
                      <Link to={`/admin/events/${event.id}/edit`} className="btn-secondary">
                        <FaPen /> Modifier
                      </Link>
                      <button
                        className="btn-danger"
                        onClick={() => handleDeleteEvent(event.id)}
                      >
                        <FaTrash /> Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Create Event Tab */}
          {activeTab === 'create' && (
            <div className="tab-content">
              <div className="section-header">
                <h2>Créer un nouvel événement</h2>
                <Link to="/admin/events" className="btn-secondary">
                  Voir tous les événements
                </Link>
              </div>

              <form className="event-form">
                <div className="form-section">
                  <h3>Informations générales</h3>

                  <div className="form-group">
                    <label htmlFor="title">Titre de l'événement *</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Ex: Championnat de Mölkky 2024"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description *</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="Décrivez l'événement en détail..."
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Catégorie</label>
                    <select id="category" name="category">
                      <option value="competition">Compétition</option>
                      <option value="training">Entraînement</option>
                      <option value="social">Social</option>
                      <option value="tournament">Tournoi</option>
                      <option value="workshop">Atelier</option>
                    </select>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Logistique</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Date *</label>
                      <input type="date" id="date" name="date" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="time">Heure *</label>
                      <input type="time" id="time" name="time" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Lieu *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Ex: Stade municipal, Paris"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="maxParticipants">Nombre maximum de participants *</label>
                    <input
                      type="number"
                      id="maxParticipants"
                      name="maxParticipants"
                      min="1"
                      placeholder="32"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3>Paramètres</h3>

                  <div className="form-group">
                    <label htmlFor="status">Statut</label>
                    <select id="status" name="status">
                      <option value="upcoming">À venir</option>
                      <option value="ongoing">En cours</option>
                      <option value="completed">Terminé</option>
                      <option value="cancelled">Annulé</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="imageUrl">URL de l'image (optionnel)</label>
                    <input
                      type="url"
                      id="imageUrl"
                      name="imageUrl"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-secondary">
                    Annuler
                  </button>
                  <button type="submit" className="btn-primary">
                    Créer l'événement
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
