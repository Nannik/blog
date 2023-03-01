import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUserName/ui/LoginModal/LoginModal';
import { getUserAuthData, userActions } from '@/entities/User';

interface NavbarProps {
    className?: string
}

function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [ isLogInModalOpen, setIsLogInModalOpen ] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const openLoginModal = useCallback(() => {
        setIsLogInModalOpen((isOpen) => !isOpen);
    }, []);

    const logout = useCallback(() => {
        dispatch(userActions.logout());
    }, [ dispatch ]);

    if (authData) {
        return (
            <div className={ classNames(cls.navbar, {}, [ className ]) }>
                <Button
                    theme={ ButtonTheme.CLEAR_INVERTED }
                    onClick={ logout }
                >
                    {t('Log out')}
                </Button>
            </div>
        );
    }

    return (
        <div className={ classNames(cls.navbar, {}, [ className ]) }>
            <Button
                theme={ ButtonTheme.CLEAR_INVERTED }
                onClick={ openLoginModal }
            >
                {t('Log in')}
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
