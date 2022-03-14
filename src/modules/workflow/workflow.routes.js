import { Router } from 'express';

import { FetchWorkflow } from './workflow.controller';

const routes = Router();

routes.get('/workflow', FetchWorkflow);

export default routes;
