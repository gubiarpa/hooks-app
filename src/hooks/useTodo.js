import { useReducer } from "react";

export const useTodo = (todoReducer, initialState = [], init = () => { }) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const handleNewTodo = (newTodo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: newTodo
        };

        dispatch(action);
    }

    const handleToogleTodo = (id) => {
        const action = {
            type: "[TODO] Toogle Todo",
            payload: id
        };

        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type: "[TODO] Remove Todo",
            payload: id
        };

        dispatch(action);
    }

    return ({
        todos,
        handleNewTodo,
        handleToogleTodo,
        handleRemoveTodo
    });
}
