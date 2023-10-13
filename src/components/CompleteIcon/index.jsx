import React from 'react';
import { Icons } from "../Icons"

function CompleteIcon({completado , complete}) {
    return (
        <Icons
            type='check'
            color={completado ? 'blue' : 'gray'} 
            onClick={complete}
        />
    )
}

export { CompleteIcon }