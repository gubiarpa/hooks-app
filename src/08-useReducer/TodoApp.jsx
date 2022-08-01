import React, { useEffect } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleToogleTodo,
        handleRemoveTodo
    } = useTodo(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const statusMessage = () => {
        if (todos?.length === 0) {
            return "No hay tareas registradas :(";
        } else if (todos?.filter(todo => !todo.done).length === 0) {
            return "Sin pendientes :)";
        } else {
            return `Pendientes: ${pendingTodosCount} de ${todosCount}`;
        }
    }

    return (
        <>
            <h1>TodoApp</h1>
            <h4 className="text-end text-secondary">
                {statusMessage()}
            </h4>
            <hr />

            <div className="row">
                <div className="col-sm-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
                <div className="col-sm-7 mt-5">
                    <TodoList
                        todos={todos}
                        onToogleTodo={handleToogleTodo}
                        onDeleteTodo={handleRemoveTodo}
                    />
                </div>
            </div>

        </>
    )
}
