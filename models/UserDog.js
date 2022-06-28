const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserDog extends Model {}

UserDog.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    dog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'dog',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_dog',
  }
);

module.exports = UserDog;
