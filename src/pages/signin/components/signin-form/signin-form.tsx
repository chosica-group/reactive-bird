import { Button } from '@mui/material';
import { Form } from 'components/form';
import type { TFormInputs } from 'components/form';
import type { SignInRes, SigninParams } from 'services/auth.service';
import { signin } from 'services/auth.service';

const inputs: TFormInputs<SigninParams> = [
  { name: 'login', label: 'Логин', type: 'text', required: true },
  { name: 'password', label: 'Пароль', type: 'password', required: true },
];

export const SigninForm = () => (
  <>
    <Form<SigninParams, SignInRes>
      title="Вход"
      inputs={inputs}
      onSubmit={signin}
      submitText="Войти"
    />
    <Button size="small" variant="text" fullWidth>
      У вас нет аккаунта? Регистрация
    </Button>
  </>
);
