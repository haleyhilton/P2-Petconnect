const seedDogs = require('./dog-seeds');
const seedUser = require('./user-seeds');
const seedUserdog = require('./userdog-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedDogs();
  console.log('\n----- DOGS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedUserdog();
  console.log('\n----- TAGS SEEDED -----\n');


  process.exit(0);
};

seedAll();
