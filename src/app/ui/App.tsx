import React, { Suspense } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import '../styles/index.scss';
import {useTheme} from "@/shared/theme";
import {classNames} from "@/shared/lib";
import {MainPage} from "@/pages/main";
import {AboutPage} from "@/pages/about";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>

            <br/>

            <Link to={'/'}>Main</Link>
            &nbsp;
            <Link to={'/about'}>About</Link>
            {/*todo write loading component*/}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />}/>
                    <Route path={'/about'} element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;