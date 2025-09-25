// src/component/pages/Event.tsx

import EventsList from '../organisms/EventsList';

// Le composant est bien nommé "Event" pour correspondre au routeur
const Event = () => {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>
        Les Événements du Club
      </h1>
      <EventsList />
    </div>
  );
};

// La ligne la plus importante : on exporte le composant "Event"
// Sans cette ligne, le routeur ne pourrait pas le trouver.
export default Event;
