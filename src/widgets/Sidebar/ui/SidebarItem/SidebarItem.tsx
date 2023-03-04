import { useTranslation } from 'react-i18next';
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { SidebarItemType } from '@/widgets/Sidebar/model/sidebarItemsList';

interface SidebarItemProps {
    className?: string
    item: SidebarItemType
    collapsed: boolean
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
    const {
        className,
        collapsed,
        item: {
            text,
            to,
            Icon,
        },
    } = props;

    const { t } = useTranslation();

    const location = useLocation();

    const mods = {
        [cls.collapsed]: collapsed,
    };

    return (
        <AppLink
            className={ classNames(cls.SidebarItem, mods, [ className ]) }
            theme={ location.pathname === to ? AppLinkTheme.DISABLED : AppLinkTheme.SECONDARY }
            to={ to }
        >
            <Icon className={ cls.icon } />
            <span className={ cls.link }>
                {t(text)}
            </span>
        </AppLink>
    );
};

export {
    SidebarItem,
};
