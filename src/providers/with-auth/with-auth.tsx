import type { ComponentType } from 'react';
import { useEffect } from 'react';
import { PlugComponent } from 'pages/plug';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import type { TUserTheme } from 'server/models/types';
// import { useAddUserThemeMutation } from 'services/theme/theme-api';
import { useDispatch } from 'react-redux';
import type { TUserTheme } from 'server/models/types';
// import { useGetUserThemeQuery } from 'services/theme/theme-api';
import { useGetUserQuery } from 'services/user';
// import { userInfoSelector } from 'store/auth-reducer';
import { setUserId, setUserLoggedIn, setUserThemeName } from 'store/auth-reducer';

export const withAuth = (Component: ComponentType) => () => {
  const { data: user, isLoading } = useGetUserQuery();
  const dispatch = useDispatch();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (user && Number.isInteger(user.id)) {
      dispatch(setUserId(user.id));
      dispatch(setUserLoggedIn(true));
    }
  });
  return <Component />;
};
