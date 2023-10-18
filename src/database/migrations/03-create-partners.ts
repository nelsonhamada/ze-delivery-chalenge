import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IPartner } from '../../interfaces/IPartner';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IPartner>>('partners', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      tradingName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'trading_name'
      },
      ownerName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'owner_name'
      },
      document: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coverageArea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'coverage_area',
        references: {
          model: 'coverage_areas',
          key: 'id'
        }
      },
      address: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'addresses',
          key: 'id'
        }
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('partners');
  }
}