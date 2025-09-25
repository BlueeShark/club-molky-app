/**
 * ATOM: Barre de recherche réutilisable
 * Utilisée dans les pages de gestion (utilisateurs, événements, actualités)
 */

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SearchBar({
  placeholder = 'Rechercher...',
  value,
  onChange,
  className = '',
}: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`search-bar ${className}`}>
      <div className="search-input">
        <svg
          className="search-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className="search-input__field"
        />
      </div>
    </div>
  );
}
