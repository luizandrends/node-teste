import { Router } from 'express';

const routes = Router();

routes.get('/liveness', (request, response) => {
  return response.json({ ok: true });
});

routes.get('/readiness', (request, response) => {
  return response.json({ ok: true });
});

export default routes;
