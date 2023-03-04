import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            <h2>{t('Main page')}</h2>
        </div>
    );
});

export default MainPage;
