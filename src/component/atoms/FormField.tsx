/**
 * ATOM: Champ de formulaire réutilisable
 * Utilisé pour tous les inputs, textareas et selects
 */

interface FormFieldProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'time' | 'url';
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  name: string;
  id?: string;
  className?: string;
  rows?: number; // Pour textarea
  min?: string | number; // Pour number et date
  max?: string | number; // Pour number et date
  step?: string | number; // Pour number
  options?: { value: string; label: string }[]; // Pour select
}

export function FormField({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  name,
  id,
  className = '',
  rows,
  min,
  max,
  step,
  options
}: FormFieldProps) {
  const fieldId = id || name;
  const hasError = Boolean(error);

  const inputClasses = [
    'form-input',
    hasError ? 'form-input--error' : '',
    className
  ].filter(Boolean).join(' ');

  const renderInput = () => {
    if (type === 'textarea' || rows) {
      return (
        <textarea
          id={fieldId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          rows={rows || 4}
          className={inputClasses}
        />
      );
    }

    if (type === 'select' && options) {
      return (
        <select
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={inputClasses}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={type}
        id={fieldId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        min={min}
        max={max}
        step={step}
        className={inputClasses}
      />
    );
  };

  return (
    <div className="form-group">
      {label && (
        <label htmlFor={fieldId} className="form-label">
          {label}
          {required && <span className="form-required">*</span>}
        </label>
      )}
      {renderInput()}
      {hasError && <span className="form-error">{error}</span>}
    </div>
  );
}
