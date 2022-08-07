import { Router } from 'express';
import { UserThemeAPI } from 'server/controllers';
import config from 'services/config';

export const userThemeRoutes = (router: Router) => {
  const userThemeRouter: Router = Router();
  userThemeRouter
    .get('/theme/user/:id', UserThemeAPI.find)
    .post('/theme/newuser', UserThemeAPI.findAndCreate)
    // .post('/theme/newuser', UserThemeAPI.create)
    .put('/theme/user', UserThemeAPI.update);
  return router.use(config.API_APP_URL, userThemeRouter);
};
