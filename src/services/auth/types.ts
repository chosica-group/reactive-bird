export type SigninParams = {
  login: string;
  password: string;
};

export type SignupParams = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type SignUpRes = {
  reason?: string;
  id?: number;
};

export type SignInRes = {
  reason?: string;
};

export type UserModel = {
  avatar: string | null;
  display_name: string | null;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone: string | null;
  second_name: string;
};

export type TReject = {
  reason: string;
};

export type TClientId = {
  service_id: string;
};

export type TAuthWithYandex = {
  code: string;
  redirect_uri: string;
};
