/* eslint-disable class-methods-use-this */
import { SiteTheme } from 'server/models/site-theme';
import type { TSiteTheme } from 'server/models/types';
import type { BaseRESTService } from './baseRESTService';

// eslint-disable-next-line consistent-return
// export async function createTheme(newTheme: TSiteTheme) {
//   const theme = await getTheme(newTheme.theme_name);
//   if (!theme) {
//     return SiteTheme.create({
//       theme_name: newTheme.theme_name,
//       theme_background_color: newTheme.theme_background_color,
//       theme_text_color: newTheme.theme_text_color,
//       theme_id: newTheme.theme_id,
//     });
//   }
// }

export class SiteThemeService implements BaseRESTService {
  public find = (themeName: string) => SiteTheme.findOne({ where: { theme_name: themeName } });

  public create = (newTheme: TSiteTheme) =>
    SiteTheme.create({
      theme_name: newTheme.theme_name,
      theme_background_color: newTheme.theme_background_color,
      theme_text_color: newTheme.theme_text_color,
      theme_id: newTheme.theme_id,
    });
}
