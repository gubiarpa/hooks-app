import React, { useCallback, useState } from 'react'
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const incrementDad = () => {
    //     setCounter(counter + 1);
    // };

    const incrementDad = useCallback(
        () => {
            setCounter((value) => value + 1);
        },
        [],
    );


    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementDad} />
        </>
    )
}
