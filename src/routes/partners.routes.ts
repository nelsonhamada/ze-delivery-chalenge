import { Request, Router, Response } from 'express';
import PartnersController from '../controllers/PartnersController';

const partnersController = new PartnersController();
const router = Router();

router.get('/', (req: Request, res:Response) => partnersController.getAllPartners(req, res));

export default router;
