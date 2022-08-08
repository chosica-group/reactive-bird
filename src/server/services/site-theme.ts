/* eslint-disable class-methods-use-this */
import { SiteTheme } from 'server/models/site-theme';
import type { TSiteTheme } from 'server/models/types';
import type { BaseRESTService } from './baseRESTService';

export class SiteThemeService implements BaseRESTService {
  public find = (themeName: string) => SiteTheme.findOne({ where: { theme_name: themeName } });

  public findAll = () => SiteTheme.findAll();

  // eslint-disable-next-line consistent-return
  public create = async (newTheme: TSiteTheme) => {
    const theme = await this.find(newTheme.theme_name);
    if (!theme) {
      return SiteTheme.create({
        theme_name: newTheme.theme_name,
        theme_background_color: newTheme.theme_background_color,
        theme_header_text_color: newTheme.theme_header_text_color,
        theme_text_color: newTheme.theme_text_color,
        theme_id: newTheme.theme_id,
      });
    }
  };
  // TO DO сделать update
}
