import React from 'react';
import { Icons } from "../Icons"


function DeleteIcon({ eliminar }) {
    return (
        <Icons
            type='delete'
            color='gray'
            onClick={eliminar}
        />
    )
}

export { DeleteIcon }