import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };

        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });
});
