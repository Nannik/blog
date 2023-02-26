import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme, Input } from '@/shared/ui';

interface LoginFormProps {
    className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={ classNames(cls.LoginForm, {}, [ className ]) }>
            <Input autoFocus type="text" placeholder={ t('Username') } />
            <Input type="text" placeholder={ t('Password') } />
            <Button
                className={ cls.btn }
                data-testid="login-btn"
                theme={ ButtonTheme.OUTLINE }
                onClick={ () => {} }
            >
                {t('Login')}
            </Button>
        </div>
    );
};

export {
    LoginForm,
};
