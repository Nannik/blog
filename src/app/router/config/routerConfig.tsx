import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about';
import { NotFoundPage } from '@/pages/notFound';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: RouteProps[] = [
    {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    {
        path: RoutePaths.about,
        element: <AboutPage />,
    },
    {
        path: RoutePaths.not_found,
        element: <NotFoundPage />,
    },
];
