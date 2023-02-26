import { Modal } from '@/shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const LoginModal = (props: LoginModalProps) => {
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
            <LoginForm />
        </Modal>
    );
};

export {
    LoginModal,
};
