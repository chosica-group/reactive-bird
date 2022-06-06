export type CardInput = {
  type: string;
  name: string;
  label: string;
};

export type StringObject = {
  [key: string]: string;
};

export type Props = {
  inputs: CardInput[];
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
