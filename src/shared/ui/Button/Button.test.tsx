import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('classNames', () => {
    test('should render text', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('should have theme class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
