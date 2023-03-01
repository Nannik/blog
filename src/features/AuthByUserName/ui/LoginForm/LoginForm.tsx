import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import cls from './LoginForm.module.scss';
import {
    Button, ButtonTheme, Input, Text, TextTheme,
} from '@/shared/ui';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';

interface LoginFormProps {
    className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [ dispatch ]);

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [ dispatch ]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [ dispatch, password, username ]);

    return (
        <div className={ classNames(cls.LoginForm, {}, [ className ]) }>
            <Text title={ t('Authorization form') } />

            {error && (
                <Text
                    theme={ TextTheme.ERROR }
                    text={ t('Incorrect username or password') }
                />
            )}

            <Input
                onChange={ onUsernameChange }
                autoFocus
                type="text"
                placeholder={ t('Username') }
                value={ username }
            />
            <Input
                onChange={ onPasswordChange }
                type="password"
                placeholder={ t('Password') }
                value={ password }
            />
            <Button
                className={ cls.btn }
                data-testid="login-btn"
                theme={ ButtonTheme.OUTLINE }
                onClick={ onLoginClick }
                disabled={ isLoading }
            >
                {t('Log in')}
            </Button>
        </div>
    );
});

export {
    LoginForm,
};
