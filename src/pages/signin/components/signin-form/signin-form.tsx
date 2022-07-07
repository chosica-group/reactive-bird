import { useState } from 'react';
import { Button } from '@mui/material';
import { Form } from 'components/form';
import type { TFormInputs } from 'components/form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from 'services/auth/auth-api';
import type { SigninParams } from 'services/auth/types';
import { setUserLoggedIn } from 'store/auth-reducer';

const inputs: TFormInputs<SigninParams> = [
  { name: 'login', label: 'Логин', type: 'text', required: true },
  { name: 'password', label: 'Пароль', type: 'password', required: true },
];

export const SigninForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [apiError, setApiError] = useState<string | undefined>();

  const onSubmit = (data: SigninParams) => {
    signin(data)
      .then((res) => {
        if (res.reason && res.reason !== 'User already in system') {
          setApiError(res.reason);
        } else {
          dispatch(setUserLoggedIn(true));
          navigate('/game', { replace: true });
        }
      })
      .catch(() => {
        setApiError('что-то пошло не так');
      });
  };

  const goToSignupPage = () => {
    navigate('/signup', { replace: true });
  };
  const goToOAuth = () => {
    const CLIENT_ID = process.env.CLIENT_ID || '';
    const REDIRECT_URI = process.env.REDIRECT_URI || '';
    document.location.assign(
      `https://oauth.yandex.ru/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`,
    );
  };

  return (
    <>
      <Form<SigninParams>
        title="Вход"
        inputs={inputs}
        onSubmit={onSubmit}
        submitText="Войти"
        error={apiError}
      />
      <Button size="medium" variant="text" fullWidth onClick={goToOAuth}>
        Вход c Яндекс ID
      </Button>
      <Button size="small" variant="text" fullWidth onClick={goToSignupPage}>
        Регистрация
      </Button>
    </>
  );
};
