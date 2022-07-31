import React, { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./TodoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: "Recolectar la piedra del alma",
        done: false,
    },
    {
        id: new Date().getTime() + 100,
        description: "Recolectar la piedra del poder",
        done: false,
    }
];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log({ todo });
    }

    return (
        <>
            <h1>TodoApp</h1>
            <h4 className="text-end text-secondary">
                Pendientes: 2 de 10
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
