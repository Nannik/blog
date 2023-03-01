import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'user', password: '123' },
        };

        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'user',
            password: '123',
        });
    });
});
