import { useTranslation } from 'react-i18next';
import { LocalStorageKeys } from '@/shared/config';

interface UseToggleLanguageResult {
    toggleLanguage: () => void
}

export const useToggleLanguage = (): UseToggleLanguageResult => {
    const { i18n } = useTranslation();

    const toggleLanguage = async () => {
        const langCode = i18n.language === 'en' ? 'ua' : 'en';
        i18n.changeLanguage(langCode);
        localStorage.setItem(LocalStorageKeys.languageCode, langCode);
    };

    return {
        toggleLanguage,
    };
};
