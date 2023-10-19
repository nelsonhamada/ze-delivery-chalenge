import { Router } from 'express';
import partnersRouter from './partners.routes';

const router = Router();

router.use('/partners', partnersRouter);

export default router;