export interface SignupData {
  first_name?: string;
  second_name?: string;
  login?: string;
  email?: string;
  password?: string;
  passwordRepeat?: string;
  phone?: string;
}

export interface CardInput {
  type: string;
  name: string;
  label: string;
}
