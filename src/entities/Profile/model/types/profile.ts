import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

export enum ValidateProfileError {
    INCORRECT_FIRST_NAME = 'INCORRECT_FIRST_NAME',
    INCORRECT_LAST_NAME = 'INCORRECT_LAST_NAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    INCORRECT_AVATAR = 'INCORRECT_AVATAR',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
