import React, {
    FC, useMemo, useState,
} from 'react';
import { Theme, ThemeContext } from '@/shared/theme';
import { LocalStorageKeys } from '@/shared/config';

const defaultTheme = localStorage.getItem(LocalStorageKeys.theme) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme,
    } = props;

    const [ theme, setTheme ] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [ theme ]);

    return (
        <ThemeContext.Provider value={ defaultProps }>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
