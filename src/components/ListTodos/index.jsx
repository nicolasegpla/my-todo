import React from 'react';
import { useState } from 'react'
import './listTodos.css'

function ListTodos(props) {
    return(
        <>
            <ul className='ul--container'>
                {props.children}
            </ul>
        </>
    )
}

export { ListTodos }