import { useState } from 'react';
import hImage from '../../assets/h.png';

export function Carte() {
  const [hover, setHover] = useState(false);

  return (
    <section style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <div
        className='event-card'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'flex',
          maxWidth: '700px',
          background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
          borderRadius: '15px',
          boxShadow: hover
            ? '0 10px 30px rgba(37, 117, 252, 0.6)'
            : '0 6px 18px rgba(0,0,0,0.2)',
          color: 'white',
          overflow: 'hidden',
          transform: hover ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
      >
        <img
          src={hImage}
          alt="molkky"
          style={{
            width: '220px',
            objectFit: 'cover',
            filter: hover ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.9)',
            transition: 'filter 0.3s ease'
          }}
        />
        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '0.25rem', fontWeight: '700' }}>
            Tournoi de Molkky de Lyon 3
          </h3>
          <p style={{ fontSize: '0.95rem', fontWeight: '600', opacity: 0.85 }}>
            Le 23/09/2025 • Au parc de la ville
          </p>
          <p
            style={{
              flexGrow: 1,
              fontSize: '1rem',
              lineHeight: '1.4',
              marginTop: '0.75rem',
              marginBottom: '1.25rem',
              opacity: 0.9,
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Rejoignez-nous pour un tournoi amical de Molkky au parc de la ville. 
            Que vous soyez débutant ou expert, tout le monde est le bienvenu ! 
            Des prix seront offerts aux gagnants.
          </p>
          <button
            style={{
              alignSelf: 'flex-start',
              backgroundColor: '#fff',
              color: '#2575fc',
              border: 'none',
              borderRadius: '25px',
              padding: '0.6rem 1.6rem',
              fontWeight: '700',
              fontSize: '1rem',
              boxShadow: '0 4px 14px rgba(37, 117, 252, 0.4)',
              transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#2575fc';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#2575fc';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            S'inscrire au tournoi
          </button>
        </div>
      </div>
    </section>
  );
}
