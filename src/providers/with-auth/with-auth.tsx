import type { ComponentType } from 'react';
import { useEffect } from 'react';
import { PlugComponent } from 'pages/plug';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetUserQuery } from 'services/user';
import { setUserLoggedIn } from 'store/auth-reducer';

export const withAuth = (Component: ComponentType) => () => {
  const { data, error, isLoading } = useGetUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (data && Number.isInteger(data.id)) {
      dispatch(setUserLoggedIn(true));
    }
  }, [data, error, isLoading, dispatch, navigate]);

  return isLoading ? <PlugComponent /> : <Component />;
};
