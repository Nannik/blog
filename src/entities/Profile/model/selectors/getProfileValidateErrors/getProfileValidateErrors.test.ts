import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '@/entities/Profile/model/types/profile';

describe('getProfileValidateErrors.test', () => {
    test('with true', () => {
        const validateErrors = [ ValidateProfileError.NO_DATA, ValidateProfileError.SERVER_ERROR ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors,
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toBe(validateErrors);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
