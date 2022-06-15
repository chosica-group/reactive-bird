import { CardFormComponent } from 'components/card-form';
import { SigninForm } from './components/signin-form';
import './signin-page.css';

export const SignInPage = () => (
  <div className="card-form-wrapper">
    <CardFormComponent>
      <SigninForm />
    </CardFormComponent>
  </div>
);
