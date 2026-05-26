import { createContext, useEffect, useState } from "react";
import Tasks from "../mock/Tasks.json";

const TodoContext = createContext();

export const ContextProvider = ({ children }) => {
  const [task, setTask] = useState(() => {
    const data = localStorage.getItem("TaskData");

    try {
      return data ? JSON.parse(data) : Tasks;
    } catch (error) {
      console.error("Invalid localStorage data:", error);
      return Tasks;
    }
  });

  // Save tasks to localStorage whenever task changes
  useEffect(() => {
    localStorage.setItem("TaskData", JSON.stringify(task));
  }, [task]);

  // Update task status
  const handleStatusChange = (event, id) => {
    const checked = event.target.checked;

    setTask((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: checked }
          : item
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        task,
        setTask,
        handleStatusChange,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;