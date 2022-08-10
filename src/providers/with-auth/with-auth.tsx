import type { ComponentType } from 'react';
import { useEffect } from 'react';
import { PlugComponent } from 'pages/plug';
import { useDispatch } from 'react-redux';
import { useGetUserQuery } from 'services/user';
import { setUserId, setUserLoggedIn } from 'store/auth-reducer';

export const withAuth = (Component: ComponentType) => () => {
  const { data: user, isLoading } = useGetUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && Number.isInteger(user.id)) {
      dispatch(setUserId(user.id));
      dispatch(setUserLoggedIn(true));
    }
  });
  return isLoading ? <PlugComponent /> : <Component />;
};
