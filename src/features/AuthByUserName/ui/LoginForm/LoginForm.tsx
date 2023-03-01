import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames, DynamicModuleLoader, ReducersList } from '@/shared/lib';
import cls from './LoginForm.module.scss';
import {
    Button, ButtonTheme, Input, Text, TextTheme,
} from '@/shared/ui';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';

interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);

    const { t } = useTranslation();
    const dispatch = useDispatch();

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
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={ initialReducers }
        >
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
