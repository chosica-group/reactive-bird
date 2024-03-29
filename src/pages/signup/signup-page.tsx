import { CardFormComponent } from 'components/card-form';
import { SignupForm } from './components/signup-form';
import './signup-page.css';

export const SignUpPage = () => (
  <div className="card-form-wrapper">
    <CardFormComponent>
      <SignupForm />
    </CardFormComponent>
  </div>
);
