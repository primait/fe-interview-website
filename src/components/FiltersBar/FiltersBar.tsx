import { type HTMLAttributes, type ReactNode, useId } from "react";
import styles from "./FiltersBar.module.css";

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

  return (
    <div className={`${styles["filters-bar"]} ${className}`} {...props}>
      <div id={id} className={styles["filters-bar__label"]}>
        {label}
      </div>
      {/** biome-ignore lint/a11y/useSemanticElements: This is a correct alternative for a set of chips */}
      <div role="group" aria-labelledby={id} className={styles["filters-bar__filters"]}>
        {children}
      </div>
    </div>
  );
};
