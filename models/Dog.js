const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Dog extends Model {}

Dog.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        capitalize(value) {
          const str = value;
          const str2 = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
          return str2
        }
      }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        }
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          capitalize(value) {
            const str = value;
            const str2 = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
            return str2
          }
        }
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['male', 'female']]
        }
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isLowercase: true,
        }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    for_sale: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    media: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dog',
  }
);

module.exports = Dog;