import React from 'react';
import '../styles/index.scss';
import {useTheme} from "@/shared/theme";
import {classNames} from "@/shared/lib";
import {AppRouter} from "@/app/router";
import {Navbar} from "@/widgets/navbar";

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;