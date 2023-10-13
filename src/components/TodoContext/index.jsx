import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorege";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: listTodos, 
        saveItem: saveTodos, 
        loading, 
        error,
        setItem,
    } = useLocalStorage('TODOS_V1', []);

    const [valorInput, setValorInput] = useState('');
    const [boton, setBoton] = useState('Add new task');
    const [modal, setModal] = useState(false);
    

    const todoLosTodos = listTodos.length;
    const todosCompletados = listTodos.filter(todo => todo.estado).length
    console.log(listTodos);
    const buscandoTodos = listTodos.filter(todo =>
    todo.titulo.toLowerCase().includes(valorInput.toLowerCase()))

    const tareaCompletada = (text) => {
        const newTodos = [...listTodos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.titulo == text 
        )
        if(newTodos[todoIndex].estado == false) {
            newTodos[todoIndex].estado = true;
        }else {
            newTodos[todoIndex].estado = false;
        }
        
        saveTodos(newTodos);
    }

    const eliminarTarea = (text) => {
        const newTodos = [...listTodos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.titulo == text 
        )
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    console.log(listTodos);
    const revision = listTodos.find(elemento => elemento.estado == false)
    if(revision) {
    }else {
        console.log('todo es true');
    }

    function createTodos() {
        setModal(estado => !estado);
    }
    function addCreateTodos() {
        setModal(false);
    }

    
   
    
    

    return(
        <TodoContext.Provider value={{
            revision, 
            todoLosTodos, 
            todosCompletados, 
            valorInput, 
            setValorInput, 
            buscandoTodos, 
            boton, 
            setBoton, 
            tareaCompletada, 
            eliminarTarea, 
            loading, 
            error,
            modal,
            setModal,
            createTodos,
            addCreateTodos,
            saveTodos,
            listTodos,
            setItem,
        }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }