import React from 'react';
import {useTheme} from "@/shared/theme";
import {classNames} from "@/shared/lib";
import {AppLink} from "@/shared/ui";
import cls from "./navbar.module.scss";
import {AppLinkTheme} from "@/shared/ui/AppLink/AppLink";

interface NavbarProps  {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const { toggleTheme } = useTheme();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <button onClick={toggleTheme}>Toggle theme</button>

            <br/>

            <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>Main</AppLink>
            &nbsp;
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
        </div>
    );
};

export {
    Navbar
};