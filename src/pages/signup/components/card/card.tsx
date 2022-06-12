import { FocusEvent, SyntheticEvent, useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { TextField } from '@mui/material';
// линтер просто удаляла строку
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// eslint-disable-next-line prettier/prettier
import { useNavigate } from 'react-router-dom';
// линтер просто удаляла строку
import { DICT_PATTERNS } from 'utils/validation/validationDict';
// линтер просто удаляла строку
import type { PatternsDict } from 'utils/validation/validationDict';
import { SignupParams, signup } from '../../../../services/auth.service';
import './card.css';
import type { CardInput, Props } from './type';

export const CardComponent = (props: Props) => {
  const { inputs } = props;
  const btnNameSubmit = 'Зарегистрироваться';
  const btnNameGoLogin = 'У меня есть аккаунт';
  const btnNameTitle = 'Регистрация';
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState<{ [key: string]: string }>({}); // никак не могу понять как использовать SignupData - keyof CardInput отдает только строку, как и typeof
  const [formData, setFormData] = useState<{ [key: string]: string }>({}); // никак не могу понять как использовать SignupData
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [apiError, setApiError] = useState<string>('');

  const handlerGoToSighInPage = () => {
    navigate('/', { replace: true });
  };

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

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    setErrorText((prevState) => ({ ...prevState, [input.name]: '' }));
    setDisabledBtn(false);
    if (apiError !== '') setApiError('');
  };

  const handleChange = (e: FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    setFormData((prevState) => ({ ...prevState, [input.name]: input.value }));
  };

  const checkNeedError = (input: CardInput) => {
    if (errorText[input.name]) return true;
    return false;
  };

  const sendData = async (obj: SignupParams) => {
    try {
      const answer = await signup(obj);
      if (answer.reason) {
        setApiError(answer.reason);
      } else {
        handlerGoToSighInPage();
      }
    } catch (err) {
      setApiError('что-то пошло не так');
      // throw new Error(err); // тут тоже какой-то тип требует
    }
  };

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (Object.keys(formData).length < inputs.length) {
      inputs.forEach((inputData) => {
        if (!formData[inputData.name]) {
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
      const dataToSend = { ...formData };
      delete dataToSend.passwordRepeat;
      const obj = dataToSend as unknown as SignupParams;
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      sendData(obj); // тут по другому не вышло
    }
  };

  return (
    <Card className="card__card-box">
      <CardContent>
        <form>
          <h1>{btnNameTitle}</h1>
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
            {btnNameSubmit}
          </Button>
          <Button size="small" variant="text" fullWidth>
            {btnNameGoLogin}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
