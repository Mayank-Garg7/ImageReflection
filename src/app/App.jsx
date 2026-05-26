import React from 'react'
import { ContextProvider } from '../features/todos/context/TodoContext'
import TodoForm from '../../../features/todos/components/TodoForm'
import ShowTodos from '../../../features/todos/components/ShowTodos'

function App() {
  return (
    <ContextProvider>
      <TodoForm />
      <ShowTodos />
    </ContextProvider>
  )
}

export default App
