import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";


describe('Testing on useCounter', () => {

    test('should return default value', () => {

        const { result } = renderHook(() => useCounter());

        const {
            counter,
            decrementOne,
            incrementOne,
            reset
        } = result.current;

        // We expect that counter === 10
        expect(counter).toBe(10);
        // expect(counter).toEqual(expect.any(Number));

        // We expect that decrementOne is a function
        expect(decrementOne).toEqual(expect.any(Function));
        expect(incrementOne).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('should generate on counter the value 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test('should increment the counter', () => {

        const { result } = renderHook(() => useCounter(100));
        const { incrementOne } = result.current;

        act(() => {
            incrementOne();
            incrementOne(2);
        });

        expect(result.current.counter).toBe(103);

    });

    test('should decrement the counter', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrementOne } = result.current;

        act(() => {
            decrementOne();
            decrementOne(2);
        });

        expect(result.current.counter).toBe(97);

    });

    test('should reset the counter', () => {

        const { result } = renderHook(() => useCounter(100));
        const { reset } = result.current;

        act(() => {
            reset();
        });

        expect(result.current.counter).toBe(100);

    });

});
