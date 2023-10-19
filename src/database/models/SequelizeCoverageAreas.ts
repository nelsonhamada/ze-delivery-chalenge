import {
  DataTypes,
  Model,
  InferAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

export default class SequelizeCoverageAreas extends Model<InferAttributes<SequelizeCoverageAreas>> {
  declare id: CreationOptional<number>;

  declare type: string;

  declare coordinates: number[][][][];
}

SequelizeCoverageAreas.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coordinates: {
    type: DataTypes.JSON,
  },
}, {
  sequelize: db,
  modelName: 'coverage_areas',
  timestamps: false,
});
