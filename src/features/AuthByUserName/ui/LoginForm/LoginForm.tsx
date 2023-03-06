import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    classNames, DynamicModuleLoader, ReducersList, useAppDispatch,
} from '@/shared/lib';
import cls from './LoginForm.module.scss';
import {
    Button, ButtonTheme, Input, Text, TextTheme,
} from '@/shared/ui';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';

interface LoginFormProps {
    className?: string
    onSuccess?: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
        onSuccess,
    } = props;

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [ dispatch ]);

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [ dispatch ]);

    const onLoginClick = useCallback(async () => {
        const res = await dispatch(loginByUsername({ username, password }));
        if (res.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [ onSuccess, dispatch, password, username ]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={ initialReducers }
        >
            <div
                data-testid="login-form"
                className={ classNames(cls.LoginForm, {}, [ className ]) }
            >
                <Text title={ t('Authorization form') } />

                {error && (
                    <Text
                        data-testid="error"
                        theme={ TextTheme.ERROR }
                        text={ t('Incorrect username or password') }
                    />
                )}

                <Input
                    data-testid="username-field"
                    onChange={ onUsernameChange }
                    autoFocus
                    type="text"
                    placeholder={ t('Username') }
                    value={ username }
                />
                <Input
                    data-testid="password-field"
                    onChange={ onPasswordChange }
                    type="password"
                    placeholder={ t('Password') }
                    value={ password }
                />
                <Button
                    data-testid="login-btn"
                    className={ cls.btn }
                    theme={ ButtonTheme.OUTLINE }
                    onClick={ onLoginClick }
                    disabled={ isLoading }
                >
                    {t('Log in')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
