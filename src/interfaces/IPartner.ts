import { Identifiable } from './index';

export interface IPartner extends Identifiable {
  tradingName: string;
  ownerName: string;
  document: string;
  coverageArea: number;
  address: number;
}
