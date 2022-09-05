import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('useCounter testing', () => {

    test('should return default value', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, incrementOne, decrementOne, reset } = result.current;

        expect(counter).toBe(10);
        expect(incrementOne).toEqual(expect.any(Function));
        expect(decrementOne).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('should generate counter with value 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);

    });

    test('should increase the counter', () => {

        const { result } = renderHook(() => useCounter(100));
        const { incrementOne } = result.current;

        act(() => {
            incrementOne();
            incrementOne(2);
        });

        expect(result.current.counter).toBe(103);

    });

    test('should decrease the counter', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrementOne } = result.current;

        act(() => {
            decrementOne();
            decrementOne(2);
        });

        expect(result.current.counter).toBe(97);

    });

    test('should reset the counter to default value', () => {

        const { result } = renderHook(() => useCounter(100));
        const { incrementOne, decrementOne, reset } = result.current;

        act(() => {
            incrementOne(7);
            decrementOne(2);
            reset();
        });

        expect(result.current.counter).toBe(100);

    });

});