import classNames from "classnames";

type BadgeVariant = "admin" | "editor" | "viewer" | "guest";
type BadgeSize = "s" | "m";

/**
 * Props for the Badge component
 */
export interface BadgeProps {
  /**
   * Render as a static badge or as an interactive filter button
   */
  as?: "badge" | "filter";
  /**
   * Visual variant of the badge
   */
  variant?: BadgeVariant;
  /**
   * Size of the badge
   */
  size?: BadgeSize;
  /**
   * Whether the badge is selected (only applies when as="filter")
   */
  isSelected?: boolean;
  /**
   * Callback fired when selection changes (only applies when as="filter")
   */
  onSelectionChange?: (isSelected: boolean) => void;
  /**
   * Unique identifier for the badge
   */
  id?: string;
}

/**
 * Badge component that can be rendered as a static badge or an interactive filter.
 * When rendered as "filter", it acts as a toggleable button.
 */
export const Badge = ({
  as = "badge",
  variant = "viewer",
  size = "m",
  isSelected = false,
  onSelectionChange,
  id,
}: BadgeProps) => {
  const isButton = as === "filter";
  const Component = isButton ? "button" : "span";
  const className = classNames("badge", `badge--${variant}`, `badge--${size}`);
  const badgeLabel = variant.charAt(0).toUpperCase() + variant.slice(1);

  return (
    <Component
      type={isButton ? "button" : undefined}
      id={id}
      className={className}
      onClick={isButton && onSelectionChange ? () => onSelectionChange(!isSelected) : undefined}
      aria-pressed={isButton ? isSelected : undefined}
    >
      {badgeLabel}
    </Component>
  );
};
