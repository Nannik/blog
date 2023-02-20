import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme, Modal } from '@/shared/ui';

interface NavbarProps {
    className?: string;
}

function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [ isLogInModalOpen, setIsLogInModalOpen ] = useState(false);

    const openLogInModal = useCallback(() => {
        setIsLogInModalOpen((isOpen) => !isOpen);
    }, []);

    return (
        <div className={ classNames(cls.navbar, {}, [ className ]) }>
            <Button
                theme={ ButtonTheme.CLEAR_INVERTED }
                onClick={ openLogInModal }
            >
                {t('LogIn')}
            </Button>
            <Modal
                isOpen={ isLogInModalOpen }
                onClose={ () => setIsLogInModalOpen(false) }
            >
                <input type="text" />
            </Modal>
        </div>

    );
}

export {
    Navbar,
};
