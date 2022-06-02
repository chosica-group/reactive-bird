import { CardComponent } from './components/card/index';
import './SignUpPage.css';

export const SignUpPage = () => {
  const inputs = [
    { name: 'email', label: 'Почта', type: 'email' },
    { name: 'login', label: 'Логин', type: 'text' },
    { name: 'first_name', label: 'Имя', type: 'text' },
    { name: 'second_name', label: 'Фамилия', type: 'text' },
    { name: 'phone', label: 'Телефон', type: 'text' },
    { name: 'password', label: 'Пароль', type: 'password' },
    { name: 'passwordRepeat', label: 'Пароль (еще раз)', type: 'password' },
  ];
  return (
    <div className="signup-page">
      <CardComponent inputs={inputs} />
    </div>
  );
};
