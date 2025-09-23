import React from 'react';
import './style/news.css';

// 1. On prépare un tableau avec les données de nos actualités
const newsData = [
  {
    id: 1,
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS1wSkWJDUiNZCa51O1BygnesT5vZOf0wQ3RXgrqKiZvXlEKfJ2tHUAl40Tc6DO8dFGfr0rDDKvBVwS-hHWkN0dUT5f3ElpdTSztd3ynYSsJPxl24Q3guQXXaIbYNR2TfVXKG2q2WPVjA/s640/molkky+belleville.jpg",
    altText: "Podium du tournoi de Mölkky à Belleville",
    description: "Le CRHOM laisse sa 1ere place à la Mölkky Family lors du tournoi de Belleville. On reste sur le podium à la 3eme marche. Encore merci à la classe 84 !"
  },
  {
    id: 2,
    imageUrl: "https://scontent.fcdg3-1.fna.fbcdn.net/v/t39.30808-6/514721260_24125337650394976_681795972951711923_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=35GfhvjwlBcQ7kNvwGs4iHd&_nc_oc=Adk-4z47-bNMGgTV2QkRsQLo_jsqHZfxsadeepqk_Do1C_H1G8m2ZD2HdUGfJr1UTn8&_nc_zt=23&_nc_ht=scontent.fcdg3-1.fna&_nc_gid=COQMoVde_eTwBsNMQCkuWw&oh=00_AfZnT-I_449uDgGZswSz4SJa7QF1HRENqAXUqHi3a17GBw&oe=68D87C5F",
    altText: "Affiche de l'Open de France de Mölkky",
    description: "La finale va débuter dans quelques instants..."
  },
  {
    id: 3,
    imageUrl: "https://scontent.fcdg3-1.fna.fbcdn.net/v/t39.30808-6/511119603_9932828733502277_1352873655710992327_n.jpg?stp=c0.352.1194.623a_dst-jpg_s526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=75d36f&_nc_ohc=XUhMowYMDAoQ7kNvwFwDxbn&_nc_oc=AdlqDq52YM0-sa1ACwRrYTQ4ZauldFC1Y2vMVKdzLBNjXfix4tJo1_XUnF-rL4dScHc&_nc_zt=23&_nc_ht=scontent.fcdg3-1.fna&_nc_gid=hs-VlJ4bAkf0Uxg0KUToKg&oh=00_AfbQ1H693M0sdr4ttcLAb5eZADaLGwoRbxzMfLeM8IuOBw&oe=68D855A5",
    altText: "Initiation au Mölkky dans un parc",
    description: "Allez Hop ! Rdv à St Romain au Mont d'or dimanche prochain pour remettre le titre en jeu "
  }
];

export function News() {
  return (
    // 2. On utilise le conteneur de grille
    <div className="news-container">
      {/* 3. On boucle sur les données pour créer une carte pour chaque actualité */}
      {newsData.map(item => (
        <div key={item.id} className="news-card">
          <img 
            src={item.imageUrl} 
            alt={item.altText}
          />
          <div className="news-content">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}