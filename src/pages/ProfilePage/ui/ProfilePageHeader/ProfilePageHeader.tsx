import { useTranslation } from 'react-i18next';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';
import { profileActions } from '@/entities/Profile/model/slice/profileSlice';
import { Button, ButtonTheme, Text } from '@/shared/ui';
import { getProfileIsReadonly, updateProfileData } from '@/entities/Profile';

interface ProfilePageHeaderProps {
    className?: string
}

const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileIsReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [ dispatch ]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [ dispatch ]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [ dispatch ]);

    return (
        <div className={ classNames(cls.ProfilePageHeader, {}, [ className ]) }>
            <Text title={ t('Profile') } />
            {readonly
                ? (
                    <Button
                        className={ cls.editBtn }
                        theme={ ButtonTheme.OUTLINE }
                        onClick={ onEdit }
                    >
                        {t('Edit')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            className={ cls.editBtn }
                            theme={ ButtonTheme.OUTLINE_RED }
                            onClick={ onCancelEdit }
                        >
                            {t('Cancel')}
                        </Button>
                        <Button
                            className={ cls.saveBtn }
                            theme={ ButtonTheme.OUTLINE }
                            onClick={ onSave }
                        >
                            {t('Save')}
                        </Button>
                    </>
                )}
        </div>
    );
};

export {
    ProfilePageHeader,
};
