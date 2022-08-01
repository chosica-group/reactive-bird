import type { Request, Response } from 'express';
import type { TSiteTheme } from 'server/models/types';
import { siteThemeService } from 'server/services';

type TBody = {
  body: TSiteTheme;
};

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
        theme_text_color: body.theme_text_color,
        theme_id: body.theme_id,
      });
    }
  };

  public static find = async (request: Request, response: Response) => {
    const { themeMame } = request.params;
    await siteThemeService.find(themeMame);
  };
}
