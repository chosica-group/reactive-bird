import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import {
  SignInRes,
  SignUpRes,
  SigninParams,
  SignupParams,
  getUserInfo,
  signin,
  signup,
} from 'services/auth.service';

export type AuthInfo = {
  isAuthorized: boolean;
  loading: boolean;
  signinUser: (params: SigninParams) => Promise<SignInRes>;
  signupUser: (params: SignupParams) => Promise<SignUpRes>;
};

export const AuthContext = createContext<AuthInfo>({} as AuthInfo);

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  useEffect(() => {
    getUserInfo()
      .then((user) => setIsAuthorized(Number.isInteger(user.id)))
      .catch(() => setIsAuthorized(false))
      .finally(() => setLoadingInitial(false));
  }, []);

  const memoedValue = useMemo(() => {
    const signinUser = (params: SigninParams) => {
      setLoading(true);

      return signin(params)
        .then((res) => {
          if (!res.reason) {
            setIsAuthorized(true);
          }

          return res;
        })
        .finally(() => setLoading(false));
    };

    const signupUser = (params: SignupParams) => {
      setLoading(true);

      return signup(params)
        .then((res) => {
          if (!res.reason) {
            setIsAuthorized(false);
          }

          return res;
        })
        .finally(() => setLoading(false));
    };

    return {
      isAuthorized,
      loading,
      signinUser,
      signupUser,
    };
  }, [isAuthorized, loading]);

  return (
    <AuthContext.Provider value={memoedValue}>{!loadingInitial && children}</AuthContext.Provider>
  );
};
