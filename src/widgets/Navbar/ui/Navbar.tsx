import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUserName/ui/LoginModal/LoginModal';

interface NavbarProps {
    className?: string
}

function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [ isLogInModalOpen, setIsLogInModalOpen ] = useState(false);

    const openLoginModal = useCallback(() => {
        setIsLogInModalOpen((isOpen) => !isOpen);
    }, []);

    return (
        <div className={ classNames(cls.navbar, {}, [ className ]) }>
            <Button
                theme={ ButtonTheme.CLEAR_INVERTED }
                onClick={ openLoginModal }
            >
                {t('LogIn')}
            </Button>
            <LoginModal
                isOpen={ isLogInModalOpen }
                onClose={ () => setIsLogInModalOpen(false) }
            />
        </div>

    );
}

export {
    Navbar,
};
