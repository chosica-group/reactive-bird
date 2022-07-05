import config from '../config';
import type { SignInRes, SignUpRes, SigninParams, SignupParams } from './types';

const authUrl = `${config.API_URL}/auth`;

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

  return fetch(`${authUrl}/signin`, requestOptions).then((res) =>
    res.status === 200 ? { reason: '' } : res.json(),
  ) as Promise<SignInRes>;
};

const signup = (params: SignupParams): Promise<SignUpRes> => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(params),
    ...defaultParams,
  };

  return fetch(`${authUrl}/signup`, requestOptions).then((res) => res.json()) as Promise<SignUpRes>;
};

const logout = (): Promise<boolean> => {
  const requestOptions = {
    method: 'POST',
    ...defaultParams,
  };

  return fetch(`${authUrl}/logout`, requestOptions).then(() => true);
};

export { signin, signup, logout };
