import type { NextFunction, Request, Response } from 'express';

export const authMiddleware = (req: Request, res: Response) => {
  let user = null;
  console.log(req.cookies, 'req.cookies auth');
  if (req.headers) {
    try {
      fetch('https://ya-praktikum.tech/api/v2/auth/user', {
        credentials: 'include',
      })
        .then((data) => {
          user = data;
          res.locals.user = user;
          console.log(user, 'vvvvv');
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
    // next();
  }
  if (
    user === null &&
    !['/login', '/signin', '/game'].includes(req.url) &&
    !req.url.includes('?code=')
  ) {
    // res.redirect('/welcome');
    // next();
  }

  if (user && ['/login', '/signup'].includes(req.url)) {
    res.redirect('/game');

    // next();
  }

  // next();
};
