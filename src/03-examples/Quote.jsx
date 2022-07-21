import React from "react";

export const Quote = ({ quote, author }) => {
    return (
        <blockquote className="text-end">
            <p className="mb-1">{quote}</p>
            <footer className="mt-2 blockquote-footer">
                {author}
            </footer>
        </blockquote>
    )
}
