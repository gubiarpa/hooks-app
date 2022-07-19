import React from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const {
        username,
        email,
        password,
        onInputChange,
        resetForm
     } = useForm({
        username: "",
        email: "",
        password: ""
    });

    return (
        <>
            <h1>Form with Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@domain.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button
                className="btn btn-outline-info w-100 mt-3"
                onClick={resetForm}
            >
                Reset Form
            </button>

            {
                (username === 'gubiarpa') && <Message />
            }
        </>
    )
}
