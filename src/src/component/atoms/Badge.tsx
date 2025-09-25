/**
 * ATOM: Badge de statut réutilisable
 * Utilisé pour afficher les statuts (actif/inactif, publié/brouillon, etc.)
 */

interface BadgeProps {
  status: string;
  label: string;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Badge({
  status,
  label,
  variant = 'info',
  size = 'md',
  className = '',
}: BadgeProps) {
  const baseClasses = 'badge';
  const variantClasses = {
    success: 'badge--success',
    warning: 'badge--warning',
    error: 'badge--error',
    info: 'badge--info',
    secondary: 'badge--secondary',
  };
  const sizeClasses = {
    sm: 'badge--sm',
    md: 'badge--md',
    lg: 'badge--lg',
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} data-status={status}>
      {label}
    </span>
  );
}
