import React, { useEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const { height, width } = (pRef.current.getBoundingClientRect());
        setBoxSize({ height, width });
    }, [quote])

    return (
        <>
            <blockquote
                className="text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className="mb-1">{quote}</p>
                <footer className="mt-2 blockquote-footer">
                    {author}
                </footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
