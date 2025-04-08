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

  it("should add a new todo when clicking Add button", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Learn Vitest" } });
    fireEvent.click(button);

    expect(screen.getByText("Learn Vitest")).toBeInTheDocument();
  });

  it("should remove a todo when clicking Remove button", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test Remove" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test Remove")).toBeInTheDocument();

    const deleteButton = screen.getByLabelText("Delete task");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Test Remove")).not.toBeInTheDocument();
  });
});
