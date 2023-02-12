import { useTranslation } from 'react-i18next';
import React from 'react';
import { classNames } from '@/shared/lib';
import { Button, ButtonTheme } from '@/shared/ui';
import { useToggleLanguage } from '@/shared/language';

interface LangSwitcherProps {
    className?: string;
}

function LangSwitcher({ className }: LangSwitcherProps) {
    const { toggleLanguage } = useToggleLanguage();
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggleLanguage}
            >
                {t('Lang')}
            </Button>
        </div>
    );
}

export {
    LangSwitcher,
};
