import { Trash2 } from "lucide-react";

function TodoItem({ todo, removeTodo }) {
  return (
    <li className="flex items-center justify-between p-2 sm:p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 mb-2">
      <span className="text-sm sm:text-base text-gray-700 break-words mr-2 flex-1">{todo.text}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 hover:text-red-700 p-1 sm:p-1.5 rounded-full hover:bg-red-100 transition-colors duration-200 flex-shrink-0"
        aria-label="Delete task"
      >
        <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </li>
  );
}

export default TodoItem;
