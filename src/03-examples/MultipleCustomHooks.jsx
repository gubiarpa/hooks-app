import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

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
                onClick={() => { incrementOne(1) }}
                disabled={isLoading}
            >
                Next quote
            </button>
            <hr />

            {
                isLoading ?
                    <LoadingQuote /> :
                    <Quote author={author} quote={quote} />
            }

        </>
    );
}
