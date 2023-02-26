import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '@/entities/User';

const initialState: UserSchema = {
    authData: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
