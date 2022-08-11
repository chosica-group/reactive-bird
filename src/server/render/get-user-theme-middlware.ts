import type { TUserTheme } from 'server/models/types';

export const getUserTheme = async (id: number) => {
  let themeName;
  if (id) {
    await fetch(`http://localhost:9000/my-app/v1/theme/user/${id}`)
      .then((data) => data.json())
      .then((userTheme: TUserTheme) => {
        themeName = userTheme.theme_name;
      })
      .catch((err) => console.log(err));
  }
  console.log(themeName, 'themeName');
  return themeName;
};
