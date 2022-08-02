/* eslint-disable class-methods-use-this */
import type { TUserTheme } from 'server/models/types';
import { UserTheme } from 'server/models/user-theme';
import type { BaseRESTService } from './baseRESTService';

export class UserThemeService implements BaseRESTService {
  public find = (user_id: number) => UserTheme.findByPk(user_id);

  public create = (newUser: TUserTheme) =>
    UserTheme.create({
      user_id: newUser.user_id,
      theme_name: newUser.theme_name,
    });

  public update = (data: TUserTheme) =>
    UserTheme.update({ theme_name: data.theme_name }, { where: { user_id: data.user_id } });
}
