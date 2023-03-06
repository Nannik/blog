import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
                password: 'password',
                error: 'error',
                isLoading: false,
            },
        };

        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'username',
            password: 'password',
            error: 'error',
            isLoading: false,
        });
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
