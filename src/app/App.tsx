import React, { Suspense } from 'react';
import { useTheme } from '@/shared/theme';
import { classNames } from '@/shared/lib';
import { AppRouter } from '@/app/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

function App() {
    const { theme } = useTheme();

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
