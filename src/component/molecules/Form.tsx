/**
 * MOLECULE: Formulaire réutilisable
 * Utilisé pour les formulaires de création et modification
 */

import { ReactNode } from 'react';
import { Button } from '../atoms/Button';
import { FormField } from '../atoms/FormField';

interface FormProps {
  title: string;
  subtitle?: string;
  fields: {
    name: string;
    label?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'time' | 'url' | 'textarea' | 'select';
    placeholder?: string;
    required?: boolean;
    options?: { value: string; label: string }[];
    rows?: number;
    min?: string | number;
    max?: string | number;
    step?: string | number;
  }[];
  values: Record<string, any>;
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel?: () => void;
  loading?: boolean;
  className?: string;
}

export function Form({
  title,
  subtitle,
  fields,
  values,
  errors,
  onChange,
  onSubmit,
  onCancel,
  loading = false,
  className = ''
}: FormProps) {
  return (
    <form onSubmit={onSubmit} className={`form ${className}`}>
      <div className="form__header">
        <h2 className="form__title">{title}</h2>
        {subtitle && <p className="form__subtitle">{subtitle}</p>}
      </div>

      <div className="form__content">
        {fields.map((field, index) => (
          <FormField
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            value={values[field.name] || ''}
            onChange={onChange}
            error={errors[field.name]}
            required={field.required}
            options={field.options}
            rows={field.rows}
            min={field.min}
            max={field.max}
            step={field.step}
            className="form__field"
          />
        ))}
      </div>

      <div className="form__actions">
        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            disabled={loading}
          >
            Annuler
          </Button>
        )}
        <Button
          type="submit"
          variant="primary"
          loading={loading}
        >
          {loading ? 'Chargement...' : 'Enregistrer'}
        </Button>
      </div>
    </form>
  );
}
