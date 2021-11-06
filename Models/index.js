const Author = require('./author');
const Book = require('./book');
const User = require('./user');

Author.hasMany(Book, {foreignKey: 'author_id'});
Book.belongsTo(Author, {foreignKey: 'author_id'});


module.exports = { Author, Book, User };