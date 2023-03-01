import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@/shared/theme';
import { classNames } from '@/shared/lib';
import { AppRouter } from '@/app/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { userActions } from '@/entities/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [ dispatch ]);
    document.body.className = theme;

    return (
        <div className={ classNames('app') }>
            <Suspense fallback="">
                <Navbar />
                <div className="page-content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
