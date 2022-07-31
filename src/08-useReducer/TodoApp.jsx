import React, { useReducer } from "react";
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
        console.log({todo});
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
                    {/* Start: TodoList */}
                    <ul className="list-group">
                        {
                            todos.map(todo => (
                                // Start: TodoItem
                                <li
                                    key={todo.id}
                                    className="list-group-item d-flex justify-content-between"
                                >
                                    <span className="align-self-center">
                                        {todo.description}
                                    </span>
                                    <button className="btn btn-outline-danger">
                                        Borrar
                                    </button>
                                </li>
                                // End: TodoItem
                            ))
                        }
                    </ul>
                    {/* End: TodoList */}
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* Start: TodoAdd onNewTodo(todo) */}
                    {/* { id: new Date()..., description: "", done: false } */}
                    <form>
                        <input
                            type="text"
                            placeholder="¿Qué hay que hacer?"
                            className="form-control"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Agregar
                        </button>
                    </form>
                    {/* End: TodoAdd */}
                </div>
            </div>

        </>
    )
}
