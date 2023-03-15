import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };

        expect(getProfileError(state as StateSchema)).toBe('error');
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
