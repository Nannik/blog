import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';
import { LoginSchema } from '@/features/AuthByUserName';

describe('loginSlice.test', () => {
    test('set username', () => {
        const initialState = { username: '123' };
        const expectedState = { username: 'user' };

        const state: DeepPartial<LoginSchema> = initialState;

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername(expectedState.username),
        )).toEqual(expectedState);
    });

    test('set password', () => {
        const initialState = { password: '123' };
        const expectedState = { password: '12345a' };

        const state: DeepPartial<LoginSchema> = initialState;

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword(expectedState.password),
        )).toEqual(expectedState);
    });
});
