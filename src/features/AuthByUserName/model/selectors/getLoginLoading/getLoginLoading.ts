import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';
import { LoginSchema } from '../../types/LoginSchema';

export const getLoginLoading = createSelector(
    getLoginState,
    (loginForm: LoginSchema) => loginForm?.isLoading || false,
);
