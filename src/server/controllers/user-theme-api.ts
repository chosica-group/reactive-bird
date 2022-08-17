import type { Request, Response } from 'express';
import type { TUserTheme } from 'server/models/types';
import { UserThemeService } from 'server/services';

type TBody = {
  body: TUserTheme;
};
const userThemeService = new UserThemeService();

export class UserThemeAPI {
  // @validation({/* rules */}) // Можно использовать декораторы, можно передавать в middlewares
  public static create = async (request: Request, response: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { body }: TBody = request;
    if (body) {
      const user = await userThemeService.find(Number(body.user_id));
      if (!user) {
        await userThemeService.create({
          user_id: body.user_id,
          theme_name: body.theme_name,
        });
        response.status(200).send(body);
      } else {
        response.status(404).send({ reason: 'user exists' });
      }
    } else {
      response.status(404).send({ reason: 'error' });
    }
  };

  public static findAndCreate = async (request: Request, response: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { body }: TBody = request;
    if (body) {
      try {
        const user = await userThemeService.find(Number(body.user_id));
        if (!user) {
          await userThemeService.create({
            user_id: body.user_id,
            theme_name: body.theme_name,
          });
          response.status(200).send(body);
        } else {
          response.status(200).send(user);
        }
      } catch (e) {
        response.status(500).send({ reason: 'error' });
      }
    }
  };

  public static find = async (request: Request, response: Response) => {
    const { id } = request.params;
    if (!id) response.status(404).send('not found');
    try {
      const user = await userThemeService.find(Number(id));
      if (user) {
        response.send(user);
      } else {
        response.status(404).send({ reason: 'not found' });
      }
    } catch (e) {
      response.status(500).send({ reason: 'error' });
    }
  };

  public static update = async (request: Request, response: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { body }: TBody = request;
    try {
      const user = await userThemeService.find(Number(body.user_id));
      if (user) {
        await userThemeService.update(body);
        response.send(body);
      } else {
        response.status(404).send({ reason: 'user not found' });
      }
    } catch (e) {
      response.status(500).send({ reason: 'error' });
    }
  };
}
