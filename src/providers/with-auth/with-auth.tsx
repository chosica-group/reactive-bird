import type { ComponentType } from 'react';
import { useEffect } from 'react';
import { PlugComponent } from 'pages/plug';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useGetUserQuery } from 'services/user';
import { setUserLoggedIn } from 'store/auth-reducer';

export const withAuth = (Component: ComponentType) => () => {
  const { data, error, isLoading } = useGetUserQuery();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (data && Number.isInteger(data.id)) {
      dispatch(setUserLoggedIn(true));
    }
  }, [data, error, isLoading, dispatch, history]);

  return isLoading ? <PlugComponent /> : <Component />;
};
