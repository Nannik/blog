import { useContext } from 'react';
import { Theme, ThemeContext } from '@/shared/theme';
import { LocalStorageKeys } from '@/shared/config';

export interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        document.body.className = nextTheme;
        setTheme?.(nextTheme);
        localStorage.setItem(LocalStorageKeys.theme, nextTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
};
