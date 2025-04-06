import React, { useState } from 'react';

function TodoList() {
    const [input, setInput] = useState("");
    console.log("Input", input);

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
          <button>Add</button>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
          </ul>
        </div>
      </>
    );
}

export default TodoList;