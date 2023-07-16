import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserMounted } from '@/entities/User/model/selectors/getUserMounted/getUserMounted';

describe('getUserMounted.test', () => {
    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { username: 'user', id: '1' }, _mounted: false },
        };

        expect(getUserMounted(state as StateSchema)).toEqual(false);
    });

    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { username: 'user', id: '1' }, _mounted: true },
        };

        expect(getUserMounted(state as StateSchema)).toEqual(true);
    });
});
