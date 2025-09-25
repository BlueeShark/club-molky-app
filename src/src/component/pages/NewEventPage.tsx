// src/pages/NewEventPage.tsx

// On importe le composant formulaire que l'on vient de créer à l'étape 1
import AddEventForm from '../organisms/AddEventForm';

const NewEventPage = () => {
  return (
    <div className="page-container" style={{ padding: '2rem' }}>
      <h1>Page de Création d'Événement</h1>
      <p>
        Utilisez ce formulaire pour enregistrer une nouvelle activité pour le
        club.
      </p>

      {/* On affiche le composant formulaire ici */}
      <AddEventForm />
    </div>
  );
};

export default NewEventPage;
