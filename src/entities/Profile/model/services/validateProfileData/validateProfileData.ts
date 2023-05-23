import { Profile, ValidateProfileError } from '@/entities/Profile/model/types/profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

// eslint-disable-next-line max-len
const validateUrl = (value: string) => /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);

const validateFirstName = (firstName?: string) => firstName && firstName.length;

const validateUsername = (username?: string) => username && username.length;

const validateLastName = (lastName?: string) => lastName && lastName.length;

const validateAge = (age?: number) => age && !Number.isNaN(age);

const validateCity = (city?: string) => city && city.length;

const validateAvatar = (avatar?: string) => avatar && avatar.length && validateUrl(avatar);

const validateCountry = (country?: Country) => country && country.length;

const validateCurrency = (currency?: Currency) => currency && currency.length;

export const validateProfileData = (data?: Profile) => {
    const errors = [];

    if (!data) {
        return [ ValidateProfileError.NO_DATA ];
    }

    if (!validateFirstName(data.first)) errors.push(ValidateProfileError.INCORRECT_FIRST_NAME);
    if (!validateLastName(data.lastname)) errors.push(ValidateProfileError.INCORRECT_LAST_NAME);
    if (!validateUsername(data.username)) errors.push(ValidateProfileError.INCORRECT_USERNAME);
    if (!validateAge(data.age)) errors.push(ValidateProfileError.INCORRECT_AGE);
    if (!validateAvatar(data.avatar)) errors.push(ValidateProfileError.INCORRECT_AVATAR);
    if (!validateCity(data.city)) errors.push(ValidateProfileError.INCORRECT_CITY);
    if (!validateCountry(data.country)) errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    if (!validateCurrency(data.currency)) errors.push(ValidateProfileError.INCORRECT_CURRENCY);

    return errors;
};
