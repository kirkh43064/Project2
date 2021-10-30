const { Books } = require('../models');

const bookdata = [
    {
      id: '',  
      title: '',
      author: '',
      publishedDate: '',
      rating: '',
      review: '',
      genre: ''
    },

const seedbooks = () => Gallery.bulkCreate(bookdata);

module.exports = seedbooks;