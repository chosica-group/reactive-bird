import { Router } from 'express';
import { ThemeAPI } from 'server/controllers';
import config from 'services/config';

export const themeRoutes = (router: Router) => {
  const themeRouter: Router = Router();

  themeRouter.post('/theme', ThemeAPI.create).get('/theme/:themeName', ThemeAPI.find);
  return router.use(config.API_APP_URL, themeRouter);
};
