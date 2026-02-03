import { type HTMLAttributes, type ReactNode, useId } from "react";

/**
 * Props for the FiltersBar component
 */
export interface FiltersBarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visible label for the filters group
   */
  label: string;
  /**
   * Filter items (badges as filter) to display
   */
  children: ReactNode;
  /**
   * Optional description for additional context
   */
  description?: string;
}

/**
 * Accessible container for a group of filter items.
 * Provides proper semantic structure and ARIA attributes for screen readers.
 */
export const FiltersBar = ({
  label,
  children,
  description,
  className = "",
  ...props
}: FiltersBarProps) => {
  const id = useId();
  const descriptionId = description ? `${id}-description` : undefined;

  return (
    <div className={`chip-group ${className}`} {...props}>
      <div id={id} className="chip-group__label">
        {label}
      </div>
      {description && (
        <div id={descriptionId} className="chip-group__description">
          {description}
        </div>
      )}
      {/** biome-ignore lint/a11y/useSemanticElements: This is a correct alternative for a set of chips */}
      <div
        role="group"
        aria-labelledby={id}
        aria-describedby={descriptionId}
        className="chip-group__items"
      >
        {children}
      </div>
    </div>
  );
};
