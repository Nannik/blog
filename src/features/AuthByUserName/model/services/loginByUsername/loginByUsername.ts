import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from '@/entities/User';
import { LocalStorageKeys } from '@/shared/const/localStorageKeys';

interface LoginByUserNameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);
            if (!response.data) {
                throw Error;
            }

            localStorage.setItem(LocalStorageKeys.user, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
