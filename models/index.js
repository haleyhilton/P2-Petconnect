// import models
const User = require('./User');
const Dog = require('./Dog');
const UserDog = require('./UserDog');
const Media = require('./Media');

// The code below is for dogs that have been created by a user and dogs that the user owns.

// Users have many Dogs
// User.hasMany(Dog, {
//   foreignKey: "user_id",
// });

// Each Dog belongs to a User
Dog.belongsTo(User, {
  foreignKey: "user_id",
});

// Users have many profile pictures
User.hasMany(Media, {
  foreignKey: "user_id",
});

// Profile pictures belong to only one User
Media.belongsTo(User, {
  foreignKey: "user_id",
});

// Dogs have many pictures as well
Dog.hasMany(Media, {
  foreignKey: "dog_id"
});

// Dog pictures belong to only one dog
Media.belongsTo(Dog, {
  foreignKey: "dog_id",
});

// The code below is for the linkage when a user follows a dog.

// User belongs to many Dog (through UserDog)
User.belongsToMany(Dog, { 
  through: UserDog,
  foreignKey: "dog_id"
});

// Dog belongs to many User (through UserDog)
Dog.belongsToMany(User, {
  through: UserDog,
  foreignKey: "user_id"
});

module.exports = {
  User,
  Dog,
  UserDog,
  Media
};
