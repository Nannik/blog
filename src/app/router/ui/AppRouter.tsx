import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routerConfig } from '@/app/router';
import { PageLoader } from '@/widgets/PageLoader/';
import { getUserAuthData } from '@/entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => routerConfig.filter((route) => !route.isAuthOnly || isAuth), [ isAuth ]);

    return (
        <Suspense fallback={ <PageLoader /> }>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={ path }
                        path={ path }
                        element={ (
                            <div className="page-wrapper">
                                { element }
                            </div>
                        ) }
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
