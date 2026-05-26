import React, { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm() {
  const [text, setText] = useState("");

  const { task, setTask } = useContext(TodoContext);

 

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