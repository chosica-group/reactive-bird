import type { SigninParams, SignInRes, SignupParams, SignUpRes } from 'services/auth.service';

export type CardInput = {
  type: string;
  name: string;
  label: string;
};

export type StringObject = {
  [key: string]: string;
};

export type CardFormProps = {
  inputs: CardInput[];
  cardTitlesConfig: {
    title: string;
    submitName: string;
    additionalBtnName: string;
  },
  submitBtnEvent: (data: SignupParams | SigninParams) => Promise<SignUpRes | SignInRes>; // TODO: нужно понять как сделать этот метод универсальным
};

export type SignupData = {
  first_name?: string;
  second_name?: string;
  login?: string;
  email?: string;
  password?: string;
  passwordRepeat?: string;
  phone?: string;
};
