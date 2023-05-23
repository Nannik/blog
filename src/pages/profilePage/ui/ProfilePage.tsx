import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
    classNames, DynamicModuleLoader, ReducersList, useAppDispatch,
} from '@/shared/lib';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileIsReadonly,
    getProfileValidateErrors,
    ProfileCard,
    profileReducer,
} from '@/entities/Profile';
import { ProfilePageHeader } from '@/pages/profilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { profileActions } from '@/entities/Profile/model/slice/profileSlice';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Text, TextTheme } from '@/shared/ui';
import { ValidateProfileError } from '@/entities/Profile/model/types/profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const form = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileIsReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslates = {
        [ValidateProfileError.INCORRECT_FIRST_NAME]: t('Incorrect first name'),
        [ValidateProfileError.INCORRECT_LAST_NAME]: t('Incorrect last name'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_CURRENCY]: t('Incorrect currency'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.INCORRECT_CITY]: t('Incorrect city'),
        [ValidateProfileError.INCORRECT_AVATAR]: t('Incorrect avatar url'),
        [ValidateProfileError.INCORRECT_USERNAME]: t('Incorrect username'),
        [ValidateProfileError.NO_DATA]: t('Data not specified'),
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [ dispatch ]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [ dispatch ]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [ dispatch ]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value?.replace(/\D/g, '')) || 0 }));
    }, [ dispatch ]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [ dispatch ]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [ dispatch ]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [ dispatch ]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [ dispatch ]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [ dispatch ]);

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div className={ classNames('', {}, [ className ]) }>
                <ProfilePageHeader />
                {validateErrors?.map((err) => (
                    <Text
                        key={ err }
                        theme={ TextTheme.ERROR }
                        text={ validateErrorsTranslates[err] }
                    />
                ))}
                <ProfileCard
                    data={ form }
                    error={ error }
                    isLoading={ isLoading }
                    readonly={ readonly }
                    onChangeFirstname={ onChangeFirstname }
                    onChangeLastname={ onChangeLastname }
                    onChangeAge={ onChangeAge }
                    onChangeCity={ onChangeCity }
                    onChangeUsername={ onChangeUsername }
                    onChangeAvatar={ onChangeAvatar }
                    onChangeCounty={ onChangeCountry }
                    onChangeCurrency={ onChangeCurrency }
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
