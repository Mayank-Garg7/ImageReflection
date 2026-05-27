import React, { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";
import Card from "../../../shared/Card";

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
      text,
      status: "pending",
      priority: "medium",
    };

    setTask([...task, newTask]);
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-800">
            Create Task
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Add a new task to manage your workflow
          </p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="
              w-full
              rounded-lg
              border
              border-slate-300
              bg-white
              px-3
              py-2.5
              text-sm
              text-slate-700
              shadow-sm
              outline-none
              transition
              duration-200
              placeholder:text-slate-400
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />

          {message && (
            <p className="mt-2 text-sm font-medium text-red-500">
              Task must be at least 10 characters long.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="
            inline-flex
            items-center
            justify-center
            rounded-lg
            bg-slate-800
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            duration-200
            hover:bg-slate-700
            focus:outline-none
            focus:ring-4
            focus:ring-slate-200
          "
        >
          Add Task
        </button>
      </form>
    </Card>
  );
}

export default TodoForm;