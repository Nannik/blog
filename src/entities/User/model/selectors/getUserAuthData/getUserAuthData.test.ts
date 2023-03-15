import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { username: 'user', id: '1' } },
        };

        expect(getUserAuthData(state as StateSchema)).toEqual({
            username: 'user',
            id: '1',
        });
    });
});
