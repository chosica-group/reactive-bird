import { Router } from 'express';
import { ThemeAPI } from 'server/controllers';

export const themeRoutes = (router: Router) => {
  const themeRouter: Router = Router();

  themeRouter.post('/', ThemeAPI.create).get('/:id', ThemeAPI.find);
};
