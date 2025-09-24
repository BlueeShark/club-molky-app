
export function About() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Bannière */}
      <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
        <img
          src="../../../public/gia.png" className="imgs"
          alt="Équipe CRHOM"
          style={{ width: "100%", objectFit: "cover", height:"500px" }}
        />
      </div>

      <div style={{ padding: "40px" }}>
        {/* Titre */}
        <h1
          style={{
            color: "#0077cc",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          À propos du Club Rhodanien de Mölkky (CRHOM)
        </h1>

        {/* Histoire du club */}
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto 40px",
          }}
        >
          CRHOM, plus qu’un club : une famille autour du Mölkky.  
          Né au bord du Rhône, notre club réunit passionnés et curieux pour partager des moments conviviaux, relever des défis et faire rayonner ce jeu d’adresse venu de Finlande.
        </p>

        {/* Section image + texte */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "50px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "350px", flex: "1" }}>
            <img
              src="/Jeu.jpg"
              alt="Partie de Mölkky"
              style={{ borderRadius: "10px", width: "100%" }}
            />
          </div>
          <p
            style={{
              flex: "1",
              fontSize: "16px",
              lineHeight: "1.6",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "350px",
              textAlign: "justify",
            }}
          >
            Le Club Rhodanien de Mölkky, c’est l’alliance du jeu, de la stratégie
            et de la convivialité.  
            Nous organisons régulièrement des tournois, des ateliers d’initiation
            et des moments festifs pour tous les âges.  
            Chaque partie est une nouvelle occasion de se retrouver et de partager.
          </p>
        </div>

        {/* Section valeurs */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#0077cc",
          }}
        >
          Nos valeurs
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Valeur 1 */}
          <div style={{ textAlign: "center", width: "250px" }}>
            <img
              src="/Möllky1.jpg"
              alt="Convivialité"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#0077cc" }}>Convivialité</h3>
            <p>Un club où chaque rencontre est un moment de partage et d’amitié.</p>
          </div>

          {/* Valeur 2 */}
          <div style={{ textAlign: "center", width: "250px" }}>
            <img
              src="/membres.jpg"
              alt="Esprit d’équipe"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#0077cc" }}>Esprit d’équipe</h3>
            <p>Jouer ensemble, s’encourager et progresser collectivement.</p>
          </div>

          {/* Valeur 3 */}
          <div style={{ textAlign: "center", width: "250px" }}>
            <img
              src="/Passion.jpg"
              alt="Passion"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#0077cc" }}>Passion</h3>
            <p>Partager l’amour du Mölkky et faire découvrir ce jeu au plus grand nombre.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
