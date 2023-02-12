import { useTranslation } from 'react-i18next';
import React from 'react';
import { classNames } from '@/shared/lib';
import cls from './LangSwitcher.module.scss';
import { Button, ButtonTheme } from '@/shared/ui';
import { useToggleLanguage } from '@/shared/language';

interface LangSwitcherProps {
    className?: string;
}

function LangSwitcher({ className }: LangSwitcherProps) {
    const { toggleLanguage } = useToggleLanguage();
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames(cls.ThemeSwitcher, {}, [className])}
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
