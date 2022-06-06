import { Router } from 'express';

import probesRouter from './probes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ ok: true });
});

routes.use('/probes', probesRouter);

export default routes;
