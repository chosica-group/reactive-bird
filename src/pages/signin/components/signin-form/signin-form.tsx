import { useState } from 'react';
import { Button } from '@mui/material';
import { Form } from 'components/form';
import type { TFormInputs } from 'components/form';
import type { SigninParams } from 'services/auth.service';
import { signin } from 'services/auth.service';

const inputs: TFormInputs<SigninParams> = [
  { name: 'login', label: 'Логин', type: 'text', required: true },
  { name: 'password', label: 'Пароль', type: 'password', required: true },
];

export const SigninForm = () => {
  const [apiError, setApiError] = useState<string | undefined>();

  const onSubmit = (data: SigninParams) => {
    signin(data)
      .then((res) => {
        setApiError(res.reason);
      })
      .catch(() => {
        setApiError('что-то пошло не так');
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
      <Button size="small" variant="text" fullWidth>
        У вас нет аккаунта? Регистрация
      </Button>
    </>
  );
};
