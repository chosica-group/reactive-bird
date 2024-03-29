import type { ComponentType } from 'react';
import { useEffect } from 'react';
import { PlugComponent } from 'pages/plug';
import { useDispatch } from 'react-redux';
import { useGetThemeQuery, useGetUserThemeQuery } from 'services/theme/theme-api';
import { useGetUserQuery } from 'services/user';
import { setUserId, setUserLoggedIn } from 'store/auth-reducer';
import { setUserTheme, setUserThemeName } from 'store/theme-reduser';

export const withAuth = (Component: ComponentType) => () => {
  const dispatch = useDispatch();
  const { data: user, isLoading, isSuccess } = useGetUserQuery();
  const { data, isSuccess: isSuccessUserTheme } = useGetUserThemeQuery(user?.id || 1, {
    skip: !isSuccess && !user?.id,
  });
  const { data: theme, isSuccess: isSuccessTheme } = useGetThemeQuery(data?.theme_name || 'light', {
    skip: !isSuccessUserTheme,
  });
  if (isSuccessUserTheme) {
    dispatch(setUserThemeName(data.theme_name));
  }
  if (isSuccessTheme) {
    dispatch(setUserTheme(theme));
  }
  useEffect(() => {
    if (user && Number.isInteger(user.id)) {
      dispatch(setUserId(user.id));
      dispatch(setUserLoggedIn(true));
    }
  });
  return isLoading ? <PlugComponent /> : <Component />;
};
