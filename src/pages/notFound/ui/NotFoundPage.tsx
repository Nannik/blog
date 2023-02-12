import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation('notFound');

    return (
        <div className={cls.wrapper}>
            {t('Page not found')}
        </div>
    );
};

export default NotFoundPage;
