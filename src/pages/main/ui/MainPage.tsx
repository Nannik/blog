import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            <h2>{t('Main page')}</h2>
        </div>
    );
}

export default MainPage;
