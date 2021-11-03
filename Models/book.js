const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { 
          model: 'author',
          key: 'author_id'
        }
    },
    publishedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    review: {
        type: DataTypes.TEXT,
        allowNull: true, 
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;
