import React, { FC, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '@/shared/theme';
import { LocalStorageKeys } from '@/shared/config';

const defaultTheme = localStorage.getItem(LocalStorageKeys.theme) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
