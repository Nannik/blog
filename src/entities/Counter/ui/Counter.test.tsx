import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from '@/shared/lib/jest/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('counter')).toBeInTheDocument();
        expect(screen.getByTestId('counter-value-title')).toHaveTextContent('value = 10');
    });

    test('render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('counter-increment-btn'));

        expect(screen.getByTestId('counter-value-title')).toHaveTextContent('value = 11');
    });

    test('render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('counter-decrement-btn'));

        expect(screen.getByTestId('counter-value-title')).toHaveTextContent('value = 9');
    });
});
