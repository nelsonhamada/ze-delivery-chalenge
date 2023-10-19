import PartnersModel from '../models/PartnersModel';
import { IPartnersModel } from '../interfaces/IPartner';

export default class PartnersService {
  constructor(
    public partnersModel: IPartnersModel = new PartnersModel(),
  ) { }

  public async getAll() {
    const allPartners = await this.partnersModel.findAll();
    return { status: 'SUCCESSFUL', data: allPartners };
  }
}