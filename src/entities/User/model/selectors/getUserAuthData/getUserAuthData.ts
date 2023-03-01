import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '../getUser/getUser';
import { UserSchema } from '@/entities/User';

export const getUserAuthData = createSelector(
    getUser,
    (user: UserSchema) => user.authData,
);
