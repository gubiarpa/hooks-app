import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");

describe('testing on <MultipleCustomHooks />', () => {

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
        
        
        const nextButton = screen.getByRole('button');
        expect(nextButton.disabled).toBeFalsy();

    });

});