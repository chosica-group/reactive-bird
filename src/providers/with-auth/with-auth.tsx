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
import { useAddUserThemeMutation } from 'services/theme/theme-api';
import { useGetUserQuery } from 'services/user';
// import { userInfoSelector } from 'store/auth-reducer';
import { setUserId, setUserLoggedIn, setUserThemeName } from 'store/auth-reducer';

export const withAuth = (Component: ComponentType) => () => {
  const { data: user, isLoading } = useGetUserQuery();
  const [addUserTheme] = useAddUserThemeMutation();
  const dispatch = useDispatch();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (user && Number.isInteger(user.id)) {
      console.log(user, 'user');
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(setUserId(user.id));
      // addUserTheme({
      //   user_id: user.id,
      //   theme_name: 'light',
      // })
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
      // .then((theme: TUserTheme) => {
      // dispatch(setUserThemeName(theme.theme_name));
      // })
      // .catch((err) => console.log(err, 'error '));
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(setUserLoggedIn(true));
    }
  });
  // useEffect(() => {
  //   if (userThemeL) {
  //     console.log('222222', userThemeL);
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  //     dispatch(setUserThemeName(userThemeL.theme_name));
  //   }
  // });
  return isLoading ? <PlugComponent /> : <Component />;
};
