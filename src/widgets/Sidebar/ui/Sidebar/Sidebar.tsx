import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { Button, ButtonTheme } from '@/shared/ui';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const toggleCollapsed = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar_toggle"
                theme={ButtonTheme.CLEAR}
                onClick={toggleCollapsed}
            >
                {t('Toggle')}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
}

export {
    Sidebar,
};
