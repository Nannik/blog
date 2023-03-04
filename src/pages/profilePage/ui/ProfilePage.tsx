import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames, DynamicModuleLoader, ReducersList } from '@/shared/lib';
import { profileReducer } from '@/entities/Profile';

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
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div className={ classNames('', {}, [ className ]) }>
                {t('Profile')}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
