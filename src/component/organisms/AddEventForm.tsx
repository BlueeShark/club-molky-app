// src/components/organisms/AddEventForm.tsx
import React, { useState } from 'react';

interface EventFormData {
  title: string;
  description: string;
  date: string;
  location: string;
  max_people: number | '';
}

const AddEventForm = () => {
  const initialState: EventFormData = {
    title: '',
    description: '',
    date: '',
    location: '',
    max_people: '',
  };

  const [formData, setFormData] = useState<EventFormData>(initialState);
  const [message, setMessage] = useState<string>('');
  const API_URL = import.meta.env.VITE_API_URL;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch(`${API_URL}/activities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(errorResult.error || 'Une erreur est survenue.');
      }

      setMessage('Événement ajouté avec succès ! 🎉');
      setFormData(initialState);
    } catch (error: any) {
      setMessage(`Erreur : ${error.message}`);
    }
  };

  // Le reste du code (handleChange, return avec le JSX) est identique...
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '400px',
      }}
    >
      <h2>Ajouter un nouvel événement</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Titre de l'événement"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Lieu"
        required
      />
      <input
        type="number"
        name="max_people"
        value={formData.max_people}
        onChange={handleChange}
        placeholder="Nombre max de personnes"
      />
      <button type="submit">Ajouter l'événement</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default AddEventForm;
