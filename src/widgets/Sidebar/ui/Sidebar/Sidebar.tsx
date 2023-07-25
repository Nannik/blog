import React, { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import cls from './Sidebar.module.scss';
import { ButtonSize } from '@/shared/ui/Button/Button';
import { SidebarItem } from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { SidebarItemsList } from '../../model/sidebarItemsList';

interface SidebarProps {
    className?: string
}

const Sidebar = memo(({ className }: SidebarProps) => {
    const [ collapsed, setCollapsed ] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            key={ item.to }
            Item={ item }
            collapsed={ collapsed }
        />
    )), [ collapsed ]);

    return (
        <div
            data-testid="sidebar"
            className={ classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [ className ]) }
        >
            <Button
                square
                size={ ButtonSize.LARGE }
                className={ cls.collapseBtn }
                theme={ ButtonTheme.BACKGROUND_INVERTED }
                onClick={ toggleCollapsed }
                data-testid="sidebar_toggle"
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={ cls.items }>
                { itemsList }
            </div>

            <div className={ cls.switchers }>
                <ThemeSwitcher />
                <LangSwitcher
                    short={ collapsed }
                    className={ cls.lang }
                />
            </div>
        </div>
    );
});

export {
    Sidebar,
};
