import { createContext } from 'react';

export enum Theme {
    DARK = 'app-dark-theme',
    LIGHT = 'app-light-theme',
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});
