import { useState } from 'react';
import {
  FaPen,
  FaTrash,
  FaPlus,
  FaMagnifyingGlass,
  FaEye,
} from 'react-icons/fa6';
import './style/admin.css';

interface News {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  status: 'published' | 'draft' | 'archived';
  views: number;
}

export function AdminNews() {
  const [news, setNews] = useState<News[]>([
    {
      id: 1,
      title: 'Nouveau tournoi annoncé pour février',
      excerpt: "Le club organise un grand tournoi d'hiver...",
      author: 'Marie Martin',
      publishDate: '2024-01-15',
      status: 'published',
      views: 245,
    },
    {
      id: 2,
      title: 'Résultats du championnat régional',
      excerpt: 'Découvrez les gagnants de notre dernier championnat...',
      author: 'Jean Dupont',
      publishDate: '2024-01-10',
      status: 'published',
      views: 189,
    },
    {
      id: 3,
      title: "Nouvelle saison d'initiation",
      excerpt: "Le club lance ses sessions d'initiation au Mölkky...",
      author: 'Pierre Durand',
      publishDate: '2024-01-08',
      status: 'draft',
      views: 0,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = news.filter(
    article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteNews = (newsId: number) => {
    if (
      window.confirm('Êtes-vous sûr de vouloir supprimer cette actualité ?')
    ) {
      setNews(news.filter(article => article.id !== newsId));
    }
  };

  const handleToggleStatus = (newsId: number) => {
    setNews(
      news.map(article => {
        if (article.id === newsId) {
          let newStatus: News['status'];
          switch (article.status) {
            case 'published':
              newStatus = 'draft';
              break;
            case 'draft':
              newStatus = 'published';
              break;
            case 'archived':
              newStatus = 'published';
              break;
            default:
              newStatus = 'draft';
          }
          return { ...article, status: newStatus };
        }
        return article;
      })
    );
  };

  const getStatusLabel = (status: News['status']) => {
    switch (status) {
      case 'published':
        return 'Publié';
      case 'draft':
        return 'Brouillon';
      case 'archived':
        return 'Archivé';
      default:
        return status;
    }
  };

  const getStatusClass = (status: News['status']) => {
    return status;
  };

  return (
    <div className="admin-news">
      <div className="section-header">
        <h1>Gestion des actualités</h1>
        <button className="btn-primary">
          <FaPlus /> Créer une actualité
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="search-input">
          <FaMagnifyingGlass />
          <input
            type="text"
            placeholder="Rechercher par titre ou auteur..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* News Grid */}
      <div className="news-grid">
        {filteredNews.map(article => (
          <div key={article.id} className="news-card">
            <div className="news-header">
              <h3>{article.title}</h3>
              <span
                className={`status-badge ${getStatusClass(article.status)}`}
              >
                {getStatusLabel(article.status)}
              </span>
            </div>

            <div className="news-content">
              <p className="news-excerpt">{article.excerpt}</p>
            </div>

            <div className="news-meta">
              <div className="meta-item">
                <strong>Auteur:</strong> {article.author}
              </div>
              <div className="meta-item">
                <strong>Publié le:</strong>{' '}
                {new Date(article.publishDate).toLocaleDateString('fr-FR')}
              </div>
              <div className="meta-item">
                <FaEye /> {article.views} vues
              </div>
            </div>

            <div className="news-actions">
              <button
                className="btn-secondary"
                onClick={() => handleToggleStatus(article.id)}
              >
                <FaPen /> Modifier
              </button>
              <button
                className="btn-danger"
                onClick={() => handleDeleteNews(article.id)}
              >
                <FaTrash /> Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="no-results">
          <p>Aucune actualité trouvée</p>
        </div>
      )}
    </div>
  );
}
