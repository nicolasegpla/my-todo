import React from 'react';
import { TodoContext } from '../TodoContext'
import './counter.css'
function Counter() {
    const {todosCompletados, todoLosTodos } = React.useContext(TodoContext)

    console.log(todoLosTodos)
    return(
        <>
            <h1 className='h1--counter'>{ todoLosTodos === todosCompletados ? <>Felicidades completaste todas tus tareas</> : <>Hola Nicolas Has completado {todosCompletados} de {todoLosTodos} tareas pendientes.</>}</h1>
        </>
    ) 
}

export { Counter }