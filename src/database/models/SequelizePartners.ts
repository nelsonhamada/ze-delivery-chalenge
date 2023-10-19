import {
  DataTypes,
  Model,
  InferAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

export default class SequelizePartners extends Model<InferAttributes<SequelizePartners>> {
  declare id: CreationOptional<number>;

  declare tradingName: string;

  declare ownerName: string;

  declare document: string;

  declare coverageArea: number;

  declare address: number;
}

SequelizePartners.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tradingName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'trading_name',
  },
  ownerName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'owner_name',
  },
  document: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coverageArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'coverage_area',
  },
  address: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'partners',
  timestamps: false,
});
