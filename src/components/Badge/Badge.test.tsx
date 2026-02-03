import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Badge, type BadgeProps } from "./Badge";

describe("Badge", () => {
  describe("as badge (default)", () => {
    it("renders as a span element", () => {
      const { container } = render(<Badge />);
      expect(container.querySelector("span")).toBeInTheDocument();
    });

    it("displays the variant label capitalized", () => {
      render(<Badge variant="admin" />);
      expect(screen.getByText("Admin")).toBeInTheDocument();
    });

    it("applies correct CSS classes", () => {
      const { container } = render(<Badge variant="editor" size="s" />);

      const badge = container.querySelector("span");
      expect(badge).toHaveClass("badge", "badge--editor", "badge--s");
    });

    it("does not respond to clicks", async () => {
      const onSelectionChange = vi.fn();
      const user = userEvent.setup();

      const { container } = render(<Badge as="badge" onSelectionChange={onSelectionChange} />);

      const badge = container.querySelector("span");
      if (badge) {
        await user.click(badge);
      }

      expect(onSelectionChange).not.toHaveBeenCalled();
    });

    it("does not have aria-pressed attribute", () => {
      const { container } = render(<Badge as="badge" />);
      const badge = container.querySelector("span");
      expect(badge).not.toHaveAttribute("aria-pressed");
    });
  });

  describe("as filter", () => {
    it("renders as a button element", () => {
      render(<Badge as="filter" />);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("has correct button type", () => {
      render(<Badge as="filter" />);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "button");
    });

    it("calls onSelectionChange when clicked", async () => {
      const onSelectionChange = vi.fn();
      const user = userEvent.setup();

      render(<Badge as="filter" onSelectionChange={onSelectionChange} />);

      await user.click(screen.getByRole("button"));

      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      expect(onSelectionChange).toHaveBeenCalledWith(true);
    });

    it("toggles selection state", async () => {
      const onSelectionChange = vi.fn();
      const user = userEvent.setup();

      const { rerender } = render(
        <Badge as="filter" isSelected={false} onSelectionChange={onSelectionChange} />,
      );

      await user.click(screen.getByRole("button"));
      expect(onSelectionChange).toHaveBeenCalledWith(true);

      rerender(<Badge as="filter" isSelected={true} onSelectionChange={onSelectionChange} />);

      await user.click(screen.getByRole("button"));
      expect(onSelectionChange).toHaveBeenCalledWith(false);
    });

    it("has aria-pressed attribute when selected", () => {
      render(<Badge as="filter" isSelected={true} />);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("has aria-pressed false when not selected", () => {
      render(<Badge as="filter" isSelected={false} />);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-pressed", "false");
    });

    it("supports keyboard interaction", async () => {
      const onSelectionChange = vi.fn();
      const user = userEvent.setup();

      render(<Badge as="filter" onSelectionChange={onSelectionChange} />);

      const button = screen.getByRole("button");
      button.focus();
      await user.keyboard("{Enter}");

      expect(onSelectionChange).toHaveBeenCalledTimes(1);
    });
  });

  describe("variants", () => {
    it.each<[BadgeProps["variant"], string]>([
      ["admin", "Admin"],
      ["editor", "Editor"],
      ["viewer", "Viewer"],
      ["guest", "Guest"],
    ])("renders %s variant correctly", (variant, label) => {
      render(<Badge variant={variant} />);
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  describe("sizes", () => {
    it("applies small size class", () => {
      const { container } = render(<Badge size="s" />);
      const badge = container.querySelector("span");
      expect(badge).toHaveClass("badge--s");
    });

    it("applies medium size class", () => {
      const { container } = render(<Badge size="m" />);
      const badge = container.querySelector("span");
      expect(badge).toHaveClass("badge--m");
    });
  });

  it("applies custom id", () => {
    render(<Badge id="custom-badge" />);
    expect(document.getElementById("custom-badge")).toBeInTheDocument();
  });
});
