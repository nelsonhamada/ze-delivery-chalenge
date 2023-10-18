import { Identifiable } from './index';

export interface IAddresses extends Identifiable {
  type: 'Point';
  coordinates: number[];
}
