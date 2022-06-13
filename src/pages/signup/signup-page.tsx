import { CardFormComponent } from 'components/card-form';
import './signup-page.css';
import { SignupForm } from './components/signup-form';

export const SignUpPage = () => (
  <div className="card-form-wrapper">
    <CardFormComponent>
      <SignupForm></SignupForm>
    </CardFormComponent>
  </div>
);
