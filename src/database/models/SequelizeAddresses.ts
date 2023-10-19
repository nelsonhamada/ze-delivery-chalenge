import {
  DataTypes,
  Model,
  InferAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

export default class SequelizeAddresses extends Model<InferAttributes<SequelizeAddresses>> {
  declare id: CreationOptional<number>;

  declare type: string;

  declare coordinates: number[];
}

SequelizeAddresses.init({
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
  modelName: 'addresses',
  timestamps: false,
});
