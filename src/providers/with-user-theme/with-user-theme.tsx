import type { ComponentType } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoSelector } from 'store/auth-reducer';
import { useGetThemeQuery } from 'services/theme/theme-api';
import { setUserThemeName, setUserTheme } from 'store/theme-reduser';
import { useGetUserThemeQuery } from 'services/theme/theme-api';

export const withUserTheme = (Component: ComponentType) => () => {
  const authState = useSelector(userInfoSelector);
  const [themeName, setThemeName] = useState('light');
  const [userId, setUserId] = useState(1);
  const [skip1, setSkip1] = useState(true);
  const [skip, setSkip] = useState(true);
  const dispatch = useDispatch();
  const { data } = useGetUserThemeQuery(userId, { skip });
  const { data: theme } = useGetThemeQuery(themeName, { skip: skip1 });
  if (authState.isLoggedIn) {
    setUserId(authState.userId!);
    setSkip(false);
  }
  useEffect(() => {
    if (data && data.theme_name) {
      setSkip1(false);
      dispatch(setUserThemeName(data.theme_name));
    }
  }, [data, dispatch]);
  useEffect(() => {
    if (theme) {
      dispatch(setUserTheme(theme));
    }
  });
  return <Component />;
};
