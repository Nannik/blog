import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/app/router';
import { PageLoader } from '@/widgets/pageLoader/';

function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routerConfig.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                { element }
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
