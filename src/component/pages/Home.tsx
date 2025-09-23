import React from 'react';

// Plus besoin d'importer un fichier de style ici
// Vite s'assure que index.css est chargé globalement via votre main.tsx

export function Home() {
  return (
    // On utilise des `className` avec des noms simples et descriptifs
    <main className="home-page-container">

      <header className="home-header">
        <h1>Le Club Rhodanien de Mölkky - CRHOM</h1>
      </header>

      {/* --- SECTION 1 : PRÉSENTATION --- */}
      <section className="info-section">
        <div className="info-texte">
          <p>
            CRHOM 69 a pour but de promouvoir, développer et faire découvrir la pratique du Mölkky 
            à travers des ateliers d’initiation, des rencontres amicales, des tournois et la 
            participation à différents événements.
          </p>
          <p>
            Créée par des passionnés de ce jeu d’adresse convivial venu de Finlande, 
            l’association souhaite rassembler les joueurs débutants comme confirmés autour 
            d’un esprit de partage et de compétition saine.
          </p>
        </div>
        <div className="info-image">
          <img 
            src="https://media.istockphoto.com/id/1395240781/fr/photo/m%C3%B6lkky-un-sport-finlandais-traditionnel.jpg?s=1024x1024&w=is&k=20&c=2zLfwkryzxA_JljeafUyOoJrAYyx6fP7wU064wvfNIY=" 
            alt="Jeu de Mölkky posé sur de l'herbe" 
          />
        </div>
      </section>

      {/* --- SECTION 2 : QUI SOMMES-NOUS (avec layout inversé) --- */}
      <section className="info-section reversed">
        <div className="info-texte">
          <h2>Qui sommes-nous ?</h2>
          <p>
            Nous sommes l'équipe fondatrice du CRHOM, une bande de passionnés réunis par 
            une vision commune : faire du Mölkky bien plus qu'un sport, mais un véritable 
            vecteur de lien social à Lyon.
          </p>
          <p>
            Notre moteur collectif est de bâtir une communauté ouverte et bienveillante où le 
            plaisir de jouer ensemble l'emporte sur l'enjeu de la victoire.
          </p>
        </div>
        <div className="info-image">
          <img 
            src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/490122723_2468494306817140_6563573591558615864_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=fpDPfnripEUQ7kNvwEk-6Pn&_nc_oc=AdkGDSCdVxUNM3GjP9FSrD-7A3FUTNS25seJeyqymvGp-rsydEHBjf2mAG_k_RVu0FQ&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=nL6FEsmigo9j11iBjzyGgw&oh=00_Afb_9S5RfNpQFBEzz1dTOgchrI1q8uyoDDOolcj9oFZhtw&oe=68D84AF0" 
            alt="L'équipe fondatrice du club CRHOM"
          />
        </div>
      </section>
      
    </main>
  );
}