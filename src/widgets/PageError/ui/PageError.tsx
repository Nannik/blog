import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import cls from './PageError.module.scss';
import { classNames } from '@/shared/lib';

const PageError = () => {
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
};

export {
    PageError,
};
