import { Trash2 } from "lucide-react";

function TodoItem({ todo, removeTodo }) {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 mb-2">
      <span className="text-gray-700">{todo.text}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 hover:text-red-700 p-1.5 rounded-full hover:bg-red-100 transition-colors duration-200"
        aria-label="Delete task"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </li>
  );
}

export default TodoItem;
