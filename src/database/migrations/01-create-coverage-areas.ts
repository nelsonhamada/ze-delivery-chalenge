import { Model, QueryInterface, DataTypes } from 'sequelize';
import { ICoverageArea } from '../../interfaces/ICoverageArea';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICoverageArea>>('coverage_areas', {
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
        type: DataTypes.JSON,
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('coverage_areas');
  }
}