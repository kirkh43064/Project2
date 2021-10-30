const { Books } = require('../models');

const bookdata = [
    {
      prodID: '',  
      title: '',
      author: '',
      published: '',
      rating: '',
      review: '',
      isFiction: ''
    },

const seedbooks = () => Gallery.bulkCreate(bookdata);

module.exports = seedbooks;