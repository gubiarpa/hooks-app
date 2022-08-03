import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('testing on useForm', () => {

    const initialForm = {
        name: 'Billy',
        email: 'billy.arredondo@pucp.pe'
    };

    test('should return default values', () => {

        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: 'Billy',
            email: 'billy.arredondo@pucp.pe',
            formState: { name: 'Billy', email: 'billy.arredondo@pucp.pe' },
            onInputChange: expect.any(Function),
            resetForm: expect.any(Function)
        });

    });

    test('should change the form name', () => {

        const newValue = "Yerina Poma";
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        
        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });
        });
        
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

    });
    
    test('should reset the form', () => {

        const newValue = "Nicolás Arredondo";
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, resetForm } = result.current;
        
        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });

            resetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });

})