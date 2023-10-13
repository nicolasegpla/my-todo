import React from 'react';
import { TodoContext } from '../TodoContext';
import { useState } from 'react'
import './input.css'

function Input() {

    const {valorInput, setValorInput } = React.useContext(TodoContext);
    return(
        <>
            <input 
                value={valorInput}
                className='input--search' 
                type="text" 
                placeholder='Comprar comida'
                onChange={(event) => {
                    setValorInput(event.target.value)
                }}
            />
        </>
    )
}

export { Input }