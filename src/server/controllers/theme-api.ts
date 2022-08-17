import type { Request, Response } from 'express';
import type { TSiteTheme } from 'server/models/types';
import { SiteThemeService } from 'server/services';

type TBody = {
  body: TSiteTheme;
};
const siteThemeService = new SiteThemeService();

export class ThemeAPI {
  // @validation({/* rules */}) // Можно использовать декораторы, можно передавать в middlewares
  public static create = async (request: Request, response: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { body }: TBody = request;
    const theme = await siteThemeService.find(body.theme_name);
    if (!theme) {
      await siteThemeService.create({
        theme_name: body.theme_name,
        theme_background_color: body.theme_background_color,
        theme_header_text_color: body.theme_header_text_color,
        theme_text_color: body.theme_text_color,
        theme_id: body.theme_id,
      });
      response.status(200).send(body);
    } else {
      response.status(404).send({ reason: 'theme exists' });
    }
  };

  public static findAll = async (request: Request, response: Response) => {
    try {
      const allThemes = await siteThemeService.findAll();
      if (allThemes !== undefined) {
        response.send(allThemes);
      }
    } catch (e) {
      response.status(500).send({ reason: 'error' });
    }
  };

  public static find = async (request: Request, response: Response) => {
    const { themeName } = request.params;
    if (!themeName) response.status(404).send({ reason: 'invalid request' });
    try {
      const theme = await siteThemeService.find(themeName);
      if (theme) {
        response.send(theme);
      } else {
        response.status(404).send({ reason: 'theme not found' });
      }
    } catch (e) {
      response.status(500).send({ reason: 'error' });
    }
  };
}
