// import { useState } from 'react';
import type { NextFunction, Request, Response } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  fetch('https://ya-praktikum.tech/api/v2/auth/user')
    .then((data) => data.json())
    .then((user) => {
      console.log(user, 'here');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      res.locals.userInfo = user;
    })
    .catch((err) => console.log(err));
  next();
};
