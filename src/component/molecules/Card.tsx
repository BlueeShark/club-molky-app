/**
 * MOLECULE: Carte d'élément réutilisable
 * Utilisée pour afficher les événements, actualités, utilisateurs
 */

import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { IconText } from '../atoms/IconText';

interface CardProps {
  _id: number;
  title: string;
  status: string;
  details: { icon: ReactNode; text: string }[];
  actions: {
    label: string;
    variant: 'primary' | 'secondary' | 'danger';
    onClick?: () => void;
    to?: string;
    icon?: ReactNode;
  }[];
  className?: string;
}

export function Card({
  title,
  status,
  details,
  actions,
  className = '',
}: CardProps) {
  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'published':
      case 'upcoming':
      case 'ongoing':
        return 'success';
      case 'inactive':
      case 'draft':
        return 'warning';
      case 'completed':
        return 'info';
      case 'cancelled':
      case 'archived':
        return 'secondary';
      default:
        return 'info';
    }
  };

  const renderAction = (action: CardProps['actions'][0], index: number) => {
    const buttonProps = {
      variant: action.variant,
      onClick: action.onClick,
      children: (
        <>
          {action.icon}
          {action.label}
        </>
      ),
      className: 'card-action',
    };

    if (action.to) {
      return (
        <Link key={index} to={action.to} className="card-action-link">
          <Button {...buttonProps} />
        </Link>
      );
    }

    return <Button key={index} {...buttonProps} />;
  };

  return (
    <div className={`card ${className}`}>
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        <Badge
          status={status}
          label={status}
          variant={getStatusVariant(status)}
          size="sm"
        />
      </div>

      <div className="card__details">
        {details.map((detail, index) => (
          <IconText
            key={index}
            icon={detail.icon}
            text={detail.text}
            className="card__detail"
          />
        ))}
      </div>

      <div className="card__actions">{actions.map(renderAction)}</div>
    </div>
  );
}
