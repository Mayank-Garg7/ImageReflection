import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TaskList from "./TaskList";

function ShowTodos() {
  const { task } = useContext(TodoContext);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      {task.map((item) => (
        <TaskList
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default ShowTodos;