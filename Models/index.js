const Author = require('./author');
const Book = require('./book');

Author.hasMany(Book, {foreignKey: 'author_id'});
Book.belongsTo(Author, {foreignKey: 'author_id'});


module.exports = { Author, Book }