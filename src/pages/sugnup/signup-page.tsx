import { CardFormComponent } from 'components/card-form';
import './signup-page.css';
import { signup, SignUpRes } from 'services/auth.service';

const inputs = [
  { name: 'email', label: 'Почта', type: 'email' },
  { name: 'login', label: 'Логин', type: 'text' },
  { name: 'first_name', label: 'Имя', type: 'text' },
  { name: 'second_name', label: 'Фамилия', type: 'text' },
  { name: 'phone', label: 'Телефон', type: 'text' },
  { name: 'password', label: 'Пароль', type: 'password' },
  { name: 'passwordRepeat', label: 'Пароль (еще раз)', type: 'password' },
];

const cardTitlesConfig = {
  title: 'Регистрация',
  submitName: 'Зарегистрироваться',
  additionalBtnName: 'У меня есть аккаунт'
}

export const SignUpPage = () => (
  <div className="card-form-wrapper">
    <CardFormComponent inputs={inputs} cardTitlesConfig={cardTitlesConfig} submitBtnEvent={signup as () => Promise<SignUpRes>} />
  </div>
);
