import type { ComponentType } from 'react';
import { useEffect, useState } from 'react';
import { PlugComponent } from 'pages/plug';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from 'services/auth.service';
import { AuthState, setUserLoggedIn } from 'store/auth-reducer';

export const withAuth = (Component: ComponentType) => () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const authState = useSelector((state) => (state as { auth: AuthState }).auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState.isLoggedIn) {
      getUserInfo()
        .then((user) => {
          if (Number.isInteger(user.id)) {
            dispatch(setUserLoggedIn(true));
          }
        })
        .finally(() => setIsLoading(false))
        .catch(() => navigate('/login', { replace: true }));
    }
  });

  return isLoading ? <PlugComponent /> : <Component />;
};
