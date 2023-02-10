import {classNames} from "@/shared/lib";
import cls from "./Sidebar.module.scss";
import React, {useState} from "react";
import {Button, ButtonTheme} from "@/shared/ui";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const toggleCollapsed = () => {
        setCollapsed(collapsed => !collapsed);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggleCollapsed}
            >
                {t('Toggle')}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

export {
    Sidebar
};