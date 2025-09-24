import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaPen, FaTrash, FaCalendar, FaLocationDot, FaUsers, FaEye, FaClock } from 'react-icons/fa6';
import './style/admin.css';

interface EventDetail {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  maxParticipants: number;
  participants: number;
  category: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  imageUrl?: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

// Mock data - replace with API call
const mockEventDetail: EventDetail = {
  id: 1,
  title: 'Championnat de Mölkky 2024',
  description: 'Le championnat annuel de Mölkky du club avec des équipes de toute la région. Cet événement majeur rassemblera les meilleurs joueurs et équipes pour une compétition amicale mais intense. Les participants auront l\'occasion de démontrer leurs compétences et de remporter des prix prestigieux.',
  date: '2024-06-15',
  time: '14:00',
  location: 'Stade municipal, 75001 Paris',
  maxParticipants: 32,
  participants: 28,
  category: 'competition',
  status: 'upcoming',
  imageUrl: 'https://example.com/molky-event.jpg',
  author: 'Admin CRHOM',
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-20T15:30:00Z'
};

const getStatusClass = (status: string) => {
  switch (status) {
    case 'upcoming': return 'upcoming';
    case 'ongoing': return 'ongoing';
    case 'completed': return 'completed';
    case 'cancelled': return 'cancelled';
    default: return 'upcoming';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'upcoming': return 'À venir';
    case 'ongoing': return 'En cours';
    case 'completed': return 'Terminé';
    case 'cancelled': return 'Annulé';
    default: return 'À venir';
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'competition': return 'Compétition';
    case 'training': return 'Entraînement';
    case 'social': return 'Social';
    case 'tournament': return 'Tournoi';
    case 'workshop': return 'Atelier';
    default: return category;
  }
};

export function EventDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with API call to fetch event by ID
    const loadEvent = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setEvent(mockEventDetail);
      } catch (error) {
        console.error('Error loading event:', error);
        alert('Erreur lors du chargement de l\'événement');
        navigate('/admin/events');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadEvent();
    }
  }, [id, navigate]);

  const handleEdit = () => {
    navigate(`/admin/events/${id}/edit`);
  };

  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet événement ? Cette action est irréversible.')) {
      // TODO: Implement API call to delete event
      console.log('Deleting event:', id);
      alert('Événement supprimé avec succès !');
      navigate('/admin/events');
    }
  };

  const handleBack = () => {
    navigate('/admin/events');
  };

  if (loading) {
    return (
      <div className="admin-content">
        <div className="loading">Chargement...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="admin-content">
        <div className="no-results">
          <p>Événement non trouvé</p>
          <button className="btn-primary" onClick={handleBack}>
            Retour à la liste
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-content">
      <div className="admin-header">
        <button
          className="btn-secondary"
          onClick={handleBack}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <FaArrowLeft /> Retour
        </button>
        <h1>Détails de l'événement</h1>
        <div className="header-actions">
          <button className="btn-secondary" onClick={handleEdit}>
            <FaPen /> Modifier
          </button>
          <button className="btn-danger" onClick={handleDelete}>
            <FaTrash /> Supprimer
          </button>
        </div>
      </div>

      <div className="event-detail-container">
        {/* Event Header */}
        <div className="event-detail-header">
          <div className="event-status">
            <span className={`status-badge ${getStatusClass(event.status)}`}>
              {getStatusLabel(event.status)}
            </span>
            <span className="category-badge">
              {getCategoryLabel(event.category)}
            </span>
          </div>

          <h1>{event.title}</h1>

          {event.imageUrl && (
            <div className="event-image">
              <img src={event.imageUrl} alt={event.title} />
            </div>
          )}
        </div>

        {/* Event Content */}
        <div className="event-detail-content">
          <div className="event-description">
            <h2>Description</h2>
            <p>{event.description}</p>
          </div>

          <div className="event-info-grid">
            <div className="info-section">
              <h3>Informations pratiques</h3>
              <div className="info-list">
                <div className="info-item">
                  <FaCalendar />
                  <div>
                    <strong>Date:</strong>
                    <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                </div>
                <div className="info-item">
                  <FaClock />
                  <div>
                    <strong>Heure:</strong>
                    <span>{event.time}</span>
                  </div>
                </div>
                <div className="info-item">
                  <FaLocationDot />
                  <div>
                    <strong>Lieu:</strong>
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="info-item">
                  <FaUsers />
                  <div>
                    <strong>Participants:</strong>
                    <span>{event.participants}/{event.maxParticipants}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Métadonnées</h3>
              <div className="info-list">
                <div className="info-item">
                  <FaEye />
                  <div>
                    <strong>Statut:</strong>
                    <span>{getStatusLabel(event.status)}</span>
                  </div>
                </div>
                <div className="info-item">
                  <strong>Créé par:</strong>
                  <span>{event.author}</span>
                </div>
                <div className="info-item">
                  <strong>Créé le:</strong>
                  <span>{new Date(event.createdAt).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="info-item">
                  <strong>Modifié le:</strong>
                  <span>{new Date(event.updatedAt).toLocaleDateString('fr-FR')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="event-detail-actions">
          <button className="btn-secondary" onClick={handleEdit}>
            <FaPen /> Modifier l'événement
          </button>
          <button className="btn-danger" onClick={handleDelete}>
            <FaTrash /> Supprimer l'événement
          </button>
        </div>
      </div>
    </div>
  );
}
