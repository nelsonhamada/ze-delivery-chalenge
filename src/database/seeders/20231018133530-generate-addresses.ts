import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'addresses',
      [
        {
          type: 'Point',
          coordinates: JSON.stringify([
            -43.297337,
            -23.013538
         ])
        },      
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('adresses', {});
  },
};
