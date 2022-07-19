import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h1>Counters</h1>

            <div>Counter 1: {counter1}</div>
            <div>Counter 2: {counter2}</div>
            <div>Counter 3: {counter3}</div>

            <hr />

            <button
                className="btn btn-outline-primary"
                onClick={() => setState((state) => ({
                    ...state,
                    counter1: counter1 + 1,
                }))}
            >
                Counter 1 (+1)
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setState((state) => ({
                    ...state,
                    counter2: counter2 + 1,
                }))}
            >
                Counter 2 (+1)
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setState((state) => ({
                    ...state,
                    counter3: counter3 + 1,
                }))}
            >
                Counter 3 (+1)
            </button>
        </>
    )
}