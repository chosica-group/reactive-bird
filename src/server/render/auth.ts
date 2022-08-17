import type { NextFunction, Request, Response } from 'express';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  let user = null;
  // res.locals.user = { id: 3 }; это для проверки мидлвары
  if (req.headers.cookie) {
    try {
      user = await fetch('https://ya-praktikum.tech/api/v2/auth/user', {
        credentials: 'include',
        headers: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          cookie: req.headers.cookie || '',
        },
      })
        .then((data) => data.json())
        .then((data) => {
          if ('id' in data) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            res.locals.user = data;
          }
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
