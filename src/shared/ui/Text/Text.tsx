import { memo } from 'react';
import { classNames } from '@/shared/lib';
import cls from './Text.module.scss';
import { AppPropsType } from '@/shared/types';

export enum TextTheme {
    DISABLED = 'disabled',
    ERROR = 'error',
    PRIMARY = 'primary'
}

export enum TextAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right'
}

interface TextProps extends AppPropsType {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}

const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    const mods = {
        [cls[theme]]: theme,
        [cls[align]]: align,
    };

    return (
        <div className={ classNames(cls.Text, mods, [ className ]) }>
            {title && <p className={ cls.title }>{title}</p>}
            {text && <p className={ cls.text }>{text}</p>}
        </div>
    );
});

export {
    Text,
};
