import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/shared/lib';
import cls from './Button.module.scss';
import { AppPropsType } from '@/shared/types';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted'
}

export enum ButtonSize {
    MEDIUM = 'size-m',
    LARGE = 'size-l',
    EXTRA_LARGE = 'size-xl',
}

export interface ButtonProps extends AppPropsType, ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    square?: boolean
}

const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        square,
        size,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    const additional: string[] = [
        className,
        cls[theme],
        cls[size],
    ];

    return (
        <button
            type="button"
            className={ classNames(cls.Button, mods, additional) }
            { ...otherProps }
        >
            {children}
        </button>
    );
};

export {
    Button,
};
