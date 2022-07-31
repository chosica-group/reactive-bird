import { addUser, getUserTheme, updateUserTheme } from 'server/controllers/user-theme';

export const handleChangeMode1 = async (userId: number, themeName: string) => {
  const userTheme = await getUserTheme(userId);
  if (!userTheme) {
    await addUser({ user_id: userId, theme_name: themeName });
  } else {
    await updateUserTheme({ user_id: userId, theme_name: themeName });
  }
  console.log('handleChangeMode');
};
