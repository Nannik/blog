import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Select } from '@/shared/ui';
import { Country } from '../../model/types/counry';
import { SelectOption } from '@/shared/ui/Select/Select';
import { classNames } from '@/shared/lib';

interface CountrySelectProps {
    className?: string
    value?: Country
    readonly?: boolean
    onChange?: (val: Country) => void
}

const options: SelectOption[] = [
    { value: Country.USA, content: Country.USA },
    { value: Country.POLAND, content: Country.POLAND },
    { value: Country.UKRAINE, content: Country.UKRAINE },
];

const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        readonly,
        onChange,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [ onChange ]);

    return (
        <Select
            className={ classNames('', {}, [ className ]) }
            label={ t('Select country') }
            readonly={ readonly }
            options={ options }
            value={ value }
            onChange={ onChangeHandler }
        />
    );
});

export {
    CountrySelect,
};
