import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Select } from '@/shared/ui';
import { Currency } from '@/entities/Currency/model/types/currency';
import { SelectOption } from '@/shared/ui/Select/Select';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface CurrencySelectProps {
    className?: string
    value?: Currency
    readonly?: boolean
    onChange?: (val: Currency) => void
}

const options: SelectOption[] = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.UAH, content: Currency.UAH },
];

const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        readonly,
        onChange,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [ onChange ]);

    return (
        <Select
            className={ classNames('', {}, [ className ]) }
            label={ t('Select currency') }
            readonly={ readonly }
            options={ options }
            value={ value }
            onChange={ onChangeHandler }
        />
    );
});

export {
    CurrencySelect,
};
