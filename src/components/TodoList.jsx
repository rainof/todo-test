import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    console.log("Todo:", todos);

    const addTodo = () => {
      if (input.trim() === "") return;
      setTodos([...todos, {id: Date.now(), text: input}]);
      setInput("");
    }

    const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
      <>
        <div>
          <h1>To-Do List</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={addTodo}>Add</button>
          <ul>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
            ))}
          </ul>
        </div>
      </>
    );
}

export default TodoList;