import { Router } from 'express';
import comments  from './comments'
import topics from './topics';
const routes = Router({ mergeParams: true });

routes.use('/topics', topics)
routes.use('/topics', comments);

export default routes;
