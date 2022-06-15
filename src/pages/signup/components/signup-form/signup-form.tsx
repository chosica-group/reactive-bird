import { Button } from '@mui/material';
import { Form } from 'components/form';
import type { TFormInputs } from 'components/form';
import { signup } from 'services/auth.service';
import type { SignUpRes, SignupParams } from 'services/auth.service';

type TSubmitWithPassRepeat = SignupParams & {
  passwordRepeat: string;
};

const inputs: TFormInputs<TSubmitWithPassRepeat> = [
  { name: 'email', label: 'Почта', type: 'email', mask: true },
  { name: 'login', label: 'Логин', type: 'text', mask: true },
  { name: 'first_name', label: 'Имя', type: 'text', mask: true },
  { name: 'second_name', label: 'Фамилия', type: 'text', mask: true },
  { name: 'phone', label: 'Телефон', type: 'text', mask: true },
  { name: 'password', label: 'Пароль', type: 'password', mask: true },
  { name: 'passwordRepeat', label: 'Пароль (еще раз)', type: 'password', mask: true },
];

export const SignupForm = () => {
  const onSubmit = async ({
    passwordRepeat,
    ...data
  }: TSubmitWithPassRepeat): Promise<SignUpRes> => {
    if (passwordRepeat !== data.password) {
      return {
        reason: 'Пароль не совпадает',
      };
    }

    return signup(data);
  };

  return (
    <>
      <Form<TSubmitWithPassRepeat, SignUpRes>
        title="Регистрация"
        inputs={inputs}
        onSubmit={onSubmit}
        submitText="Зарегистрироваться"
      />
      <Button size="small" variant="text" fullWidth>
        У меня есть аккаунт
      </Button>
    </>
  );
};
