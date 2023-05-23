import {
    Profile, profileReducer, ProfileSchema, updateProfileData,
} from '@/entities/Profile';
import { profileActions } from '@/entities/Profile/model/slice/profileSlice';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileError } from '@/entities/Profile/model/types/profile';

const data: Profile = {
    first: 'test1',
    lastname: 'test2',
    currency: Currency.UAH,
    country: Country.UKRAINE,
    city: 'Kyiv',
    age: 22,
    username: 'test_username',
    avatar: 'https://test.domen.com/img.png',
};

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = {};
        const newState: DeepPartial<Profile> = {
            first: 'test1',
            lastname: 'test2',
            currency: Currency.UAH,
            country: Country.UKRAINE,
            city: 'Kyiv',
            age: 22,
            username: 'test_username',
            avatar: 'https://test.domen.com/img.png',
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile(newState),
        )).toEqual({ form: newState });
    });

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            readonly: false,
            form: { ...data, first: '' },
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });

    test('save data', () => {
        const form = { ...data, first: 'test_first', lastname: 'test_last' };
        const state: DeepPartial<ProfileSchema> = {
            data,
            form,
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.saveData(),
        )).toEqual({
            form,
            data: form,
            readonly: true,
            validateErrors: undefined,
        });
    });

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ ValidateProfileError.SERVER_ERROR ],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
});
