import { classNames } from '@/shared/lib';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from '@/shared/theme';
import IconLight from '@/shared/assets/icons/theme-light.svg';
import IconDark from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui';

interface ThemeSwitcherProps {
    className?: string;
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            { theme === Theme.LIGHT ? <IconLight /> : <IconDark /> }
        </Button>
    );
}

export {
    ThemeSwitcher,
};
