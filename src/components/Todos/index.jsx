import React from 'react';
import { useState } from 'react'
import { CompleteIcon } from '../CompleteIcon'
import { DeleteIcon } from '../DeleteIcon'
import './todos.css'

function Todos({titulo, estado, onComplete, onDelete}) {
    

    return(
        <>
            <li className={`li--todos ${estado && 'complete'} `}>
                <CompleteIcon 
                    completado={estado}
                    complete={onComplete}
                />
                <p>{titulo}</p>
                <DeleteIcon 
                    terminado={estado}
                    eliminar={onDelete}
                />
            </li>
        </>
    )
}

export { Todos }