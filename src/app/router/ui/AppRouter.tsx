import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader/';
import { routerConfig } from '@/app/router';
import { AppRouteProps } from '@/app/router/config/routerConfig';
import { RequireAuth } from '@/app/router/ui/RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={ <PageLoader /> }>
                <div className="page-wrapper">
                    { route.element }
                </div>
            </Suspense>
        );

        return (
            <Route
                key={ route.path }
                path={ route.path }
                element={ route.isAuthOnly ? <RequireAuth>{element}</RequireAuth> : element }
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routerConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
