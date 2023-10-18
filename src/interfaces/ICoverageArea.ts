import { Identifiable } from './index';

export interface ICoverageArea extends Identifiable {
  type: 'MultiPolygon';
  coordinates: number[][][][];
}
