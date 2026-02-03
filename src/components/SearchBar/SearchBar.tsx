import { type FormEvent, type KeyboardEvent, useId } from "react";
import { Button } from "../Button/Button";

export interface SearchBarProps {
  /**
   * Current value of the search input
   */
  value: string;
  /**
   * Callback for the change of the input value
   */
  onValueChange: (value: string) => void;
  /**
   * Callback to execute the search
   */
  onSearch: (searchTerm: string) => void;
  /**
   * Placeholder for the search input
   */
  placeholder?: string;
  /**
   * Label for the search input
   */
  label?: string;
  /**
   * Label for the search button
   */
  buttonLabel?: string;
  /**
   * Disables the search bar
   */
  disabled?: boolean;
}

/**
 * Stateless SearchBar component.
 */
export const SearchBar = ({
  value,
  onValueChange,
  onSearch,
  placeholder = "Search...",
  label = "Search field",
  buttonLabel = "Search",
  disabled = false,
}: SearchBarProps) => {
  const id = useId();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(value);
    }
  };

  return (
    <search className="search-bar">
      <form onSubmit={handleSubmit}>
        <label className={"sr-only"} htmlFor={id}>
          {label}
        </label>
        <input
          type="search"
          id={id}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="search-bar__input"
        />
        <Button type="submit" disabled={disabled}>
          {buttonLabel}
        </Button>
      </form>
    </search>
  );
};
