import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

    const {
        counter,
        incrementOne
    } = useCounter(1);
    
    const {
        data,
        isLoading,
        hasError
    } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            <button
                className="btn btn-outline-primary"
                onClick={() => {incrementOne(1)}}
                disabled={isLoading}
            >
                Next quote
            </button>
            <hr />

            {
                isLoading
                    ?
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                    :
                    <blockquote className="text-right">
                        <p className="mb-1">{quote}</p>
                        <footer className="blockquote-footer">
                            {author}
                        </footer>
                    </blockquote>
            }

        </>
    );
}
