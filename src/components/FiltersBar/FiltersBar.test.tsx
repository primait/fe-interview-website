import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FiltersBar } from "./FiltersBar";
import styles from "./FiltersBar.module.css";

describe("FiltersBar", () => {
  it("renders with label", () => {
    render(
      <FiltersBar label="Select filters" id="filters">
        <div>Filter content</div>
      </FiltersBar>,
    );

    expect(screen.getByText("Select filters")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <FiltersBar label="Filters" id="test-filters">
        <button type="button">Filter 1</button>
        <button type="button">Filter 2</button>
      </FiltersBar>,
    );

    expect(screen.getByRole("button", { name: "Filter 1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Filter 2" })).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <FiltersBar label="Filters" id="filters" className="custom-class">
        <div>Content</div>
      </FiltersBar>,
    );

    const filtersBar = container.querySelector(`.${styles["filters-bar"]}`);
    expect(filtersBar).toHaveClass("custom-class");
  });

  it("has correct ARIA structure with group role", () => {
    render(
      <FiltersBar label="Filters" id="test-filters">
        <div>Content</div>
      </FiltersBar>,
    );

    const group = screen.getByRole("group");
    expect(group).toBeInTheDocument();
  });

  it("associates label with group via aria-labelledby", () => {
    render(
      <FiltersBar label="Role filters" id="role-filters">
        <div>Content</div>
      </FiltersBar>,
    );

    const group = screen.getByRole("group", { name: "Role filters" });
    expect(group).toBeInTheDocument();
  });

  it("does not have aria-describedby when no description is provided", () => {
    render(
      <FiltersBar label="Filters" id="filters">
        <div>Content</div>
      </FiltersBar>,
    );

    const group = screen.getByRole("group");
    expect(group).not.toHaveAttribute("aria-describedby");
  });

  it("applies CSS classes correctly", () => {
    const { container } = render(
      <FiltersBar label="Filters" id="filters">
        <div>Content</div>
      </FiltersBar>,
    );

    expect(container.querySelector(`.${styles["filters-bar__label"]}`)).toBeInTheDocument();
    expect(container.querySelector(`.${styles["filters-bar__filters"]}`)).toBeInTheDocument();
  });

  it("renders multiple children correctly", () => {
    render(
      <FiltersBar label="Filters" id="filters">
        <span>Child 1</span>
        <span>Child 2</span>
        <span>Child 3</span>
      </FiltersBar>,
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
    expect(screen.getByText("Child 3")).toBeInTheDocument();
  });
});
