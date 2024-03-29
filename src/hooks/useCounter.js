import { useState } from "react";

export const useCounter = (initialValue = 10) => {
    
    const [counter, setCounter] = useState(initialValue);

    const incrementOne = (factor = 1) => {
        setCounter(current => current + factor);
    }
    
    const decrementOne = (factor = 1) => {
        if (counter > 0) {
            setCounter(current => current - factor);
        }
    }

    const reset = () => {
        setCounter(initialValue);
    }
    
    return {
        counter,
        incrementOne,
        decrementOne,
        reset,
        setCounter
    };
}