import React from "react";

export const TodoItem = ({
    todo = {},
    onDeleteTodo = () => { },
    onToogleTodo = () => { },
}) => {

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
                onClick={() => onToogleTodo(todo.id)}
            >
                {todo.description}
            </span>
            <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}
