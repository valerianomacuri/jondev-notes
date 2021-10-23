import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TodoContext = createContext()

export const TodoPrivider = ({ children }) => {

     
    const 
        {
            item: todos, 
            saveItem: saveTodos, 
            loading,
            error
        } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const completedTodos = todos.filter(todo => todo.completed === true )
    let searchedTodos = []
    
    if(!searchValue.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
        return todoText.includes(searchText)
        })
    }
    
    
    
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
    
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    
    }
    
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    
    }

    const addTodo = (text) => {
        const newTodos = [...todos]

        newTodos.push({
            completed: false,
            text,
        })

        saveTodos(newTodos)
    
    }
    
    
      
    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                completedTodos,
                todos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                openModal, 
                setOpenModal,
                addTodo,
            }}
        >
            { children }
        </TodoContext.Provider>
    )
}
