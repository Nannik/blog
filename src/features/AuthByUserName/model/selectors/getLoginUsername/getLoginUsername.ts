import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginUsername = createSelector(
    getLoginState,
    (loginForm) => loginForm?.username || '',
);
