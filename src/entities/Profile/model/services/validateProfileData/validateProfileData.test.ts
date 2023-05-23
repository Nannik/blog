import { Profile } from '../../types/profile';
import { Currency } from '@/entities/Currency/model/types/currency';
import { Country } from '@/entities/Country/model/types/counry';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '@/entities/Profile/model/types/profile';

const data: Profile = {
    first: 'test1',
    lastname: 'test2',
    currency: Currency.UAH,
    country: Country.UKRAINE,
    city: 'Kyiv',
    age: 22,
    username: 'test_username',
    avatar: 'https://test.domen.com/img.png',
};

describe('fetchProfileData.test', () => {
    test('with correct Data', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('with incorrect first and last name', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_FIRST_NAME,
            ValidateProfileError.INCORRECT_LAST_NAME,
        ]);
    });

    test('with incorrect username', async () => {
        const result = validateProfileData({
            ...data,
            username: '',
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USERNAME,
        ]);
    });

    test('with incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('with incorrect avatar', async () => {
        const result = validateProfileData({
            ...data,
            avatar: '',
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AVATAR,
        ]);
    });

    test('with incorrect currency and country', async () => {
        const result = validateProfileData({
            ...data,
            currency: undefined,
            country: undefined,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_CURRENCY,
        ]);
    });

    test('with incorrect city', async () => {
        const result = validateProfileData({
            ...data,
            city: '',
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_FIRST_NAME,
            ValidateProfileError.INCORRECT_LAST_NAME,
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_AVATAR,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_CURRENCY,
        ]);
    });

    test('no data', async () => {
        const result = validateProfileData();

        expect(result).toEqual([
            ValidateProfileError.NO_DATA,
        ]);
    });
});
