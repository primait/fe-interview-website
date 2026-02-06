"use client";

import { SearchBar } from "@/components/SearchBar/SearchBar";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.home}>
      <SearchBar
        value={""}
        onValueChange={console.log}
        onSearch={console.log}
        className={styles["home__search-bar"]}
      />
    </main>
  );
}
