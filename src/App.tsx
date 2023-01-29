import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/about/AboutPageLazy";
import {MainPageLazy} from "./pages/main/MainPageLazy";
import './styles/index.scss';
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

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
                    <Route path={'/'} element={<MainPageLazy />}/>
                    <Route path={'/about'} element={<AboutPageLazy />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;