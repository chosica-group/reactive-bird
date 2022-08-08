import { useEffect } from 'react';
import { REDIRECT_URI } from 'pages/signin/components/signin-form/signin-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authWithYandexOauth } from 'services/auth/auth-api';
import { userInfoSelector, setUserLoggedIn } from 'store/auth-reducer';

export const AccessToken = () => {
  const authState = useSelector(userInfoSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  const queryString = document?.location?.search;
  const params = new URLSearchParams(queryString);
  const code: string | null = params.get('code');
  useEffect(() => {
    if (code && authState.isLoggedIn === false) {
      authWithYandexOauth({ code, redirect_uri: REDIRECT_URI })
        .then(() => {
          dispatch(setUserLoggedIn(true));
          history.push('/game');
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    } else if (!code && authState.isLoggedIn === false) {
      history.push('/welcome');
    } else {
      history.push('/');
    }
  });
  return <div />;
};
