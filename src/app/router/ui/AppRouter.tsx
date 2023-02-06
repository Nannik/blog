import React, {Suspense} from 'react';
import {routerConfig} from "@/app/router";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    // todo write loading component
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routerConfig.map(({element, path}) =>
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className={'page-wrapper'}>
                                { element }
                            </div>
                        )}
                    />
                )}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;