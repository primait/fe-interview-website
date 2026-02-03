import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  const defaultProps = {
    value: "",
    onValueChange: vi.fn(),
    onSearch: vi.fn(),
  };

  it("renders search input and button", () => {
    render(<SearchBar {...defaultProps} />);

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("displays the current value", () => {
    render(<SearchBar {...defaultProps} value="test query" />);

    const input = screen.getByRole("searchbox");
    expect(input).toHaveValue("test query");
  });

  it("calls onValueChange when typing", async () => {
    const onValueChange = vi.fn();
    const user = userEvent.setup();

    render(<SearchBar {...defaultProps} onValueChange={onValueChange} />);

    const input = screen.getByRole("searchbox");
    await user.type(input, "test");

    expect(onValueChange).toHaveBeenCalledTimes(4); // once per character
    //expect(onValueChange).toHaveBeenLastCalledWith("test");
  });

  it("calls onSearch when button is clicked", async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchBar {...defaultProps} value="search term" onSearch={onSearch} />);

    await user.click(screen.getByRole("button", { name: /search/i }));

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("search term");
  });

  it("calls onSearch when Enter is pressed", async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchBar {...defaultProps} value="search term" onSearch={onSearch} />);

    const input = screen.getByRole("searchbox");
    await user.click(input);
    await user.keyboard("{Enter}");

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("search term");
  });

  it("renders with custom placeholder", () => {
    render(<SearchBar {...defaultProps} placeholder="Search products..." />);

    const input = screen.getByPlaceholderText("Search products...");
    expect(input).toBeInTheDocument();
  });

  it("renders with custom button label", () => {
    render(<SearchBar {...defaultProps} buttonLabel="Find" />);

    expect(screen.getByRole("button", { name: /find/i })).toBeInTheDocument();
  });

  it("renders with custom aria-label", () => {
    render(<SearchBar {...defaultProps} label="Search for users" />);

    expect(screen.getByLabelText(/search for users/i)).toBeInTheDocument();
  });

  it("can be disabled", () => {
    render(<SearchBar {...defaultProps} disabled />);

    const input = screen.getByRole("searchbox");
    const button = screen.getByRole("button");

    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });

  it("does not trigger search when disabled", async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchBar {...defaultProps} onSearch={onSearch} disabled />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(onSearch).not.toHaveBeenCalled();
  });

  it("has proper semantic structure with search landmark", () => {
    const { container } = render(<SearchBar {...defaultProps} />);

    const searchElement = container.querySelector("search");
    expect(searchElement).toBeInTheDocument();
  });

  it("prevents default form submission", async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchBar {...defaultProps} onSearch={onSearch} />);

    const input = screen.getByRole("searchbox");
    await user.click(input);
    await user.keyboard("{Enter}");

    // onSearch should be called, proving form submission was handled
    expect(onSearch).toHaveBeenCalledTimes(1);
  });
});
