// src/components/organisms/EventsList.tsx

import { useEffect, useState } from 'react';
// On importe le fichier CSS que nous allons créer juste après
import { API_URL } from '../../services/api';
import '../pages/style/events.css';

// On définit un "type" pour nos données, c'est une bonne pratique avec TypeScript
interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  max_people: number;
}

const EventsList = () => {
  // Trois états pour gérer nos données, le chargement, et les erreurs
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect se déclenche une fois que le composant est monté à l'écran
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        // L'URL de votre API pour récupérer les activités
        const response = await fetch(`${API_URL}/activities`);

        if (!response.ok) {
          throw new Error('La récupération des données a échoué.');
        }

        const responseData = await response.json(); // On renomme pour plus de clarté
        setActivities(responseData.data); // Correct : on stocke uniquement le tableau contenu dans la propriété "data"
        console.log(responseData); // On peut garder le log pour vérifier
      } catch (err: any) {
        setError(err.message); // On stocke le message d'erreur
      } finally {
        setLoading(false); // Dans tous les cas, le chargement est terminé
      }
    };

    fetchActivities();
  }, []); // Le tableau vide [] signifie que l'effet ne se déclenche qu'une seule fois

  // Affichage pendant le chargement
  if (loading) {
    return <div>Chargement des événements...</div>;
  }

  // Affichage en cas d'erreur
  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="events-container">
      {activities.map(activity => (
        <div key={activity.id} className="event-card">
          <img
            src="https://media.istockphoto.com/id/1295508069/fr/photo/m%C3%B6lkky.jpg?s=1024x1024&w=is&k=20&c=YVvxfjyWPsh4Y2dWJ8NCuRdSKnRRz-tjSvcMbSntEdk="
            alt="Mölkky Game"
            className="event-card-image"
          />
          <div className="event-card-content">
            <h3>{activity.title}</h3>
            <p className="event-card-date">
              📅{' '}
              {new Date(activity.date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
            <p className="event-card-location">📍 {activity.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
