import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import cls from './ProfileCard.module.scss';
import {
    Button, ButtonTheme, Input, Text,
} from '@/shared/ui';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface ProfileCardProps {
    className?: string
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);

    return (
        <div className={ classNames(cls.ProfileCard, {}, [ className ]) }>
            <div className={ cls.header }>
                <Text title={ t('Profile') } />
                <Button
                    className={ cls.editBtn }
                    theme={ ButtonTheme.OUTLINE }
                >
                    {t('Edit')}
                </Button>
            </div>
            <div className={ cls.data }>
                <Input
                    value={ data?.first }
                    placeholder={ t('First name') }
                    className={ cls.input }
                />
                <Input
                    value={ data?.lastname }
                    placeholder={ t('Last name') }
                    className={ cls.input }
                />
            </div>
        </div>
    );
};

export {
    ProfileCard,
};
