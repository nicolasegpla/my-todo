import React from "react";


function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localGetElementItem = localStorage.getItem(itemName);
                let parsedItem;
    
                if(!localGetElementItem) {
                localStorage.setItem('TODOS_V1', JSON.stringify(initialValue));
                parsedItem = initialValue;
                }else {
                parsedItem = JSON.parse(localGetElementItem);
                setItem(parsedItem);
                };
    
                setLoading(false);
            }catch(error) {
                setLoading(false)
                setError(true);
            }
        },2000)
    }, []);

    


    const saveItem = (newItem) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
            item, 
            setItem,
            saveItem, 
            loading, 
            error,
        }
}

export { useLocalStorage }

/*
los todos estas guardados en el local storage

    const ejemploTodos = [
        {titulo: 'tarea 1', estado: false},
        {titulo: 'tarea 2', estado: false},
        {titulo: 'tarea 3', estado: false},
        {titulo: 'tarea 4', estado: false},
        {titulo: 'tarea 5', estado: false}
    ];*/