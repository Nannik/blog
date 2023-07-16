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
        let nextTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                nextTheme = Theme.LIGHT;
                break;

            case Theme.LIGHT:
                nextTheme = Theme.ORANGE;
                break;

            case Theme.ORANGE:
                nextTheme = Theme.DARK;
                break;

            default:
                nextTheme = Theme.DARK;
        }

        document.body.className = nextTheme;
        setTheme?.(nextTheme);
        localStorage.setItem(LocalStorageKeys.theme, nextTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
};
