// import models
const User = require('./User');
const Dog = require('./Dog');

// Users have many Dogs
User.hasMany(Dog, {
  foreignKey: "user_id"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
