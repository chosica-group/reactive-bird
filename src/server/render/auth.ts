import type { NextFunction, Request, Response } from 'express';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  let user = null;
  res.locals.user = { id: 3055 };
  if (req.headers.cookie) {
    try {
      await fetch('https://ya-praktikum.tech/api/v2/auth/user', {
        credentials: 'include',
      })
        .then((data) => {
          user = data;
          res.locals.user = user;
          console.log(user, 'user');
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
  if (user === null && req.url.includes('/api/v2')) {
    // res.status(403).send();
    // return;
  }

  if (user && ['/login', '/signup'].includes(req.url)) {
    // res.redirect('/game');
    // return;
  }

  next();
};
