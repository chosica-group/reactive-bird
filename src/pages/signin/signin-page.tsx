import './signin-page.css';
import { CardFormComponent } from 'components/card-form';
import { SigninForm } from './components/signin-form';

export const SignInPage = () => (
  <div className="card-form-wrapper">
    <CardFormComponent>
      <SigninForm></SigninForm>
    </CardFormComponent>
  </div>
);
