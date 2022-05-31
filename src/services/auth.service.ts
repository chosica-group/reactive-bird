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

class AuthService {
    signin = (params: SigninParams) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        };

        return fetch(`${authUrl}/signin`, requestOptions)
            .then(res => console.log(res));
    }

    signup = (params: SignupParams) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        };

        return fetch(`${authUrl}/signup`, requestOptions)
            .then(res => console.log(res));
    }

    logout = () => {
        const requestOptions = { method: 'POST' };

        return fetch(`${authUrl}/logout`, requestOptions)
            .then(res => console.log(res));
    }

    getUserInfo = () => {
        return fetch(`${authUrl}/user`)
            .then(res => console.log(res));
    }
}

export const authService = new AuthService();