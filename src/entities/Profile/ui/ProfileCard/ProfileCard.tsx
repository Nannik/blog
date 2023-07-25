import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './ProfileCard.module.scss';
import {
    Input, Loader, Text, TextTheme,
} from '@/shared/ui';
import { Profile } from '@/entities/Profile';
import { TextAlign } from '@/shared/ui/Text/Text';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';

interface ProfileCardProps {
    readonly?: boolean
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean

    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCounty?: (value: Country) => void
    onChangeCurrency?: (value: Currency) => void
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCounty,
        onChangeCurrency,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={ classNames(cls.ProfileCard, {}, [ className, cls.loading ]) }>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={ classNames(cls.ProfileCard, {}, [ className, cls.error ]) }>
                <Text
                    align={ TextAlign.CENTER }
                    theme={ TextTheme.ERROR }
                    title={ t('Error was happened on loading profile') }
                    text={ t('Try to reload page') }
                />
            </div>
        );
    }

    const mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={ classNames(cls.ProfileCard, mods, [ className ]) }>
            <div className={ cls.data }>
                { data?.avatar && (
                    <div className={ cls.avatarWrapper }>
                        <Avatar src={ data?.avatar } alt={ t('Avatar') } />
                    </div>
                ) }
                <Input
                    readonly={ readonly }
                    value={ data?.first }
                    placeholder={ t('First name') }
                    className={ cls.input }
                    onChange={ onChangeFirstname }
                />
                <Input
                    readonly={ readonly }
                    value={ data?.lastname }
                    placeholder={ t('Last name') }
                    className={ cls.input }
                    onChange={ onChangeLastname }
                />
                <Input
                    readonly={ readonly }
                    value={ data?.age }
                    placeholder={ t('Age') }
                    className={ cls.input }
                    onChange={ onChangeAge }
                />
                <Input
                    readonly={ readonly }
                    value={ data?.city }
                    placeholder={ t('City') }
                    className={ cls.input }
                    onChange={ onChangeCity }
                />
                <Input
                    readonly={ readonly }
                    value={ data?.username }
                    placeholder={ t('Username') }
                    className={ cls.input }
                    onChange={ onChangeUsername }
                />
                <Input
                    readonly={ readonly }
                    value={ data?.avatar }
                    placeholder={ t('Link to avatar') }
                    className={ cls.input }
                    onChange={ onChangeAvatar }
                />
                <CountrySelect
                    className={ cls.input }
                    readonly={ readonly }
                    value={ data?.country }
                    onChange={ onChangeCounty }
                />
                <CurrencySelect
                    className={ cls.input }
                    readonly={ readonly }
                    value={ data?.currency }
                    onChange={ onChangeCurrency }
                />
            </div>
        </div>
    );
};

export {
    ProfileCard,
};
