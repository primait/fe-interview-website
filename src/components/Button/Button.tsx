"use client";

import type { ButtonHTMLAttributes } from "react";
import { classNames } from "@/utils/utils";
import styles from "./Button.module.css";

/**
 * Props for the Button component
 * Extends standard HTML button attributes
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Simple button component that wraps native HTML button element
 */
export const Button = ({ type = "button", className, ...props }: ButtonProps) => (
  <button className={classNames(styles.button, className)} type={type} {...props} />
);
