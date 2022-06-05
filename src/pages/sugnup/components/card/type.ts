export interface CardInput {
  type: string;
  name: string;
  label: string;
}

export interface StringObject {
  [key: string]: string;
}

export interface Props {
  inputs: CardInput[];
}

interface IObjectKeys {
  [key: string]: string;
}

export interface SignupDataRequired extends IObjectKeys {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  passwordRepeat: string;
  phone: string;
}

export interface SignupData extends Partial<SignupDataRequired> {}
