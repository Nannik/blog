import { memo } from 'react';
import { Modal } from '@/shared/ui';
import { LoginFormLazy } from '@/features/AuthByUserName/ui/LoginForm/LoginFormLazy';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const LoginModal = memo((props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    return (
        <Modal
            className={ className }
            isOpen={ isOpen }
            onClose={ onClose }
            lazy
        >
            <LoginFormLazy onSuccess={ onClose } />
        </Modal>
    );
});

export {
    LoginModal,
};
