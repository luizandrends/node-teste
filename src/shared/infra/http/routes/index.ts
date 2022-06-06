import { Router } from 'express';

import userRouter from '@modules/users/infra/http/routes/user.routes';
import probesRouter from './probes';

const routes = Router();

routes.use('/probes', probesRouter);

routes.use('/users', userRouter);

export default routes;
