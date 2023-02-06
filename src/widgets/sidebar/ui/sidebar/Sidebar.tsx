import {classNames} from "@/shared/lib";
import cls from "./Sidebar.module.scss";
import {useState} from "react";
import {Button, ButtonTheme} from "@/shared/ui";
import {ThemeSwitcher} from "@/widgets/themeSwitcher";

interface SidebarProps {
    className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(collapsed => !collapsed);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggleCollapsed}
            > Toggle </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export {
    Sidebar
};