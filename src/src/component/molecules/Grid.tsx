/**
 * MOLECULE: Grille d'éléments réutilisable
 * Utilisée pour afficher les listes d'éléments (événements, actualités, utilisateurs)
 */

import { ReactNode } from 'react';
import { Card } from './Card';

interface GridProps {
  items: any[];
  renderItem: (item: any) => ReactNode;
  emptyMessage?: string;
  loading?: boolean;
  className?: string;
}

export function Grid({
  items,
  renderItem,
  emptyMessage = 'Aucun élément trouvé',
  loading = false,
  className = '',
}: GridProps) {
  if (loading) {
    return (
      <div className={`grid grid--loading ${className}`}>
        <div className="grid__loading">
          <div className="grid__loading-spinner" />
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={`grid grid--empty ${className}`}>
        <div className="grid__empty">
          <p>{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return <div className={`grid ${className}`}>{items.map(renderItem)}</div>;
}
