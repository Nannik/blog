import { FC } from 'react';
import { classNames } from '@/shared/lib';
import cls from './Text.module.scss';
import { AppPropsType } from '@/shared/types';

export enum TextTheme {
    DISABLED = 'disabled',
    ERROR = 'error',
}

interface TextProps extends AppPropsType {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

const Text: FC<TextProps> = (props) => {
    const {
        className,
        title,
        text,
        theme,
    } = props;

    return (
        <div className={ classNames(cls.Text, {}, [ className, cls[theme] ]) }>
            {title && <p className={ cls.title }>{title}</p>}
            {text && <p className={ cls.text }>{text}</p>}
        </div>
    );
};

export {
    Text,
};
