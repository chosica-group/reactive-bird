import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// eslint-disable-next-line import/extensions
import DICT_PATTERNS from '../utils/validationDict.ts';
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

  const handleClick = (e) => {
    console.log(e);
    // router redirect
  };
  // _validateInput(key, value)

  const handleBlur = (e) => {
    const input: any = e.target;
    const currentInput = DICT_PATTERNS[input.name];
    const isValidInput = currentInput.regexp.test(input.value);

    if (!isValidInput) {
      setErrorText((prevState) => ({ ...prevState, [input.name]: currentInput.errorText }));
      setDisabledBtn(true);
    }
  };

  const handleFocus = (e) => {
    const input: any = e.target;
    setErrorText((prevState) => ({ ...prevState, [input.name]: '' }));
    setDisabledBtn(false);
  };

  const handleChange = (e) => {
    const input: any = e.target;
    setFormData((prevState) => ({ ...prevState, [input.name]: input.value }));
  };

  const validateInput = (input) => {
    if (errorText[input.name] && errorText[input.name].length > 1) return true;
    if (errorText[input.name]) return true;
    return false;
  };

  const handleFormSubmit = (e) => {
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
              error={validateInput(input)}
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
