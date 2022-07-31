import React from 'react'
import { TodoItem } from "./TodoItem"

export const TodoList = ({
    todos = [],
    onToogleTodo = () => { },
    onDeleteTodo = () => { },
    }) => {

    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToogleTodo={onToogleTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                ))
            }
        </ul>
    )
}
