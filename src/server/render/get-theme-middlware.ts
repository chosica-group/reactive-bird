import type { TSiteTheme } from 'server/models/types';

export const getTheme = async (themeName: string) => {
  let theneData;
  if (themeName) {
    await fetch(`http://localhost:9000/my-app/v1/theme/${themeName}`)
      .then((data) => data.json())
      .then((theme: TSiteTheme) => {
        if (theme.theme_name) {
          theneData = theme;
        }
      })
      .catch((err) => console.log(err));
  }
  console.log(theneData, 'theneData');
  return theneData;
};
