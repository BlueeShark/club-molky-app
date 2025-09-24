/**
 * ATOM: Élément avec icône et texte
 * Utilisé pour les détails (date, lieu, participants, etc.)
 */

import { ReactNode } from 'react';

interface IconTextProps {
  icon: ReactNode;
  text: string | ReactNode;
  className?: string;
  direction?: 'horizontal' | 'vertical';
}

export function IconText({
  icon,
  text,
  className = '',
  direction = 'horizontal'
}: IconTextProps) {
  const baseClasses = 'icon-text';
  const directionClasses = {
    horizontal: 'icon-text--horizontal',
    vertical: 'icon-text--vertical'
  };

  const classes = [
    baseClasses,
    directionClasses[direction],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <span className="icon-text__icon">{icon}</span>
      <span className="icon-text__text">{text}</span>
    </div>
  );
}
