import React from 'react';
import { useState } from 'react'
import { AppUi } from '../AppUi';
import './app.css'
import { TodoProvider } from '../TodoContext';

function App() {
    return(
        <>
            <TodoProvider>
                <AppUi />
            </TodoProvider>
            
        </>
    )
};


export { App }