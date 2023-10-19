import { Request, Response } from 'express';
import PartnersService from '../services/PartnersService';

export default class PartnersController {
  constructor(
    private partnersService = new PartnersService(),
  ) {}

  public async getAllPartners(_req: Request, res: Response) {
    const serviceResponse = await this.partnersService.getAll();
    return res.status(200).json(serviceResponse.data);
  }
}