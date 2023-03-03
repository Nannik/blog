import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib';
import LoginForm from './LoginForm';

describe('LoginForm.test', () => {
    test('render', () => {
        componentRender(<LoginForm />);

        expect(screen.getByTestId('login-form')).toBeInTheDocument();
        expect(screen.getByTestId('username-field')).toBeInTheDocument();
        expect(screen.getByTestId('password-field')).toBeInTheDocument();
        expect(screen.getByTestId('login-btn')).toBeInTheDocument();
    });
});
