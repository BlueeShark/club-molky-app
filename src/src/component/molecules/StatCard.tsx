/**
 * MOLECULE: Carte de statistiques réutilisable
 * Utilisée pour afficher les statistiques dans le dashboard
 */

import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    label: string;
    type: 'positive' | 'negative' | 'neutral';
  };
  className?: string;
}

export function StatCard({
  icon,
  title,
  value,
  subtitle,
  trend,
  className = '',
}: StatCardProps) {
  return (
    <div className={`stat-card ${className}`}>
      <div className="stat-card__icon">{icon}</div>
      <div className="stat-card__content">
        <h3 className="stat-card__value">{value}</h3>
        <p className="stat-card__title">{title}</p>
        {subtitle && <p className="stat-card__subtitle">{subtitle}</p>}
        {trend && (
          <div className={`stat-card__trend stat-card__trend--${trend.type}`}>
            <span className="stat-card__trend-value">
              {trend.type === 'positive'
                ? '+'
                : trend.type === 'negative'
                  ? '-'
                  : ''}
              {trend.value}%
            </span>
            <span className="stat-card__trend-label">{trend.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
