const Author = require('./authors');
const Book = require('./books');

Author.hasMany(Book, {foreignKey: 'author_id'});
Book.belongsTo(Author, {foreignKey: 'author_id'});


module.exports = { Author, Book }