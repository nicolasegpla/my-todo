import React from 'react';
import './loading.css'

function Loading() {
    return(
        <>
            <div className='li--skeletons'><div className='silide--item'></div></div>
            <div className='li--skeletons'><div className='silide--item'></div></div>
            <div className='li--skeletons'><div className='silide--item'></div></div>
        </>
    )
}

export { Loading }