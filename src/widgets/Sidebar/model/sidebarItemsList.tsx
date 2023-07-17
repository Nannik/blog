import React from 'react';
import { RoutePaths } from '@/app/router/config/routerConfig';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
    to: string
    text: string
    isAuthOnly?: boolean
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        to: RoutePaths.main,
        Icon: MainIcon,
        text: 'Main',
    },
    {
        to: RoutePaths.about,
        Icon: AboutIcon,
        text: 'About',
    },
    {
        to: RoutePaths.profile,
        Icon: ProfileIcon,
        text: 'Profile',
        isAuthOnly: true,
    },
    {
        to: RoutePaths.articles,
        Icon: ArticleIcon,
        text: 'Articles',
        isAuthOnly: true,
    },
];
