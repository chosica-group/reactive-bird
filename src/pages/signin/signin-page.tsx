import './signin-page.css';
import { CardComponent } from "components/card";

const inputs = [
  { name: 'login', label: 'Логин', type: 'text' },
  { name: 'password', label: 'Пароль', type: 'password' }
];

const cardTitlesConfig = {
  title: 'Вход',
  submitName: 'Войти',
  additionalBtnName: 'У вас нет аккаунта? Регистрация'
}

export const SignInPage = () => (
  <div className="signin-page">
    <CardComponent inputs={inputs} cardTitlesConfig={cardTitlesConfig} isForSignUp={false} />
  </div>
);
