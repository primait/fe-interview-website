import type { ButtonHTMLAttributes } from "react";

/**
 * Props for the Button component
 * Extends standard HTML button attributes
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Simple button component that wraps native HTML button element
 */
export const Button = ({ type = "button", ...props }: ButtonProps) => (
  <button type={type} {...props} />
);
