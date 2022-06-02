import { useState, MouseEvent } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import type { PatternsDict } from 'utils/validation/validationDict';
import { DICT_PATTERNS } from 'utils/validation/validationDict';
import type { SignupData, CardInput } from './type';
import './Card.css';

export const CardComponent = (props: CardInput[]) => {
  const btnNameSubmit = 'Зарегистрироваться';
  const btnNameGoLogin = 'У меня есть аккаунт';
  const btnNameTitle = 'Регистрация';
  const [errorText, setErrorText] = useState({});
  const [formData, setFormData] = useState<SignupData>({});
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [apiError, setApiError] = useState('');
  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    console.log(e);
    // router redirect
  };
  // _validateInput(key, value)
  const handleBlur = (e: MouseEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
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

  const handleFocus = (e: MouseEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setErrorText((prevState) => ({ ...prevState, [input.name]: '' }));
    setDisabledBtn(false);
  };

  const handleChange = (e: MouseEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setFormData((prevState) => ({ ...prevState, [input.name]: input.value }));
  };

  const checkNeedError = (input) => {
    if (errorText[input.name] && errorText[input.name].length > 1) return true;
    if (errorText[input.name]) return true;
    return false;
  };

  const handleFormSubmit = (e: PointerEvent) => {
    e.preventDefault();
    if (Object.keys(formData).length < props.inputs.length) {
      props.inputs.forEach((inputData) => {
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
      delete formData.passwordRepeat;
      try {
        // const userData = await authController.signUp(formData)
        // router.go('/messenger')
      } catch (err) {
        if (err.reason) {
          setApiError(err.reason);
        }
        console.log(err);
      }
    }
  };

  return (
    <Card className="card__card-box">
      <CardContent>
        <form>
          <h1>{btnNameTitle}</h1>
          {props.inputs.map((input, i) => (
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
              helperText={errorText[input.name] || ' '}
              label={input.label}
              required
            />
          ))}
          <span className="card__error-message">{apiError}</span>
          <Button variant="outlined" fullWidth onClick={handleFormSubmit} disabled={disabledBtn}>
            {btnNameSubmit}
          </Button>
          <Button size="small" variant="text" fullWidth onClick={handleClick}>
            {btnNameGoLogin}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
