import React from 'react';
import iconError from './iconError.svg'
import './error.css'

function Error() {
    return(
        <>
            <div className='error--card'>
                <img className='error--card__img' src={iconError} alt="icono de error" />
                <p className='error--card__p'>Error al cargar tus todos</p>
            </div>
        </>
    )
}

export { Error }