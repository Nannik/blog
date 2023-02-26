import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { classNames } from '@/shared/lib';
import cls from './Input.module.scss';
import { AppPropsType } from '@/shared/types';

export enum InputSize {
    MEDIUM = 'size-m',
    LARGE = 'size-l',
    EXTRA_LARGE = 'size-xl',
}

interface InputProps extends AppPropsType, InputHTMLAttributes<HTMLInputElement> {
    className?: string
    fontSize?: InputSize
    autoFocus?: boolean
}

const Input = (props: InputProps) => {
    const {
        className,
        fontSize,
        autoFocus,
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [ autoFocus ]);

    return (
        <input
            ref={ ref }
            className={ classNames(cls.Input, {}, [ className, cls[fontSize] ]) }
            { ...props }
        />
    );
};

export {
    Input,
};
