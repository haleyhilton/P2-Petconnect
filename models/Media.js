const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Media extends Model {}

Media.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    picture_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    dog_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    modelName: 'media',
  }
);

module.exports = Media;
