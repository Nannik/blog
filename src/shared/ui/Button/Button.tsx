import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib';
import cls from './Button.module.scss';
import { AppPropsType } from '@/shared/types';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
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
    disabled?: boolean
}

const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        theme = ButtonTheme.OUTLINE,
        square = false,
        size = ButtonSize.MEDIUM,
        disabled = false,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    const additional = [
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
});

export {
    Button,
};
