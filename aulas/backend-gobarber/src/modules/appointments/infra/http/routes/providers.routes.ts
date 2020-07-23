import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderMonthAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providersMonthAvailability = new ProviderMonthAvailabilityController();
const providersDayAvailability = new ProviderDayAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  providersMonthAvailability.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  providersDayAvailability.index,
);

export default providersRouter;
