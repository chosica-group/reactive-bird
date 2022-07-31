import type { TUserTheme } from 'server/models/types';
import { UserTheme } from 'server/models/user-theme';

export async function getUserTheme(user_id: number) {
  return UserTheme.findByPk(user_id);
}

export async function addUser(newUser: TUserTheme) {
  return UserTheme.create({
    user_id: newUser.user_id,
    theme_name: newUser.theme_name,
  });
}

export async function updateUserTheme(data: TUserTheme) {
  return UserTheme.update({ theme_name: data.theme_name }, { where: { user_id: data.user_id } });
}
