import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib';
import { AppLink, Button, ButtonTheme } from '@/shared/ui';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import cls from './Sidebar.module.scss';
import { ButtonSize } from '@/shared/ui/Button/Button';
import { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePaths } from '@/app/router/config/routerConfig';
import MainIcon from '@/shared/assets/icons/main-icon.svg';
import AboutIcon from '@/shared/assets/icons/about-icon.svg';

interface SidebarProps {
    className?: string;
}

interface LinkData {
    to: string;
    text: string;
    icon: JSX.Element
}

function Sidebar({ className }: SidebarProps) {
    const [ collapsed, setCollapsed ] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    const location = useLocation();

    const linksData: LinkData[] = [
        { to: RoutePaths.main, icon: <MainIcon className={ cls.icon } />, text: 'Main' },
        { to: RoutePaths.about, icon: <AboutIcon className={ cls.icon } />, text: 'About' },
    ];

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
                {linksData.map((data) => (
                    <AppLink
                        key={ data.to }
                        className={ cls.item }
                        theme={ location.pathname === data.to ? AppLinkTheme.DISABLED : AppLinkTheme.SECONDARY }
                        to={ data.to }
                    >
                        {data.icon}
                        <span className={ cls.link }>
                            {data.text}
                        </span>
                    </AppLink>
                ))}
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
}

export {
    Sidebar,
};
