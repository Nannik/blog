import React from 'react';
import { RoutePaths } from '@/app/router/config/routerConfig';
import MainIcon from '@/shared/assets/icons/main-icon.svg';
import AboutIcon from '@/shared/assets/icons/about-icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';

export interface SidebarItemType {
    to: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    { to: RoutePaths.main, Icon: MainIcon, text: 'Main' },
    { to: RoutePaths.about, Icon: AboutIcon, text: 'About' },
    { to: RoutePaths.profile, Icon: ProfileIcon, text: 'Profile' },
];
