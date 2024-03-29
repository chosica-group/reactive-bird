import { useState } from 'react';
import { Button } from '@mui/material';
import { Form } from 'components/form';
import type { TFormInputs } from 'components/form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import type { TUserTheme } from 'server/models/types';
import { getServiceIdOauth, signin } from 'services/auth/auth-api';
import type { SignUpRes, SigninParams, TClientId, UserModel } from 'services/auth/types';
import { useAddUserThemeMutation } from 'services/theme/theme-api';
import { setUserId, setUserLoggedIn } from 'store/auth-reducer';
import { setUserThemeName } from 'store/theme-reduser';

const inputs: TFormInputs<SigninParams> = [
  { name: 'login', label: 'Логин', type: 'text', required: true },
  { name: 'password', label: 'Пароль', type: 'password', required: true },
];

type TAnswer = {
  reason?: string;
  id?: number;
  theme_name?: string;
};

export const REDIRECT_URI =
  process.env.NODE_ENV === 'production'
    ? 'https://chosica-reactive-bird-14.ya-praktikum.tech'
    : `http://localhost:${process.env.DEV_SERVER_PORT || 3000}`;

export const SigninForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [setUserTheme] = useAddUserThemeMutation();
  const [apiError, setApiError] = useState<string | undefined>();

  const onSubmit = (data: SigninParams) => {
    signin(data)
      .then((res: TAnswer) => {
        if (res.reason && res.reason !== '') {
          setApiError(res.reason);
        }
        if (res.reason === '' || res.id) {
          dispatch(setUserLoggedIn(true));
          dispatch(setUserId(res.id || 1));
          const userThemeData: TUserTheme = {
            user_id: res.id || 1,
            theme_name: 'light',
          };
          setUserTheme(userThemeData)
            .then((theme) => {
              const themeData = theme as TAnswer;
              dispatch(setUserThemeName(themeData.theme_name || 'light'));
            })
            .catch((err) => console.log(err, 'error theme'));
          history.push('/game');
        }
      })
      .catch(() => {
        setApiError('что-то пошло не так');
      });
  };

  const redirect = (id: string) => {
    document.location.assign(
      `https://oauth.yandex.ru/authorize?response_type=code&client_id=${id}&redirect_uri=${REDIRECT_URI}`,
    );
  };

  const goToSignupPage = () => {
    history.push('/signup');
  };
  const useGoToOAuth = () => {
    getServiceIdOauth(REDIRECT_URI)
      .then((res: TClientId | SignUpRes) => {
        if ('service_id' in res) {
          redirect(res.service_id);
        }
      })
      .catch((err) => {
        console.log(err, 'error get service id');
      });
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
