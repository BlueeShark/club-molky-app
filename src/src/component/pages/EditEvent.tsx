import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaFloppyDisk, FaXmark } from 'react-icons/fa6';
import './style/admin.css';

interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  maxParticipants: string;
  category: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  imageUrl?: string;
}

// Mock data - replace with API call
const mockEvent: EventFormData = {
  title: 'Championnat de Mölkky 2024',
  description:
    'Le championnat annuel de Mölkky du club avec des équipes de toute la région.',
  date: '2024-06-15',
  time: '14:00',
  location: 'Stade municipal, Paris',
  maxParticipants: '32',
  category: 'competition',
  status: 'upcoming',
  imageUrl: 'https://example.com/molky-event.jpg',
};

export function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<EventFormData>(mockEvent);
  const [errors, setErrors] = useState<Partial<EventFormData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with API call to fetch event by ID
    const loadEvent = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setFormData(mockEvent);
      } catch (error) {
        console.error('Error loading event:', error);
        alert("Erreur lors du chargement de l'événement");
        navigate('/admin/events');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadEvent();
    }
  }, [id, navigate]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof EventFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<EventFormData> = {};

    if (!formData.title.trim()) newErrors.title = 'Le titre est requis';
    if (!formData.description.trim())
      newErrors.description = 'La description est requise';
    if (!formData.date) newErrors.date = 'La date est requise';
    if (!formData.time) newErrors.time = "L'heure est requise";
    if (!formData.location.trim()) newErrors.location = 'Le lieu est requis';
    if (Number(formData.maxParticipants) < 1)
      newErrors.maxParticipants = 'Le nombre de participants doit être positif';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // TODO: Implement API call to update event
    console.log('Updating event:', formData);

    // Simulate successful update
    alert('Événement modifié avec succès !');
    navigate('/admin/events');
  };

  const handleCancel = () => {
    navigate('/admin/events');
  };

  if (loading) {
    return (
      <div className="admin-content">
        <div className="loading">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="admin-content">
      <div className="admin-header">
        <button
          className="btn-secondary"
          onClick={handleCancel}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <FaArrowLeft /> Retour
        </button>
        <h1>Modifier l'événement</h1>
        <div></div> {/* Spacer for flex layout */}
      </div>

      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-section">
          <h2>Informations générales</h2>

          <div className="form-group">
            <label htmlFor="title">Titre de l'événement *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={errors.title ? 'error' : ''}
              placeholder="Ex: Championnat de Mölkky 2024"
            />
            {errors.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={errors.description ? 'error' : ''}
              rows={4}
              placeholder="Décrivez l'événement en détail..."
            />
            {errors.description && (
              <span className="error-message">{errors.description}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="category">Catégorie</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="competition">Compétition</option>
              <option value="training">Entraînement</option>
              <option value="social">Social</option>
              <option value="tournament">Tournoi</option>
              <option value="workshop">Atelier</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>Logistique</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className={errors.date ? 'error' : ''}
              />
              {errors.date && (
                <span className="error-message">{errors.date}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="time">Heure *</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={errors.time ? 'error' : ''}
              />
              {errors.time && (
                <span className="error-message">{errors.time}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Lieu *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={errors.location ? 'error' : ''}
              placeholder="Ex: Stade municipal, Paris"
            />
            {errors.location && (
              <span className="error-message">{errors.location}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="maxParticipants">
              Nombre maximum de participants *
            </label>
            <input
              type="number"
              id="maxParticipants"
              name="maxParticipants"
              value={formData.maxParticipants.toString()}
              onChange={handleInputChange}
              min="1"
              className={errors.maxParticipants ? 'error' : ''}
            />
            {errors.maxParticipants && (
              <span className="error-message">{errors.maxParticipants}</span>
            )}
          </div>
        </div>

        <div className="form-section">
          <h2>Paramètres</h2>

          <div className="form-group">
            <label htmlFor="status">Statut</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
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
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={handleCancel}
          >
            <FaXmark /> Annuler
          </button>
          <button type="submit" className="btn-primary">
            <FaFloppyDisk /> Enregistrer les modifications
          </button>
        </div>
      </form>
    </div>
  );
}
