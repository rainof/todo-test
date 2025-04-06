import React, { useState } from 'react';

function TodoList() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
      if (input.trim() === "") return;
      setTodos([...todos, {id: Date.now(), text: input}]);
      setInput("");
      console.log("Todo:", todos);
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
            <li>item 1</li>
            <li>item 2</li>
          </ul>
        </div>
      </>
    );
}

export default TodoList;