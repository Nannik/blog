import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('with true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };

        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });

    test('with false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false,
            },
        };

        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
