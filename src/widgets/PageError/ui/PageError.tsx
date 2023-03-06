import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from '@/shared/ui';
import cls from './PageError.module.scss';
import { classNames } from '@/shared/lib';

const PageError = memo(() => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={ classNames(cls.PageError) }>
            {t('Error happened')}
            <Button onClick={ reloadPage }>
                {t('Reload page')}
            </Button>
        </div>
    );
});

export {
    PageError,
};
