// import type { ComponentType } from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import type { TUserTheme } from 'server/models/types';
// import { useAddUserThemeMutation } from 'services/theme/theme-api';
// import { setUserThemeName, userInfoSelector } from 'store/auth-reducer';

// export const withUserTheme = (Component: ComponentType) => () => {
//   const [setTheme, { data }] = useAddUserThemeMutation(); // эта штука бесконечно вызывает себя потому что стор меняется и обновляется
//   const authState = useSelector(userInfoSelector);
//   if (authState.isLoggedIn && Number.isInteger(authState.userId)) {
//     const id = authState.userId as unknown as number;
//     const userTheme: TUserTheme = {
//       user_id: id,
//       theme_name: 'light',
//     };
//     // eslint-disable-next-line @typescript-eslint/no-floating-promises
//     setTheme(userTheme);
//   }
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (data && data.theme_name) {
//       dispatch(setUserThemeName(data.theme_name));
//     }
//   });
//   return <Component />;
// };
