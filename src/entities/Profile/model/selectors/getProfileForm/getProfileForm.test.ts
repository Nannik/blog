import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getProfileForm } from './getProfileForm';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '@/entities/Profile';

describe('getProfileForm.test', () => {
    test('should return value', () => {
        const form: Profile = {
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
                form,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
