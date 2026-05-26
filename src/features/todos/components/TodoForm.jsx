import React, { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm() {
  const [text, setText] = useState("");

  const { task, setTask } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;