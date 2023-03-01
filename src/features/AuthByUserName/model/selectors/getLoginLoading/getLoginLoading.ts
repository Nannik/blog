import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '@/features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { LoginSchema } from '@/features/AuthByUserName';

export const getLoginLoading = createSelector(
    getLoginState,
    (loginForm: LoginSchema) => loginForm?.isLoading || false,
);
