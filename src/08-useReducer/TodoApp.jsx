import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./TodoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        };

        dispatch(action);
    }

    return (
        <>
            <h1>TodoApp</h1>
            <h4 className="text-end text-secondary">
                Pendientes: {todos.filter(todo => !todo.done).length} de {todos.length}
            </h4>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}
