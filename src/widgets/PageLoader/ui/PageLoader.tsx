import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Loader } from '@/shared/ui';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div className={ classNames(cls.PageLoader, {}, [ className ]) }>
        <Loader />
    </div>
));

export {
    PageLoader,
};
