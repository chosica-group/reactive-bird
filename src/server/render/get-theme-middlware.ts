import type { NextFunction, Request, Response } from 'express';
import type { TSiteTheme } from 'server/models/types';

export const getTheme = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.user?.theme_name) {
    fetch(`http://localhost:9000/my-app/v1/theme/${res.locals.user.theme_name}`)
      .then((data) => data.json())
      .then((theme: TSiteTheme) => {
        if (theme.theme_name) {
          res.locals.user.theme_data = theme;
        }
      })
      .catch((err) => console.log(err));
  }
  next();
};
