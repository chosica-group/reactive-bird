import type { NextFunction, Request, Response } from 'express';
import type { TUserTheme } from 'server/models/types';

export const getUserTheme = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.user?.id) {
    fetch(`http://localhost:9000/my-app/v1/theme/user/${res.locals.user.id}`)
      .then((data) => data.json())
      .then((userTheme: TUserTheme) => {
        console.log(userTheme, 'userTheme');
        if (userTheme.theme_name) {
          res.locals.user.theme_name = userTheme.theme_name;
        }
      })
      .catch((err) => console.log(err));
  }
  next();
};
