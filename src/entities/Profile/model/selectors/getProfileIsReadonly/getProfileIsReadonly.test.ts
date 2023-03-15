import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getProfileIsReadonly } from './getProfileIsReadonly';

describe('getProfileIsReadonly.test', () => {
    test('with true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };

        expect(getProfileIsReadonly(state as StateSchema)).toBe(true);
    });

    test('with false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };

        expect(getProfileIsReadonly(state as StateSchema)).toBe(false);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileIsReadonly(state as StateSchema)).toEqual(undefined);
    });
});
