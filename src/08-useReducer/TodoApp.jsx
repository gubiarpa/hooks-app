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
        handleNewTodo,
        handleToogleTodo,
        handleRemoveTodo
    } = useTodo(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <>
            <h1>TodoApp</h1>
            <h4 className="text-end text-secondary">
                Pendientes: {todos.filter(todo => !todo.done).length} de {todos.length}
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
