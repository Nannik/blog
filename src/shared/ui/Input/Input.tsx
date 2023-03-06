import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames } from '@/shared/lib';
import cls from './Input.module.scss';
import { AppPropsType } from '@/shared/types';

export enum InputSize {
    MEDIUM = 'size-m',
    LARGE = 'size-l',
    EXTRA_LARGE = 'size-xl',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends AppPropsType, HTMLInputProps {
    className?: string
    fontSize?: InputSize
    autoFocus?: boolean
    onChange?: (value: string) => void
}

const Input = memo((props: InputProps) => {
    const {
        className,
        fontSize,
        autoFocus,
        onChange,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [ autoFocus ]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            ref={ ref }
            className={ classNames(cls.Input, {}, [ className, cls[fontSize] ]) }
            onChange={ onChangeHandler }
            { ...otherProps }
        />
    );
});

export {
    Input,
};
