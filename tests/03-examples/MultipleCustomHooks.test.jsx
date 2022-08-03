import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";

describe('testing on <MultipleCustomHooks />', () => {

    test('should show component by default', () => {

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button');

        expect(nextButton.disabled).toBe(true);

    })

});