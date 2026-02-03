"use client";

import { useState } from "react";
import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import { FiltersBar } from "@/components/FiltersBar/FiltersBar";
import { SearchBar } from "@/components/SearchBar/SearchBar";

export default function ComponentsDemo() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  const handleSearch = (term: string) => {
    console.log("Searching for:", term);
  };

  const handleBadgeChange = (badge: string, isSelected: boolean) => {
    setSelectedBadge(isSelected ? badge : null);
  };

  return (
    <main>
      <h1>Components Demo</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>SearchBar</h2>
        <SearchBar
          value={searchValue}
          onValueChange={setSearchValue}
          onSearch={handleSearch}
          placeholder="Search..."
        />
        <p>Search value: {searchValue}</p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Badges</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Badge variant="admin" onSelectionChange={() => {}} size={"s"} />
          <Badge variant="editor" onSelectionChange={() => {}} size={"s"} />
          <Badge variant="viewer" onSelectionChange={() => {}} />
          <Badge variant="guest" onSelectionChange={() => {}} />
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>FiltersBar with Interactive Badges</h2>
        <FiltersBar label="Select a role" id="role-filters">
          <Badge
            as="filter"
            variant="admin"
            isSelected={selectedBadge === "admin"}
            onSelectionChange={(selected: boolean) => handleBadgeChange("admin", selected)}
          />
          <Badge
            as="filter"
            variant="editor"
            isSelected={selectedBadge === "editor"}
            onSelectionChange={(selected: boolean) => handleBadgeChange("editor", selected)}
          />
          <Badge
            as="filter"
            variant="viewer"
            isSelected={selectedBadge === "viewer"}
            onSelectionChange={(selected: boolean) => handleBadgeChange("viewer", selected)}
          />
          <Badge
            as="filter"
            variant="guest"
            isSelected={selectedBadge === "guest"}
            onSelectionChange={(selected: boolean) => handleBadgeChange("guest", selected)}
          />
        </FiltersBar>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Buttons</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button onClick={() => alert("Clicked!")}>Click me</Button>
          <Button type="submit">Submit</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
    </main>
  );
}
