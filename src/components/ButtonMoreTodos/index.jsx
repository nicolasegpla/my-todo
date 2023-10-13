import React from 'react'
import { TodoContext } from '../TodoContext'
import './buttonMore.css'



function ButtonMoreTodos({boton, setBoton}) {

    const {createTodos} = React.useContext(TodoContext)

    return(
        <>
        <button onClick={createTodos} className='button--more'>{boton}</button>
        </>
    )
}

export { ButtonMoreTodos }