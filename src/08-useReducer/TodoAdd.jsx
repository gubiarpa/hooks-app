import React, { useRef } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo = () => { } }) => {

    const {
        description,
        onInputChange,
        resetForm
    } = useForm({
        description: "",
    });

    const inputdescriptionRef = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1)
            return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        };

        onNewTodo(newTodo);
        resetForm();
        inputdescriptionRef.current.select();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                ref={inputdescriptionRef}
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}