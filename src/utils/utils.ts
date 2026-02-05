/**
 * Combines multiple CSS classes into a single string.
 * Filters out falsy values and joins the remaining classes with a space.
 *
 * @param classes - Array of class names, booleans, or undefined values
 * @returns String containing the classes joined by spaces
 *
 * @example
 * classNames('btn', 'btn-primary') // returns 'btn btn-primary'
 * classNames('btn', isActive && 'active', undefined) // returns 'btn active' if isActive is true
 *
 */
export const classNames = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(" ");
