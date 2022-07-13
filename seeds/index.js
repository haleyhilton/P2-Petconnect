const seedDogs = require('./dog-seeds');
const seedUser = require('./user-seeds');
/* const seedUserDog = require('./userdog-seeds'); */
const seedMedia = require('./media-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedDogs();
  console.log('\n----- DOGS SEEDED -----\n');

  /* await seedUserDog();
  console.log('\n----- TAGS SEEDED -----\n'); */

  await seedMedia();
  console.log('\n----- MEDIA SEEDED -----\n');

  console.log('\n----- DATABASE SEEDED SUCCESFULLY -----\n');
  process.exit(0);
};

seedAll();

