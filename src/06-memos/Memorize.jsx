import React, { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, incrementOne } = useCounter();
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />

            <button
                className="btn btn-outline-primary"
                onClick={() => incrementOne()}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide <code>{JSON.stringify(show)}</code>
            </button>
        </>
    )
}
