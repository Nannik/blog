import React, { Suspense } from 'react';
import '../styles/index.scss';
import { useTheme } from '@/shared/theme';
import { classNames } from '@/shared/lib';
import { AppRouter } from '@/app/router';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/Sidebar';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
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
