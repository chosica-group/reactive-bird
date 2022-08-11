// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useGetThemeQuery, useGetUserThemeQuery } from 'services/theme/theme-api';
// import type { AuthState } from 'store/auth-reducer';
// import { setUserTheme, setUserThemeName } from 'store/theme-reduser';

// export const WithUserTheme = (authState: AuthState) => {
//   const [themeName, setThemeName] = useState('light');
//   const [userId, setUserId] = useState(1);
//   const [skip1, setSkip1] = useState(true);
//   const [skip, setSkip] = useState(true);
//   const dispatch = useDispatch();
//   const { data } = useGetUserThemeQuery(userId, { skip });
//   const { data: theme } = useGetThemeQuery(themeName, { skip: skip1 });
//   // eslint-disable-next-line react/destructuring-assignment
//   if (authState.isLoggedIn) {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-non-null-assertion, react/destructuring-assignment
//     setUserId(authState.userId!);
//     setSkip(false);
//   }
//   useEffect(() => {
//     if (data && data.theme_name) {
//       setSkip1(false);
//       dispatch(setUserThemeName(data.theme_name));
//     }
//   }, [data, dispatch]);
//   useEffect(() => {
//     if (theme) {
//       dispatch(setUserTheme(theme));
//     }
//   });
//   // return <div />;
// };
