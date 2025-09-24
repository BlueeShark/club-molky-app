import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaPen, FaTrash, FaPlus, FaMagnifyingGlass, FaEye, FaUsers } from 'react-icons/fa6';
import './style/admin.css';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  participants: number;
  maxParticipants: number;
}

export function AdminEvents() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: 'Tournoi d\'hiver 2024',
      date: '2024-02-15',
      location: 'Parc de la Tête d\'Or, Lyon',
      status: 'upcoming',
      participants: 24,
      maxParticipants: 32
    },
    {
      id: 2,
      title: 'Initiation Mölkky',
      date: '2024-01-20',
      location: 'Place Bellecour, Lyon',
      status: 'ongoing',
      participants: 15,
      maxParticipants: 20
    },
    {
      id: 3,
      title: 'Championnat régional',
      date: '2024-01-10',
      location: 'Stade de Gerland, Lyon',
      status: 'completed',
      participants: 48,
      maxParticipants: 48
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteEvent = (eventId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      setEvents(events.filter(event => event.id !== eventId));
    }
  };

  const handleToggleStatus = (eventId: number) => {
    setEvents(events.map(event => {
      if (event.id === eventId) {
        let newStatus: Event['status'];
        switch (event.status) {
          case 'upcoming':
            newStatus = 'ongoing';
            break;
          case 'ongoing':
            newStatus = 'completed';
            break;
          case 'completed':
            newStatus = 'upcoming';
            break;
          default:
            newStatus = 'upcoming';
        }
        return { ...event, status: newStatus };
      }
      return event;
    }));
  };

  const getStatusLabel = (status: Event['status']) => {
    switch (status) {
      case 'upcoming': return 'À venir';
      case 'ongoing': return 'En cours';
      case 'completed': return 'Terminé';
      case 'cancelled': return 'Annulé';
      default: return status;
    }
  };

  const getStatusClass = (status: Event['status']) => {
    return status;
  };

  return (
    <div className="admin-events">
      <div className="section-header">
        <h1>Gestion des événements</h1>
        <Link to="/admin/events/create" className="btn-primary">
          <FaPlus /> Créer un événement
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="search-input">
          <FaMagnifyingGlass />
          <input
            type="text"
            placeholder="Rechercher par titre ou lieu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {filteredEvents.map(event => (
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
                <FaEye />
                <span>{event.location}</span>
              </div>
              <div className="detail-item">
                <FaUsers />
                <span>{event.participants}/{event.maxParticipants} participants</span>
              </div>
            </div>

            <div className="event-actions">
              <Link to={`/admin/events/${event.id}`} className="btn-secondary">
                <FaEye /> Voir détails
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

      {filteredEvents.length === 0 && (
        <div className="no-results">
          <p>Aucun événement trouvé</p>
        </div>
      )}
    </div>
  );
}
