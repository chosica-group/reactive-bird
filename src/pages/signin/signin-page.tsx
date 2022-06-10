import './signin-page.css';
import { CardFormComponent } from 'components/card-form';
import { signin } from 'services/auth.service';

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
  <div className="card-form-wrapper">
    <CardFormComponent inputs={inputs} cardTitlesConfig={cardTitlesConfig} submitBtnEvent={signin} />
  </div>
);
