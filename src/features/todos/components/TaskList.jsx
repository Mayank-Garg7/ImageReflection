import React, { useContext, useState } from 'react'
import Card from '../../../shared/Card'
import TodoContext from '../context/TodoContext'

function TaskList({ item }) {
    const {handleStatusChange} = useContext(TodoContext)
    return (
        <Card>
            <h3>{item.text}</h3>
            <span>status: {item.status}</span>
            <select
                value={item.status}
                onChange={(e) => handleStatusChange(e,item.id)}
                disabled={item.status === "completed"}
            >
                <option value="pending">pending</option>
                <option value="completed">completed</option>
            </select>
            <p>Priority: {item.priority}</p>
        </Card>
    )
}

export default TaskList
