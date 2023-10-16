// Isso é apenas um arquivo para que o Sequelize
// não quebre ao rodar `npm run db:reset` sem uma Seeder real.

export default {
  async up() {
    return true;
  },
  async down() {
    return true;
  },
};
