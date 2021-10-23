import { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'


export function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState('')

    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext)

    const onChangeInputValue = (e) => {
        setNewTodoValue(e.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    return (
        <form 
            onSubmit={onSubmit} 
        >
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value = {newTodoValue}
                onChange = {onChangeInputValue}
                placeholder = "Escribe una nueva tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick = {onCancel}
                >
                Cancelar
                </button>

                <button
                className="TodoForm-button TodoForm-button-add"
                type= "submit"
                >
                Añadir
                </button>
            </div>
        </form>
    )
}