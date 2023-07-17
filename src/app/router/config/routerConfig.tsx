import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/Main';
import { AboutPage } from '@/pages/About';
import { NotFoundPage } from '@/pages/NotFound';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';

export type AppRouteProps = RouteProps & {
    isAuthOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',

    // last
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles', // + :id

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

    // authOnlyPages
    {
        path: RoutePaths.profile,
        element: <ProfilePage />,
        isAuthOnly: true,
    },
    {
        path: RoutePaths.articles,
        element: <ArticlesPage />,
        isAuthOnly: true,
    },
    {
        path: `${RoutePaths.article_details}/:id`,
        element: <ArticleDetailsPage />,
        isAuthOnly: true,
    },

    // last
    {
        path: RoutePaths.not_found,
        element: <NotFoundPage />,
    },
];
