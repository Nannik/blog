import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

export interface UseThemeResult {
    toggleTheme: () => void,
    theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(nextTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
    }

    return {
        toggleTheme,
        theme
    }
}