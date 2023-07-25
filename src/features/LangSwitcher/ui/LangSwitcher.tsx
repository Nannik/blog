import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import {
    Button, ButtonTheme, Text,
} from '@/shared/ui';
import { useToggleLanguage } from '@/shared/language';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

const LangSwitcher = memo((props: LangSwitcherProps) => {
    const {
        className,
        short,
    } = props;

    const { toggleLanguage } = useToggleLanguage();
    const { t } = useTranslation();

    return (
        <div className={ classNames('', {}, [ className ]) }>
            <Button
                theme={ ButtonTheme.CLEAR }
                onClick={ toggleLanguage }
            >
                <Text
                    text={ t(short ? 'LangCode' : 'Lang') }
                />
            </Button>
        </div>
    );
});

export {
    LangSwitcher,
};
