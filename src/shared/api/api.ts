import axios from 'axios';
import { LocalStorageKeys } from '@/shared/const/localStorageKeys';

console.log(__IS_DEV__);
console.log(__API__);

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(LocalStorageKeys.user),
    },
});
