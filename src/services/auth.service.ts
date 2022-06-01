import config from './config';

const authUrl = `${config.apiUrl}/auth`;

export interface SigninParams {
    login: string;
    password: string;
}

export interface SignupParams {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
}

interface SignUpRes {
    id: number;
}

export interface UserModel {
    avatar: string | null;
    display_name: string | null;
    email: string;
    first_name: string;
    id: number;
    login: string;
    phone: string | null;
    second_name: string;
}

const defaultParams = {
    credentials: 'include' as RequestCredentials,
    headers: { 'Content-Type': 'application/json' },
}

class AuthService {
    signin = (params: SigninParams) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(params),
            ...defaultParams
        };

        return fetch(`${authUrl}/signin`, requestOptions);
    }

    signup = (params: SignupParams): Promise<SignUpRes> => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(params),
            ...defaultParams
        };

        return fetch(`${authUrl}/signup`, requestOptions)
            .then(res => res.json());
    }

    logout = (): Promise<boolean> => {
        const requestOptions = {
            method: 'POST',
            ...defaultParams
        };

        return fetch(`${authUrl}/logout`, requestOptions)
            .then(() => true);
    }

    getUserInfo = (): Promise<UserModel> => {
        const requestOptions = {
            method: 'GET',
            ...defaultParams
        };

        return fetch(`${authUrl}/user`, requestOptions)
            .then(res => res.json());
    }
}

export const authService = new AuthService();