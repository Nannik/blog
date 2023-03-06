import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { LocalStorageKeys } from '@/shared/const/localStorageKeys';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUserNameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/login', authData);
            if (!response.data) {
                throw Error;
            }

            localStorage.setItem(LocalStorageKeys.user, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
