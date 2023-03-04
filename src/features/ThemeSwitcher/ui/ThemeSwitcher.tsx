import { memo } from 'react';
import { classNames } from '@/shared/lib';
import { Theme, useTheme } from '@/shared/theme';
import IconLight from '@/shared/assets/icons/theme-light.svg';
import IconDark from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui';

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ ButtonTheme.CLEAR }
            className={ classNames('', {}, [ className ]) }
            onClick={ toggleTheme }
        >
            { theme === Theme.LIGHT ? <IconLight /> : <IconDark /> }
        </Button>
    );
});

export {
    ThemeSwitcher,
};
