import { TestAsyncThunk } from '@/shared/lib/jest/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { Currency } from '@/entities/Currency/model/types/currency';
import { Country } from '@/entities/Country/model/types/counry';
import { Profile, ValidateProfileError } from '../../types/profile';

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

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...data, first: '',
                },
            },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_FIRST_NAME,
        ]);
    });
});
