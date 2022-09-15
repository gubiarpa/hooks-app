import React, { useContext } from "react";

import { UserContext } from "./context/UserContext";
import { useCounter } from "../hooks/useCounter";

export const HomePage = () => {

    const { user } = useContext(UserContext);
    const { counter, incrementOne } = useCounter(29);

    return (
        <>
            <h1>HomePage on {counter}</h1>
            <hr />
            <button
                className="btn btn-outline-primary"
                onClick={() => { incrementOne() }}
            >
                Increase
            </button>

            <pre>
                {user && JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
