import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IAddresses } from '../../interfaces/IAddresses';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IAddresses>>('addresses', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
        type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coordinates: {
        type: DataTypes.JSON
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('addresses');
  }
}