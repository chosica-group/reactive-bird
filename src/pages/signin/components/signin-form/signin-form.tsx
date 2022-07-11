import { useState } from 'react';
import { Button } from '@mui/material';
import { Form } from 'components/form';
import type { TFormInputs } from 'components/form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from 'services/auth/auth-api';
import type { TAuthWithYandex } from 'services/auth/o-auth';
import { useAuthWithYandexOauthQuery, useGetServiceIdOauthQuery } from 'services/auth/o-auth';
// import { useGetServiceIdOauthQuery } from 'services/auth/o-auth';
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
  const [skip, setSkip] = useState(true);
  const [skipOne] = useState(true);

  const REDIRECT_URI =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : 'https://chosica-flappy-bird.herokuapp.com';
  const { data: CLIENT_ID, error } = useGetServiceIdOauthQuery(REDIRECT_URI, { skip });
  console.log(REDIRECT_URI, 'REDIRECT_URI');
  // @ts-ignore
  if (CLIENT_ID?.service_id) {
    document.location.assign(
      `https://oauth.yandex.ru/authorize?response_type=code&client_id=${CLIENT_ID.service_id}&redirect_uri=${REDIRECT_URI}`,
    );
  }
  const dataFotAuth: TAuthWithYandex = {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    code: CLIENT_ID.service_id,
    redirect_uri: REDIRECT_URI,
  };
  const { data: dddd } = useAuthWithYandexOauthQuery(dataFotAuth, { skip: skipOne });
  console.log(dddd, 'data');

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
  const useGoToOAuth = () => {
    console.log('ddddd');
    setSkip((prev) => !prev);
    // if (authAnswer && authAnswer.reason) alert('что-то пошло не так, авторизация не удалась');
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
      <Button size="medium" variant="text" fullWidth onClick={useGoToOAuth}>
        Вход c Яндекс ID
      </Button>
      <Button size="small" variant="text" fullWidth onClick={goToSignupPage}>
        Регистрация
      </Button>
    </>
  );
};
