const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [8, 30],
      }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[0-9a-f]{64}$/i
        }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        isEmail: true, 
      },
    },
    first_name: {
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
    last_name: {
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
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        }
    },
    zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
          len: [5,5]
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;