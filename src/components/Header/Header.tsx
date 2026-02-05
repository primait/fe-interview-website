import type { HTMLAttributes } from "react";
import { classNames } from "@/utils/utils";
import styles from "./Header.module.css";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps) => (
  <header className={classNames(styles.header, className)} {...props}>
    Hello 👋
  </header>
);
