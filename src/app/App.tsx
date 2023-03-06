import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from '@/shared/lib';
import { AppRouter } from '@/app/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { userActions } from '@/entities/User';
import { useTheme } from '@/shared/theme';

function App() {
    const dispatch = useDispatch();
    const { theme } = useTheme();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [ dispatch ]);

    useEffect(() => {
        document.body.className = theme;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={ classNames('app', {}, []) }>
            <Suspense fallback="">
                <div className="app-content">
                    <Navbar />
                    <div className="page-content">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </div>
                <div id="modal-content" />
            </Suspense>
        </div>
    );
}

export default App;
