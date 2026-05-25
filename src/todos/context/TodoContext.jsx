import { createContext, useEffect, useState } from "react";
import Tasks from "../data/Tasks.json"


const TodoContext = createContext()


export const ContextProvider = ({children}) => {
    const [task, setTask] = useState(() => {
        const data = localStorage.getItem("TaskData");
        return data ? JSON.parse(data) : Tasks
    })


    useEffect(() => {
        localStorage.setItem("TaskData", JSON.stringify(Tasks))
    }, [task])


    const handleStatusChange= (event, id) => {
        setTask((prev) => prev.map((item) => item.id === id ? item.status : ""))
    }



    return(
        <TodoContext.Provider
        value={{
            task,
            handleStatusChange,

        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext