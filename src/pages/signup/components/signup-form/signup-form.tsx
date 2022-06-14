import { FocusEvent, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import type { CardInput } from 'components/card-form/card-form.type';
import type { SignFormValue } from 'pages/signup/components/signup-form/signup-form.type';
import { DICT_PATTERNS, PatternsDict } from 'utils/validation/validationDict';
import type { SigninParams } from '../../../../services/auth.service';
import { signup } from '../../../../services/auth.service';

const inputs: CardInput[] = [
  { name: 'email', label: 'Почта', type: 'email' },
  { name: 'login', label: 'Логин', type: 'text' },
  { name: 'first_name', label: 'Имя', type: 'text' },
  { name: 'second_name', label: 'Фамилия', type: 'text' },
  { name: 'phone', label: 'Телефон', type: 'text' },
  { name: 'password', label: 'Пароль', type: 'password' },
  { name: 'passwordRepeat', label: 'Пароль (еще раз)', type: 'password' },
];

export const SignupForm = () => {
  const [errorText, setErrorText] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<SignFormValue>({} as SignFormValue);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [apiError, setApiError] = useState<string>('');

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const input = e.target;

    if (input) {
      const currentInput: PatternsDict | undefined = DICT_PATTERNS[input.name];

      let isValidInput = false;

      if (currentInput) {
        isValidInput = currentInput.regexp.test(input.value);

        if (!isValidInput) {
          setErrorText((prevState) => ({ ...prevState, [input.name]: currentInput.errorText }));
          setDisabledBtn(true);
        }
      }
    }
  };

  const handleChange = (e: FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    setFormData((prevState) => ({ ...prevState, [input.name]: input.value }));
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const input = e.target;

    setErrorText((prevState) => ({ ...prevState, [input.name]: '' }));
    setDisabledBtn(false);

    if (apiError !== '') {
      setApiError('');
    }
  };

  const checkNeedError = (input: CardInput) => !!errorText[input.name];

  const handleFormSubmit = () => {
    if (Object.keys(formData).length < inputs.length) {
      inputs.forEach((inputData) => {
        if (!formData[inputData.name as keyof SigninParams]) {
          setErrorText((prevState) => ({ ...prevState, [inputData.name]: 'Обязательное поле' }));
          setDisabledBtn(true);
        }
      });
    } else if (
      formData.password &&
      formData.passwordRepeat &&
      formData.password !== formData.passwordRepeat
    ) {
      setErrorText((prevState) => ({ ...prevState, passwordRepeat: 'Пароль не совпадает' }));
      setDisabledBtn(true);
    } else {
      const dataToSend = { ...formData, passwordRepeat: undefined };
      delete dataToSend.passwordRepeat;

      signup(dataToSend)
        .then((res) => {
          if (res.reason) {
            setApiError(res.reason);
          }
        })
        .catch(() => {
          setApiError('что-то пошло не так');
        });
    }
  };

  return (
    <form>
      <h1>Регистрация</h1>
      {inputs.map((input: CardInput, i: number) => (
        <TextField
          key={i}
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          fullWidth
          error={checkNeedError(input)}
          name={input.name}
          type={input.type}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          helperText={errorText[input.name] || ' '}
          label={input.label}
          required
        />
      ))}
      <span className="card__error-message">{apiError}</span>
      <Button variant="outlined" fullWidth onClick={handleFormSubmit} disabled={disabledBtn}>
        Зарегистрироваться
      </Button>
      <Button size="small" variant="text" fullWidth>
        У меня есть аккаунт
      </Button>
    </form>
  );
};
