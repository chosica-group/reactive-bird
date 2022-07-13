import config from '../config';
import type {
  SignInRes,
  SignUpRes,
  SigninParams,
  SignupParams,
  TAuthWithYandex,
  TClientId,
  TReject,
} from './types';

const authUrl = `${config.API_URL}/auth`;
const oAuthUrl = `${config.API_URL}/oauth`;

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

const getServiceIdOauth = (params: string): Promise<TClientId | TReject> => {
  const requestOptions = {
    method: 'GET',
  };

  return fetch(`${oAuthUrl}/yandex/service-id?redirect_uri=${params}`, requestOptions).then((res) =>
    res.json(),
  ) as Promise<TClientId | TReject>;
};

const authWithYandexOauth = (params: TAuthWithYandex): Promise<Response | TReject> => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({ code: params.code, redirect_uri: params.redirect_uri }),
    ...defaultParams,
  };

  return fetch(`${oAuthUrl}/yandex`, requestOptions);
};

export { signin, signup, logout, getServiceIdOauth, authWithYandexOauth };
