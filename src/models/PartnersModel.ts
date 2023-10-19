import SequelizePartners from '../database/models/SequelizePartners';
import { IPartnersModel } from '../interfaces/IPartner';

export default class PartnersModel implements IPartnersModel {
  public model = SequelizePartners;

  async findAll() {
    const partners = this.model.findAll();
    return partners;
  }
}