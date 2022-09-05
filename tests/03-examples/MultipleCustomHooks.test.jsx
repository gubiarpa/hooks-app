import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('testing on <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        incrementOne: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should show component by default', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button');
        expect(nextButton.disabled).toBeTruthy();

    });

    test('should show a quote', () => {

        useFetch.mockReturnValue({
            data: [{
                author: "Billy",
                quote: "Hello world"
            }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText("Hello world")).toBeTruthy();
        expect(screen.getByText("Billy")).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: "Next quote" });
        expect(nextButton.disabled).toBeFalsy();

    });

    test('should call increase function', () => {

        const mockIncrement = jest.fn();

        useFetch.mockReturnValue({
            data: [{
                author: "Billy",
                quote: "Hello world"
            }],
            isLoading: false,
            hasError: null
        });

        useCounter.mockReturnValue({
            counter: 1,
            incrementOne: mockIncrement
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: "Next quote" });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    })

});