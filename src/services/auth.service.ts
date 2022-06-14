import config from './config';

const authUrl = `${config.API_URL}/auth`;

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
  id: number;
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

const defaultParams = {
  credentials: 'include' as RequestCredentials,
  headers: { 'Content-Type': 'application/json' },
};

const signin = (params: SigninParams): Promise<SignInRes> => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(params),
    ...defaultParams,
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return fetch(`${authUrl}/signin`, requestOptions).then((res) =>
    res.status === 200 ? { reason: '' } : res.json(),
  );
};

const signup = (params: SignupParams): Promise<SignUpRes> => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(params),
    ...defaultParams,
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return fetch(`${authUrl}/signup`, requestOptions).then((res) => res.json());
};

const logout = (): Promise<boolean> => {
  const requestOptions = {
    method: 'POST',
    ...defaultParams,
  };

  return fetch(`${authUrl}/logout`, requestOptions).then(() => true);
};

const getUserInfo = (): Promise<UserModel> => {
  const requestOptions = {
    method: 'GET',
    ...defaultParams,
  };
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return fetch(`${authUrl}/user`, requestOptions).then((res) => res.json());
};

export { signin, signup, logout, getUserInfo };
