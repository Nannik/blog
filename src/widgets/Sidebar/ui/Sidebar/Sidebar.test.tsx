import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from '@/shared/lib/jest/componentRender';

describe('Sidebar', () => {
    test('render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        componentRender(<Sidebar />);

        const toggleBtn = screen.getByTestId('sidebar_toggle');
        fireEvent.click(toggleBtn);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
