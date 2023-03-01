import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '@/features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { LoginSchema } from '@/features/AuthByUserName';

export const getLoginError = createSelector(
    getLoginState,
    (loginForm: LoginSchema) => loginForm?.error || '',
);
