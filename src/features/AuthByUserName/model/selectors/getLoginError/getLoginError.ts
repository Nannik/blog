import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginError = createSelector(
    getLoginState,
    (loginForm) => loginForm?.error,
);
