const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {};

Review.init(
  {
    review_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true, 
    },
    review: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { 
          model: 'book',
          key: 'book_id'
        }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;
