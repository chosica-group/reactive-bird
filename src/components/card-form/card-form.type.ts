export type CardInput = {
  type: string;
  name: string;
  label: string;
};

export type StringObject = {
  [key: string]: string;
};

export type CardFormProps<TParams, TResponse> = {
  inputs: CardInput[];
  cardTitlesConfig: {
    title: string;
    submitName: string;
    additionalBtnName: string;
  },
  submitBtnEvent: (data: TParams) => Promise<TResponse>;
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
