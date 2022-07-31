import { SiteTheme } from 'server/models/site-theme';
import type { TSiteTheme } from 'server/models/types';

export async function getTheme(themeName: string) {
  return SiteTheme.findOne({ where: { theme_name: themeName } });
}

// eslint-disable-next-line consistent-return
export async function createTheme(newTheme: TSiteTheme) {
  const theme = await getTheme(newTheme.theme_name);
  if (!theme) {
    return SiteTheme.create({
      theme_name: newTheme.theme_name,
      theme_background_color: newTheme.theme_background_color,
      theme_text_color: newTheme.theme_text_color,
      theme_id: newTheme.theme_id,
    });
  }
}
