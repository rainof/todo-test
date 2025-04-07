import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">To-Do List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
        />
        <button
          onClick={addTodo}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
        >
          Add
        </button>
      </div>

      {todos.length > 0 ? (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center py-4">No tasks yet. Add one above!</p>
      )}
    </div>
  );
}

export default TodoList;
