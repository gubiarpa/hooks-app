import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('ShowIncrement: Me volví a generar');

    return (
        <button
            className="btn btn-outline-primary"
            onClick={() => {
                increment();
            }}
        >
            Incrementar
        </button>
    )
})