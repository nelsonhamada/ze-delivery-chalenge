import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'partners',
      [
        {
          trading_name: 'Adega Osasco',
          owner_name: 'Ze da Ambev',
          document: '02.453.716/000170',
          coverage_area: 1,
          address: 1,
        },      
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('partners', {});
  },
};
