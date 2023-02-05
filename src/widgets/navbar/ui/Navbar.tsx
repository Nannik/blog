import {classNames} from "@/shared/lib";
import {AppLink} from "@/shared/ui";
import cls from "./Navbar.module.scss";
import {AppLinkTheme} from "@/shared/ui/appLink/AppLink";
import {ThemeSwitcher} from "@/widgets/themeSwitcher";
import {LinkProps, useLocation} from "react-router-dom";

interface LinkData {
    to: string;
    text: string;
}

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const location = useLocation();

    const linksData: LinkData[] = [
        { to: '/', text: 'Main' },
        { to: '/about', text: 'About' }
    ];

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />

            <div>
                {linksData.map(data =>
                    <AppLink
                        key={data.to}
                        theme={ location.pathname === data.to ? AppLinkTheme.DISABLED : AppLinkTheme.SECONDARY }
                        to={data.to}
                    >
                        {data.text}
                    </AppLink>
                )}
            </div>
        </div>
    );
};

export {
    Navbar
};