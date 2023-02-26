import { classNames } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={ classNames(cls.PageLoader, {}, [ className ]) }>
        <Loader />
    </div>
);

export {
    PageLoader,
};
