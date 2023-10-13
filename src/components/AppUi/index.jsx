import React from "react"
import { Counter } from '../Counter';
import { Input } from '../Input';
import { ListTodos } from '../ListTodos';
import { Todos } from '../Todos';
import { ButtonMoreTodos } from '../ButtonMoreTodos';
import { Loading } from "../Loading";
import { Error } from "../Error";
import { CreateNewTodos } from "../CreateNewTodos";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";


function AppUi() {
    const {
        buscandoTodos,  
        tareaCompletada, 
        eliminarTarea, 
        loading, 
        error,
        modal,
        setModal,
    } = React.useContext(TodoContext);
    return(
        <>
            <Counter />
            <Input />
            

            <ListTodos>
                    {loading && <Loading />}
                    {error && <Error />}
                    {(!loading && buscandoTodos.length === 0 && !error) && <CreateNewTodos />}

                    {buscandoTodos.map(todo => (
                        <Todos
                        key={todo.titulo} 
                        titulo={todo.titulo} 
                        estado={todo.estado} 
                        onComplete={() => tareaCompletada(todo.titulo)}
                        onDelete={() => eliminarTarea(todo.titulo)}
                        />
                    ))}
            </ListTodos>
                
            

            <TodoContext.Consumer>
                {({
                    boton,
                    setBoton,
                }) => (
                    <ButtonMoreTodos
                    boton={boton}
                    setBoton={setBoton}
                    />
                )}
            </TodoContext.Consumer>  
            <Modal >
                {modal && <CreateNewTodos />}
            </Modal>      
            
        </>
    )
}

export { AppUi }