import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getProfileData } from './getProfileData';
import { Profile } from '../../types/profile';
import { Country, Currency } from '@/shared/const/common';

describe('getProfileData.test', () => {
    test('should return value', () => {
        const data: Profile = {
            first: 'test1',
            lastname: 'test2',
            currency: Currency.UAH,
            country: Country.UKRAINE,
            city: 'Kyiv',
            age: 22,
            username: 'test_username',
            avatar: 'test_url',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
