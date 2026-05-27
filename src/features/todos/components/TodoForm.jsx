import React, { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState(false);

  const { task, setTask } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length < 10) {
      setMessage(true);
      return;
    }

    setMessage(false);

    const newTask = {
      id: Date.now(),
      text: text,
      status: "pending",
      priority: "medium",
    };

    setTask([...task, newTask]);
    setText("");
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Add New Task
        </h2>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter your task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 transition duration-200"
          />

          {message && (
            <p className="text-red-500 text-sm font-medium">
              Task must be at least 10 characters long.
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white 
                       font-semibold py-3 rounded-xl transition duration-300 
                       shadow-md hover:shadow-lg"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;