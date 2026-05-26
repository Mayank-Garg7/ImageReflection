import React, { useContext } from "react";
import Card from "../../../shared/Card";
import TodoContext from "../context/TodoContext";

function TaskList({ item }) {
    const { handleStatusChange } = useContext(TodoContext);
    return (
        <Card>
            <h3>{item.text}</h3>
            <span>Status: {item.status}</span>
            <br />
            <select
                value={item.status}
                onChange={(e) => handleStatusChange(e, item.id)}
                disabled={item.status === "completed"}
            >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>

            <p>Priority: {item.priority}</p>
        </Card>
    );
}

export default TaskList;