import { useTranslation } from 'react-i18next';
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { SidebarItemType } from '@/widgets/Sidebar/model/sidebarItemsList';
import { getUserAuthData } from '@/entities/User';

interface SidebarItemProps {
    className?: string
    Item: SidebarItemType
    collapsed: boolean
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
    const {
        className,
        collapsed,
        Item,
    } = props;

    const { t } = useTranslation();

    const location = useLocation();

    const isAuth = useSelector(getUserAuthData);

    if (Item.isAuthOnly && !isAuth) {
        return null;
    }

    const mods = {
        [cls.collapsed]: collapsed,
    };

    return (
        <AppLink
            className={ classNames(cls.SidebarItem, mods, [ className ]) }
            theme={ location.pathname === Item.to ? AppLinkTheme.DISABLED : AppLinkTheme.SECONDARY }
            to={ Item.to }
        >
            <Item.Icon className={ cls.icon } />
            <span className={ cls.link }>
                {t(Item.text)}
            </span>
        </AppLink>
    );
};

export {
    SidebarItem,
};
