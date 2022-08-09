import type { NextFunction, Request, Response } from 'express';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  let user = null;
  console.log(req.headers, 'req.headers auth');
  if (req.headers.cookie) {
    try {
      await fetch('https://ya-praktikum.tech/api/v2/auth/user', {
        credentials: 'include',
        headers: { Cookie: req.headers.cookie },
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
    res.status(403).send();

    return;
  }
  if (
    user === null &&
    !['/login', '/signin', '/game'].includes(req.url) &&
    !req.url.includes('?code=')
  ) {
    res.redirect('/welcome');

    return;
  }

  if (user && ['/login', '/signup'].includes(req.url)) {
    res.redirect('/game');

    return;
  }

  next();
};
