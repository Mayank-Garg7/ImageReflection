import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import TaskList from './TaskList'

function ShowTodos() {
    const {task} = useContext(TodoContext)

    
  return (
    <div>
      {task.map((item) => (
        <TaskList key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ShowTodos
