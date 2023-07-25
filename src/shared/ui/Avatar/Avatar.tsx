import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
}

const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [ size ]);

    return (
        <img
            style={ styles }
            className={ classNames(cls.Avatar, {}, [ className ]) }
            src={ src }
            alt={ alt }
        />
    );
};

export {
    Avatar,
};
