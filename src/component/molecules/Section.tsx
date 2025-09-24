/**
 * MOLECULE: Section avec en-tête réutilisable
 * Utilisée pour les sections avec titre et actions
 */

import type { ReactNode } from 'react';
import { Button } from '../atoms/Button';

interface SectionProps {
  title: string;
  subtitle?: string;
  actions?: {
    label: string;
    variant: 'primary' | 'secondary' | 'danger';
    onClick?: () => void;
    to?: string;
    icon?: ReactNode;
  }[];
  children: ReactNode;
  className?: string;
}

export function Section({
  title,
  subtitle,
  actions = [],
  children,
  className = '',
}: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="section__header">
        <div className="section__info">
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>
        {actions.length > 0 && (
          <div className="section__actions">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant}
                onClick={action.onClick}
                className="section__action"
              >
                {action.icon}
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className="section__content">{children}</div>
    </section>
  );
}
