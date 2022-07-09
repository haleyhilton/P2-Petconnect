const seedDogs = require('./dog-seeds');
const seedUsers = require('./user-seeds');
const seedUserdogs = require('./userdog-seeds');
const seedMedia = require('./media-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedDogs();
  console.log('\n----- DOGS SEEDED -----\n');

  await seedUserdogs();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedMedia();
  console.log('\n----- MEDIA SEEDED -----\n');

  process.exit(0);
};

seedAll();
