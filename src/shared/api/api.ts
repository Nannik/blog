import axios from 'axios';
import { LocalStorageKeys } from '@/shared/const/localStorageKeys';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(LocalStorageKeys.user),
    },
});
