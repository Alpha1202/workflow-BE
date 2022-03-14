import { Router } from 'express';

import { FetchWorkflow, SaveWorkflow} from './workflow.controller';

const routes = Router();

routes.put('/save', SaveWorkflow);

routes.get('/workflow', FetchWorkflow);

export default routes;
