import { useTranslation } from 'react-i18next';
import React from 'react';
import { classNames } from '@/shared/lib';
import { Button, ButtonTheme } from '@/shared/ui';
import { useToggleLanguage } from '@/shared/language';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

function LangSwitcher(props: LangSwitcherProps) {
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
                {t(short ? 'LangCode' : 'Lang')}
            </Button>
        </div>
    );
}

export {
    LangSwitcher,
};
