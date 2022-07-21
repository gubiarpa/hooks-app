import React, { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Enter your name"
                className="form-control mt-2"
            />

            <input
                type="password"
                placeholder="Enter your password"
                className="form-control mt-2"
            />

            <div className="text-center">
                <button
                    className="btn btn-outline-primary mt-3"
                    onClick={handleClick}
                >
                    Set focus
                </button>
            </div>
        </>
    )
}
