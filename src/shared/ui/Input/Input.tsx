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

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends AppPropsType, HTMLInputProps {
    className?: string
    value?: string | number
    fontSize?: InputSize
    autoFocus?: boolean
    readonly?: boolean
    onChange?: (value: string) => void
}

const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        fontSize = InputSize.MEDIUM,
        autoFocus,
        readonly,
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
            value={ value }
            className={ classNames(cls.Input, {}, [ className, cls[fontSize] ]) }
            onChange={ onChangeHandler }
            readOnly={ readonly }
            { ...otherProps }
        />
    );
});

export {
    Input,
};
