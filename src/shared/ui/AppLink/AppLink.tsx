import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';
import { classNames } from '@/shared/lib';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    DISABLED = 'disabled'
}

interface AppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}

const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
    } = props;

    return (
        <Link
            className={ classNames(cls.AppLink, {}, [ className, cls[theme] ]) }
            to={ to }
        >
            {children}
        </Link>
    );
});

export {
    AppLink,
};
