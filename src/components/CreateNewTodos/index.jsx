import React, { useEffect } from "react";
import { TodoContext} from '../TodoContext';
import './createNewTodos.css'

function CreateNewTodos() {

    const { listTodos, setModal, saveTodos } = React.useContext(TodoContext);
    const[newTodoValue, setNewTodoValue] = React.useState('');

    function valueInput(event) {
        setNewTodoValue(event.target.value);
    }
    function objeto() {
        const newData = [...listTodos];
        newData.push({titulo: newTodoValue, estado: false,})
        saveTodos(newData)
        setModal(false)
    }


   
    
    return(
        <>
            <form className="div__card--newTodo">
                <p className="div__card--newTodo__p">Aun no tienes ningun Todo, Crea tu primer Todo</p>
                <input required onChange={valueInput} className="div__card--newTodo__input" type="text" placeholder='Nuevo Todo'/>
                <button type="button" onClick={objeto} className="div__card--newTodo__button">Crear Todo</button>
            </form>
        </>
    )
}

export { CreateNewTodos }