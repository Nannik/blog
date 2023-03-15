import { TestAsyncThunk } from '@/shared/lib/jest/TestAsyncThunk';
import { fetchProfileData, Profile } from '@/entities/Profile';
import { Country, Currency } from '@/shared/const/common';

describe('fetchProfileData.test', () => {
    test('success fetch', async () => {
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

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('fetch error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });

    // test('fetch error', async () => {
    //     const thunk = new TestAsyncThunk(loginByUsername);
    //     thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const result = await thunk.callThunk({ username: 'user', password: 'pass' });
    //
    //     expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    //     expect(thunk.api.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    // });
});
