const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Author extends Model {}

Author.init(
  {
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'author',
  }
);

module.exports = Author;
