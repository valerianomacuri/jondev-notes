import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {


  const {
    todos,
    completedTodos,
  } = useContext(TodoContext)
  return (

    <h2 className="TodoCounter">Has completado { completedTodos.length  } de { todos.length } TODOs</h2>
  )
}

export { TodoCounter };
