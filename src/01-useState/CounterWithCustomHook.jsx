import React from 'react';
import { useCounter } from "../hooks/useCounter";

const factor = 2; // number to change

export const CounterWithCustomHook = () => {
    const {
        counter,
        incrementOne,
        decrementOne,
        reset
    } = useCounter(10);

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />

            <button
                className="btn btn-outline-primary"
                onClick={() => decrementOne(factor)}
            >
                -1
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={reset}
            >
                Reset
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => incrementOne(factor)}
            >
                +1
            </button>
        </>
    )
}
