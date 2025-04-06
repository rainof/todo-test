import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  it("should render input and add button", () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });
});
