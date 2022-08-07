import type { ComponentType } from 'react';
// import { useEffect, useState } from 'react';
import { PlugComponent } from 'pages/plug';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import type { TUserTheme } from 'server/models/types';
// import { useAddUserThemeMutation } from 'services/theme/theme-api';
import { useSelector } from 'react-redux';
import { isLoggedInIfoSelector } from 'store/auth-reducer';

// import { useGetUserThemeQuery } from 'services/theme/theme-api';
// import { useAddUserThemeMutation } from 'services/theme/theme-api';
// import { useGetUserQuery } from 'services/user';
// import { setUserId, setUserLoggedIn, setUserTheme } from 'store/auth-reducer';

export const withAuth = (Component: ComponentType) => () => {
  const authState = useSelector(isLoggedInIfoSelector);
  console.log(authState.isLoggedIn, 'authState');
  // const { data, isLoading } = useGetUserQuery();
  // const [skipUserTheme, setSkipUserTheme] = useState(true);
  // const [userInfo, setUserInfo] = useState<TUserTheme>();
  // const [currentUserId, setCurrentUserId] = useState<number>(1);
  // const [addUserTheme] = useAddUserThemeMutation();
  // const dispatch = useDispatch();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //   if (data && Number.isInteger(data.id)) {
  //     // setCurrentUserId(data.id);

  //     // eslint-disable-next-line @typescript-eslint/no-floating-promises
  //     dispatch(setUserId(data.id));
  //     addUserTheme({
  //       user_id: 123,
  //       theme_name: 'light',
  //     })
  //     // eslint-disable-next-line @typescript-eslint/no-floating-promises
  //     dispatch(setUserLoggedIn(true));
  //   }
  // });
  // useEffect(() => {
  //   if (userThemeL) {
  //     console.log('222222', userThemeL);
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  //     dispatch(setUserTheme(userThemeL.theme_name));
  //   }
  // });
  return authState.isLoggedIn ? <PlugComponent /> : <Component />;
};
