import { FocusEvent, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import type { CardInput } from 'components/card-form/card-form.type';
import { useNavigate } from 'react-router-dom';
import { DICT_PATTERNS, PatternsDict } from 'utils/validation/validationDict';
import type { SigninParams } from '../../../../services/auth.service';
import { signin } from '../../../../services/auth.service';

const inputs = [
  { name: 'login', label: 'Логин', type: 'text', required: true },
  { name: 'password', label: 'Пароль', type: 'password', required: true },
];

export const SigninForm = () => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<SigninParams>({} as SigninParams);
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

  const goToSignupPage = () => {
    navigate('/signup', { replace: true });
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
    } else {
      signin(formData)
        .then((res) => {
          if (res.reason) {
            setApiError(res.reason);
          } else {
            navigate('/', { replace: true });
          }
        })
        .catch(() => {
          setApiError('что-то пошло не так');
        });
    }
  };

  return (
    <form>
      <h1>Вход</h1>
      {inputs.map((input, i: number) => (
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
        Войти
      </Button>
      <Button size="small" variant="text" fullWidth onClick={goToSignupPage}>
        У вас нет аккаунта? Регистрация
      </Button>
    </form>
  );
};
