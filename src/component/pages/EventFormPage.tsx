// src/component/pages/EventFormPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../services/api';
import './style/eventformpage.css';

interface FormData {
  title: string;
  description: string;
  date: string;
  location: string;
  max_people: number | '';
}

const EventFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    date: '',
    location: '',
    max_people: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Si on est en mode "edit", on va chercher les données de l'événement
  useEffect(() => {
    if (!isEditMode) return;

    const fetchEventData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/activities/${id}`);
        if (!response.ok) {
          throw new Error("L'événement n'a pas pu être chargé.");
        }

        const responseData = await response.json(); // Récupère l'objet entier { success, data }

        // --- LA CORRECTION EST ICI ---
        // 1. On extrait l'objet de l'événement qui est dans la propriété "data"
        const eventData = responseData.data;

        // 2. On formate la date à partir de eventData
        const formattedDate = eventData.date
          ? new Date(eventData.date).toISOString().split('T')[0]
          : '';

        // 3. On met à jour l'état du formulaire avec les bonnes données
        // On utilise "|| ''" pour s'assurer qu'aucune valeur n'est jamais undefined
        setFormData({
          title: eventData.title || '',
          description: eventData.description || '',
          date: formattedDate,
          location: eventData.location || '',
          max_people: eventData.max_people || '',
        });
      } catch (err: any) {
        setError(err.message);
        console.error("Erreur lors de la récupération de l'événement :", err);
      }
    };

    fetchEventData();
  }, [id, isEditMode]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // ... (votre code handleSubmit reste le même)
    e.preventDefault();
    const url = isEditMode
      ? `${API_URL}/api/activities/${id}`
      : `${API_URL}/api/activities`;
    const method = isEditMode ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("L'opération a échoué.");
      setMessage(
        isEditMode
          ? 'Événement modifié avec succès !'
          : 'Événement ajouté avec succès !'
      );
      setTimeout(() => navigate('/admin/events'), 1500);
    } catch (err: any) {
      setMessage(`Erreur : ${err.message}`);
    }
  };

  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>;

  return (
    <form onSubmit={handleSubmit} className="add-event-form">
      <h2>
        {isEditMode ? "Modifier l'événement" : 'Ajouter un nouvel événement'}
      </h2>
      {/* Les champs du formulaire sont les mêmes */}
      <label>Titre</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <label>Date</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <label>Lieu</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <label>Participants max</label>
      <input
        type="number"
        name="max_people"
        value={formData.max_people}
        onChange={handleChange}
      />
      <button type="submit">{isEditMode ? 'Mettre à jour' : 'Ajouter'}</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default EventFormPage;
