import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getUser } from './getUser';

describe('getUser.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { username: 'user', id: '1' } },
        };

        expect(getUser(state as StateSchema)).toEqual({
            authData: {
                username: 'user',
                id: '1',
            },
        });
    });
});
