import { CardComponent } from './components/card/index';
import css from './signup-page.css';

const inputs = [
  { name: 'email', label: 'Почта', type: 'email' },
  { name: 'login', label: 'Логин', type: 'text' },
  { name: 'first_name', label: 'Имя', type: 'text' },
  { name: 'second_name', label: 'Фамилия', type: 'text' },
  { name: 'phone', label: 'Телефон', type: 'text' },
  { name: 'password', label: 'Пароль', type: 'password' },
  { name: 'passwordRepeat', label: 'Пароль (еще раз)', type: 'password' },
];

export const SignUpPage = () => (
  <div className={css.signupPage}>
    <CardComponent inputs={inputs} />
  </div>
);
