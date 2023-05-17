import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about';
import { NotFoundPage } from '@/pages/notFound';
import { ProfilePage } from '@/pages/profilePage';

type AppRouteProps = RouteProps & {
    isAuthOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',

    // last
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',

    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: AppRouteProps[] = [
    {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    {
        path: RoutePaths.about,
        element: <AboutPage />,
    },
    {
        path: RoutePaths.profile,
        element: <ProfilePage />,
        isAuthOnly: true,
    },

    // last
    {
        path: RoutePaths.not_found,
        element: <NotFoundPage />,
    },
];
