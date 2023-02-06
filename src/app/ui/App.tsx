import React from 'react';
import '../styles/index.scss';
import {useTheme} from "@/shared/theme";
import {classNames} from "@/shared/lib";
import {AppRouter} from "@/app/router";
import {Navbar} from "@/widgets/navbar";
import {Sidebar} from "@/widgets/sidebar";

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className={'page-content'}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;